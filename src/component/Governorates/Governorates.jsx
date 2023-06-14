
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import SearchSection from '../Search-Section/SearchSection';

const API_URL = 'http://localhost:10000/places';

const Governorates = () => {
  const [governorates, setGovernorates] = useState([]);
  const [subGuilds, setSubGuilds] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [newGovernorate, setNewGovernorate] = useState('');
  const [newSubGuild, setNewSubGuild] = useState('');
  const [newDepartment, setNewDepartment] = useState('');

  useEffect(() => {
    getGovernorates();
  }, []);

  const getGovernorates = async () => {
    try {
      const response = await axios.get(`${API_URL}/governorates/admin`);
      setGovernorates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createGovernorate = async () => {
    try {
      const response = await axios.post(`${API_URL}/governorates`, { name: newGovernorate });
      setGovernorates([...governorates, response.data]);
      setNewGovernorate('');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGovernorate = async (id) => {
    try {
      await axios.delete(`${API_URL}/governorates/${id}`);
      setGovernorates(governorates.filter((governorate) => governorate._id !== id));
      setSubGuilds(subGuilds.filter((subGuild) => subGuild.governorateId !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createSubGuild = async (governorateId) => {
    try {
      const response = await axios.post(`${API_URL}/governorates/${governorateId}/subGuilds`, { name: newSubGuild });
      const updatedGovernorates = governorates.map((governorate) => {
        if (governorate._id === governorateId) {
          return { ...governorate, subGuilds: [...governorate.subGuilds, response.data] };
        }
        return governorate;
      });
      setGovernorates(updatedGovernorates);
      setNewSubGuild('');
    } catch (error) {
      console.log(error);
    }
  };

  const createDepartment = async (subGuildId) => {
    try {
      const response = await axios.post(`${API_URL}/subGuilds/${subGuildId}/departments`, { name: newDepartment });
      const updatedSubGuilds = subGuilds.map((subGuild) => {
        if (subGuild._id === subGuildId) {
          return { ...subGuild, departments: [...subGuild.departments, response.data] };
        }
        return subGuild;
      });
      setSubGuilds(updatedSubGuilds);
      setNewDepartment('');
    } catch (error) {
      console.log(error);
    }
  };

  const updateModel = async (modelType, id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${modelType}/${id}`, updatedData);
      switch (modelType) {
        case 'governorates':
          setGovernorates(governorates.map((governorate) => (governorate._id === id ? response.data : governorate)));
          break;
        case 'subGuilds':
          setSubGuilds(subGuilds.map((subGuild) => (subGuild._id === id ? response.data : subGuild)));
          break;
        case 'departments':
          setDepartments(departments.map((department) => (department._id === id ? response.data : department)));
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteModel = async (modelType, id) => {
    try {
      await axios.delete(`${API_URL}/${modelType}/${id}`);
      switch (modelType) {
        case 'governorates':
          setGovernorates(governorates.filter((governorate) => governorate._id !== id));
          setSubGuilds(subGuilds.filter((subGuild) => subGuild.governorateId !== id));
          break;
        case 'subGuilds':
          setSubGuilds(subGuilds.filter((subGuild) => subGuild._id !== id));
          setDepartments(departments.filter((department) => department.subGuildId !== id));
          break;
        case 'departments':
          setDepartments(departments.filter((department) => department._id !== id));
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGovernorateInputChange = (e) => {
    setNewGovernorate(e.target.value);
  };

  const handleSubGuildInputChange = (e) => {
    setNewSubGuild(e.target.value);
  };

  const handleDepartmentInputChange = (e) => {
    setNewDepartment(e.target.value);
  };

  return (

    <>
      <SearchSection title={"Syndicates"} setSearchValue={"setSearchValue"} />
        <InputGroup className="px-5">
          <FormControl placeholder="Add governorate" value={newGovernorate} onChange={handleGovernorateInputChange} />
          <Button className='btn login_btn ' onClick={createGovernorate}>
            Add
          </Button>
        </InputGroup>
        {governorates?.map((governorate) => (
          <div className='m-5 ' key={governorate._id}>
            <ListGroup className=''>
              
              <ListGroup.Item >
              {governorate.name}
                {/* <InputGroup>
                  <FormControl
                    defaultValue={governorate.name}
                    onChange={(e) => updateModel('governorates', governorate._id, { name: e.target.value })}
                  />

                </InputGroup> */}

                {governorate?.subGuilds.map((subGuild) => (
                  <div className='row d-flex justify-content-center px-2' key={subGuild._id}>
                    <ListGroup className="mt-3 col-12 col-md-11">

<ListGroup.Item  className=''>
  <InputGroup>
    <FormControl
      defaultValue={subGuild.name}
      onChange={(e) => updateModel('subGuilds', subGuild._id, { name: e.target.value })}
    />
    
  </InputGroup>
  <ListGroup className="mt-2">


    {subGuild?.departments?.map((department) => (
      <ListGroup.Item key={department._id}>
        <InputGroup>
          <FormControl
            defaultValue={department.name}
            onChange={(e) =>
              updateModel('departments', department._id, { name: e.target.value })
            }
          />
          <Button className='btn-delete btn' onClick={() => deleteModel('departments', department._id)}>
            Delete
          </Button>
        </InputGroup>
      </ListGroup.Item>
    ))}
  </ListGroup>
  <InputGroup className="mt-2">
    <FormControl placeholder="Add department"  onChange={handleDepartmentInputChange} />
    <Button className='btn login_btn ' onClick={() => createDepartment(subGuild._id)}>
      Add
    </Button>
  </InputGroup>
</ListGroup.Item>
            
</ListGroup>
<div className='col-1 d-flex justify-content-center align-items-center mt-2 mt-md-0'>
            <Button className='btn btn-delete ' onClick={() => deleteModel('subGuilds', subGuild._id)}>
Delete
</Button>
            </div>
                  </div>

                ))}
                <InputGroup className="mt-2">
                  <FormControl placeholder="Add sub-guild"  onChange={handleSubGuildInputChange} />
                  <Button className='btn login_btn ' onClick={() => createSubGuild(governorate._id)}>
                    Add
                  </Button>
                </InputGroup>
              </ListGroup.Item>
            </ListGroup>
            <div className='my-3 d-flex justify-content-center align-items-center'>
              <Button className='btn-delete btn' onClick={() => deleteGovernorate(governorate._id)}>
                Delete Governorate
              </Button>
            </div>
          </div>

        ))}
    </>
  );
};

export default Governorates;