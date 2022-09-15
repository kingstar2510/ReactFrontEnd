import React from 'react'

function CustomerReg() {
  return (
    <>
        <div className='container' id='container'>
            <div className='form-container sign-up-container'>
                <from action ="#">
                <div className='name' style={{marginTop: '30px'}}>
                    <input type='text' placeholder='First Name' style={{width:'33%'}} name="customerFirstName" value={this.state.customerFirstName} onChange={this.changeCustomerFirstName} />
                    <input type='text' placeholder='Middle Name' style={{width:'27%',margin: ' 0 12px '}} name="customerMiddleName" value={this.state.customerMiddleName} onChange={this.changeCustomerMiddleName}/>
                    <input type='text' placeholder='Last Name' style={{width:'33%'}} name="customerLastName" value={this.state.customerLastName} onChange={this.changeCustomerLastName}/>
                </div>
                <div className='name'>
                    <input type='date' placeholder='Date Of Birth' style={{width:'33%'}} name="customerDateOfBirth" value={this.state.customerDateOfBirth} onChange={this.changeCustomerDateOfBirth}/>
                    <input type='number' placeholder='Age' style={{width:'33%'}} name="customerAge" value={this.state.customerAge} onChange={this.changeCustomerAge}/>
                    <input type='text' placeholder='Gender' style={{width:'33%'}} name="customerGender" value={this.state.customerGender} onChange={this.changeCustomerGender}/>
                </div>
                 <div className='try'>
                    <input type='email' placeholder='Email' style={{width:'45%'}} name="customerEmail" value={this.state.customerEmail} onChange={this.changeCustomerEmail}/>
                    <input type='number' placeholder='Phone No' style={{width:'45%', marginLeft: '30px'}} name="customerPhoneNumber" value={this.state.customerPhoneNumber} onChange={this.changeCustomerPhoneNumber}/>
                </div>
                 <div style={{display: 'flex',justifyContent:'space-between'}}>
                    <input type='text' placeholder='House number' style={{width:'45%'}} name="customerHouseNumber" value={this.state.customerHouseNumber} onChange={this.changeCustomerHouseNumber}/ >
                    <input type='text' placeholder='Street name' style={{width:'45%', marginLeft: '30px'}} name="customerStreet" value={this.state.customerStreet} onChange={this.changeCustomerStreet}/>
                </div>
                <div style={{display: 'flex',justifyContent:'space-between'}}>
                    <input type='text' placeholder='city name' style={{width:'45%'}} name="customerCity" value={this.state.customerCity} onChange={this.changeCustomerCity}/>
                    <input type='text' placeholder='Country name' style={{width:'45%', marginLeft: '30px'}} name="customerCountry" value={this.state.customerCountry} onChange={this.changeCustomerCountry}/>
                </div>
                <div style={{display: 'flex',justifyContent:'space-between'}}>
                    <input type='text' placeholder='Username' style={{width:'45%'}} name="username" value={this.state.username} onChange={this.changeUsername}/>
                    <input type='text' placeholder='Password' style={{width:'45%'}} name="password" value={this.state.password} onChange={this.changePassword}/>
                </div>
                <button onClick={this.registerCustomer}>Sign Up</button>
                </from>

            </div>
        </div>
    </>
  )
}

export default CustomerReg