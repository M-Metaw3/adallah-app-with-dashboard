const consultationModel = require('../../db/models/consultation.model')
const lawyerModel = require('../../db/models/lawyer.model')
const userModel = require('../../db/models/user.model')
// const lawyerModel = require('../../db/models/lawyer.model')
const Helper = require('../helper')
class Consultation {
    //as a citizen------------------------------------------------------------------------
    static postConsultation = async (req, res) => {
        Helper.handlingMyFunction(req, res, async (req) => {
            if (req.params.lawyerId == req.user._id) {
                throw new Error('you can not make a consultation with your self')
            }
            const lawyer = await Helper.isThisIdExistInThisModel(req.params.lawyerId, userModel, 'lawyer')
            if (lawyer.userType != 'lawyers' || !lawyer.checked) {
                throw new Error('this user is not a lawyer')
            }
            const newConsulating = consultationModel({ ...req.body, lawyerDetails: req.params.lawyerId, citizenDetails: req.user._id, status: 'pending' })
            if (true) {
                return newConsulating.save()
            }
        }, 'you asked the lawyer for consultation wait for his respond')
        // try {
        //     const postConsulatin = await new consultationModel(req.body)
        //     const postSaved = await postConsulatin.save()
        //     res.status(201).json({ message: "consultation request sended ", data: postSaved })
        // } catch (error) {
        //     res.status(400).json({ message: "error ", error: error })
        // }

    }
    static rescheduleConsultation = (req, res) => {
        Helper.handlingMyFunction(req, res, (req) => {
            const consultation = Helper.isThisIdExistInThisModel(req.params.id, consultationModel, 'consulation')
            if ((consultation.status == 'accepted' || consultation.status == 'paid') && consultation.datebooking - (new Date()) < (24 * 60 * 60 * 1000)) {
                throw new Error(`you cannot ask for rescheduling now 
                there less than 24 hour for the dat of the consultation day`)
            }
            if (!req.body.datebooking) {
                throw new Error(`please enter the other day you want to reschedule the consultation to`)
            }
            consultation.status = 'pending'
            consultation.datebooking = req.body.datebooking
            if (true) {
                return consultation.save()
            }
        }, 'this consultation is rescheduled wait for the lawyer acceptance')
    }
    static getMyRecord = (req, res) => {
        Helper.handlingMyFunction(req, res, async (req) => {
            await req.user.populate('myConsultationsMade')
            if (true) {
                return req.user.populated('myConsultationsMade')
            }
        }, 'here the consultations yoe get')
    }
    static getOnlyStatus = (req, res) => {
        Helper.handlingMyFunction(req, res, async (req) => {
            await req.user.populate({ path: 'myConsultationsMade', match: { status: req.params.status } })
            const requestedStatus = req.user.populated('myConsultationsMade').filter(consultation => { return consultation.status = req.params.status })
            if (true) {
                return requestedStatus
            }
        }, 'here the consultations yoe get')
    }
    static payConsultation = (req, res) => {
        Helper.handlingMyFunction(req, res, async (req) => {
            const consultation = await Helper.isThisIdExistInThisModel(req.params.id, consultationModel, 'consultation', 'lawyerDetails')
            if (consultation.citizenDetails != req.user._id) {
                throw new Error('take care you was going to pay for someone else consultation')
            }
            if (consultation.status != 'accepted') {
                throw new Error('you can not pay for this consultation now')
            }
            consultation.status = 'paid'
            if (true) {
                return consultation.save()
            }
        }, 'the consultation is paid now do not forget')
    }
    static makeReview = (req, res) => {
        Helper.handlingMyFunction(req, res, async (req) => {
            const myConsulate = await Helper.isThisIdExistInThisModel(req.params.id, consultationModel, 'consultation', 'lawyerDetails')
            if (myConsulate.citiziensdetails != req.user._id) {
                throw new Error('this consultation is not yours to review it')
            }
            if (myConsulate.statusI != 'paid' || myConsulate.status != 'completed') {
                throw new Error('you cannot add areview now')
            }
            const lawyer = lawyerModel.find(myConsulate.lawyerDetails)
            if (myConsulate.review) {
                lawyer.totalRate = (lawyer.totalRate * lawyer.numbersOfReviews - myConsulate.review.rate + req.body.rate) / lawyer.numbersOfReviews
                await lawyer.save()
                myConsulate.review = req.body
            } else {
                lawyer.totalRate = (lawyer.totalRate * lawyer.numbersOfReviews + req.body.rate) / (lawyer.numbersOfReviews + 1)
                lawyer.numbersOfReviews++
                await lawyer.save()
                myConsulate.review = req.body
            }
            myConsulate.review = req.body
            if (true) {
                return myConsulate.save()
            }
        }, "you added your review successfully")
    }
    static askForProcurationData = (req, res) => {
        Helper.formatMyAPIRes(req, res, async (req) => {
            const consulation = await Helper.isThisIdExistInThisModel(req.params.id, consultationModel, 'consultation', { path: 'lawyerDetails', populate: { path: 'userDetails' } })
            if (consulation.citizenDetails == req.user._id) {
                throw new Error('this consultation is not yours to make any process on')
            }
            if (consulation.procuration.status == "accepted" || (consulation.procuration.status == "seen" && (Date() - consulation.procuration.seenTime) < (14 * 24 * 60 * 60 * 1000))) {
                consulation.procuration.status = 'seen'
                consulation.save()
                if (true) {
                    return consulation.lawyerDetails.userDetails.nationalIdNum
                }
            } else if (consulation.procuration.status == "pending") {
                throw new Error('you asked for the procuration data please wait for lawyer permission')
            } else if ((consulation.procuration.status == "seen" && (Date() - consulation.procuration.seenTime) >= (14 * 24 * 60 * 60 * 1000)) || consulation.procuration.status == "not asked") {
                consulation.procuration.status = 'pending'
                return consulation.save()
            }
        }, 'you asked for data needed to make a Procuration wait  for a lawyer response')
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////   
    //for lawyer
    static getReceviedConsultation = (req, res) => {
        Helper.handlingMyFunction(req, res, async (req) => {
            await req.user.populate({ path: 'myConsultationsTask', match: { status: req.params.status } })
            const pendingConsultation = req.user.populated('myConsultationsTask').filter(consultation => { return (consultation.status == "pending" || consultation.status == "accepted") })
            if (true) {
                return pendingConsultation
            }
        }, 'here the consultations yoe get')
        // const lawyerId = req.params.id
        // const usertype = 'citiziens'

        // try {
        //     if (usertype == "lawyer") {
        //         const lawyerConsulatin = await consultationModel.find({ lawyerdetails: lawyerId }).populate("citiziensdetails")
        //         res.status(201).json({ message: "all consultation ", data: lawyerConsulatin })
        //     }
        //     if (usertype == "citiziens") {
        //         const lawyerConsulatin = await consultationModel.find({ citiziensdetails: lawyerId }).populate("lawyerdetails")
        //         res.status(201).json({ message: "all consultation ", data: lawyerConsulatin })
        //     }
        // } catch (error) {
        //     res.status(400).json({ message: "error ", error: error })

        // }

    }
    static respondConsultation = async (req, res) => {
        Helper.handlingMyFunction(req, res, (req) => {
            const consultation = Helper.isThisIdExistInThisModel(req.params.id, consultationModel, 'consultation', { path: 'lawyerDetails', populate: { path: 'userData' } })
            if (consultation.lawyerDetails._id != req.user._id) {
                throw new Error('you cannot respond for this consultation ,it is not yours to respond')
            }
            if (consultation.lawyerDetails.userData.replyForLegalAdviceWithSpacificTime && req.params.status == 'accepted') {
                if (!req.body.clock) {
                    throw new Error('you used to  reply with specific time please tell us a specific time')
                }
                return consultationModel.findByIdAndUpdate(req.params.id, { $set: { status: req.params.status, clock: req.body.clock } })
            } else {
                if (req.params.status == 'reschedualing' && (consultation.status == 'accepted' || consultation.status == 'paid') && consultation.datebooking - (new Date()) < (24 * 60 * 60 * 1000)) {
                    throw new Error(`you cannot ask for rescheduling now 
                    there less than 24 hour for the dat of the consultation day`)
                }
                if (consultation.payment && req.params.status == 'accepted') {
                    return consultationModel.findByIdAndUpdate(req.params.id, { $set: { status: 'paid' } })
                } else {
                    return consultationModel.findByIdAndUpdate(req.params.id, { $set: { status: req.params.status } })
                }
            }
        }, 'you accepted this consultation successfully')
        // console.log("acceptedConsulatingByLawyer")
        // const information = 'rejected'
        // try {
        //     if (information == "accepted") {
        //         const findConsulatingAndAcceptedIt = await consultationModel.findByIdAndUpdate(req.params.id, { statusOfconsulting: "accepted" }, { new: true })

        //         res.status(201).json({ message: "accepted the consulting ", data: findConsulatingAndAcceptedIt })
        //     }
        //     if (information == "rejected") {
        //         const findConsulatingAndAcceptedIt = await consultationModel.findByIdAndUpdate(req.params.id, { statusOfconsulting: "rejected" }, { new: true })

        //         res.status(201).json({ message: "accepted the consulting ", data: findConsulatingAndAcceptedIt })
        //     }
        // } catch (error) {


        //     res.status(400).json({ message: "error ", error: error })

        // }
    }
    static acceptProduction = (req, res) => {
        Helper.formatMyAPIRes(req, res, async (req) => {
            const consultation = await Helper.isThisIdExistInThisModel(req.params.id, consultationModel, 'consultation')
            if (consultation.lawyerDetails == req.user._id) {
                throw new Error('you can not give this permission')
            }
            consultation.procuration.status = 'accepted'
            if (true) {
                return consultation.save()
            }
        }, 'your national id now will appear to the consultation applicant')
    }
}


module.exports = Consultation