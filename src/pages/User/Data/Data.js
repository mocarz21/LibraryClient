import './Data.scss'
export const Data = ({isEditable, user}) => {

  const newUser = true

  if(!user){
    newUser = false
  }

  return(
    <div className="container data-module">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="img-box">
              <img src="/avatar/luz.jpg" alt="AVATAR"/>
            </div>
          </div>
          <div className="col-4 data-info">
            <div className='row'>
              <div className='col'>
                <p>Imię:</p>
              </div>
              <div className='col'>
                <input type="text" value={'imie'} readOnly={newUser}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Nazwisko:</p>
              </div>
              <div className='col'>
                <input type="text" value={'nazwisko'} readOnly={newUser}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Pesel:</p>
              </div>
              <div className='col'>
                <input type="text" value={'pesel'} readOnly={newUser}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>E-mail:</p>
              </div>
              <div className='col'>
                <input type="text" value={'e-mail'} readOnly={!isEditable}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Miasto:</p>
              </div>
              <div className='col'>
                <input type="text" value={'Miasto'} readOnly={!isEditable}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Ulica:</p>
              </div>
              <div className='col'>
                <input type="text" value={'Ulica'} readOnly={!isEditable}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Nr. domu:</p>
              </div>
              <div className='col'>
                <input type="text" value={'nr domu'} readOnly={!isEditable}/>
              </div> 
            </div>
            <div className='row'>
              <div className='col'>
                <p>Data urodzenia:</p>
              </div>
              <div className='col'>
                <input type="text" value={'data urodzenia'} readOnly={newUser}/>
              </div> 
            </div>
          </div>  
        </div>  
        <div className='row card-number'>
          <div className='col-3'>
            <p>Numer karty bibliotecznej:</p>
          </div>
          <div className='col-2'>
            <input type="text" value={'Numer karty'} readOnly={newUser}/>
          </div> 
        </div>
      </form>
    </div>
  )
}