pragma solidity ^0.8.7;

contract DarkHospital {
    
    ///main Hospital structure
    struct Hospital {
        string name;
        uint32 a_capacity;
        uint32 rate;
        
    }
    
    ///main patient structure
    struct Patient {
        string name;
        uint32 age;
        uint32 gender;
        
    }
    
    ///main array to store the data/hospitals
    Hospital[] public hospitals;
    
    ///main array to store the patient data
    Patient[] public patients;
    
    ///to map the hospital's id to its address
    mapping (uint => address) public hospitalToOwner;
    
    ///to map the hospital's id to its address
    mapping (uint => address) public patientToOwner;
    
    
    ///registration of hospitals
    function _registerHospital(string memory _name, uint32 _a_capacity, uint32 _rate) public returns (uint) {
        
        hospitals.push(Hospital(_name, _a_capacity, _rate));
        uint hospital_id = hospitals.length;
        hospitalToOwner[hospital_id] = msg.sender;
        return hospital_id;
        
    }
    
     ///registration of patients
    function _registerPatient(string memory _name, uint32 _age, uint32 _gender) public returns (uint) {
        
        patients.push(Patient(_name, _age, _gender));
        uint patient_id = patients.length;
        patientToOwner[patient_id] = msg.sender;
        return patient_id;
        
    }
    
    
    ///updating hospital's data
    function _updateHData(uint hospital_id, uint32 _a_capacity, uint32 _rate) public{
        
        /// to ensure the owner is updating
        require(msg.sender == hospitalToOwner[hospital_id]);
        
        hospitals[hospital_id-1].a_capacity = _a_capacity;
        hospitals[hospital_id-1].rate = _rate;
        
    }
    
    
     ///updating patient's data
    function _updatePdata(uint patient_id, uint32 _age, uint32 _gender) public{
        
        /// to ensure the owner is updating
        require(msg.sender == patientToOwner[patient_id]);
        
        patients[patient_id-1].age = _age;
        patients[patient_id-1].gender = _gender;
        
    }
    
    
    uint8 hc = 0;
    /// for hospital confirmation
    function _hospitalCon(uint hospital_id) public{
        
        /// to ensure the owner is updating
        require(msg.sender == hospitalToOwner[hospital_id]);
        
        hc += 1;
    }
    
    
    uint8 pc = 0;
    /// for patient confirmation
    function _patientCon(uint patient_id) public{
        
        /// to ensure the owner is updating
        require(msg.sender == patientToOwner[patient_id]);
        
        pc += 1;
    }
    
    ///transaction of the concern patient to the recomended hospital
     function _transP2H() public returns (uint8){
        
        if (pc > 0 && hc > 0){
            return 1;
        }else{
            return 0;
        }
     }
     
}
