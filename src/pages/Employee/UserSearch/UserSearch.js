import {SearchInput} from '../../../modules/SearchInput/SearchInput'

export const UserSearch = () =>{

    let min = 1;
    let arrayX = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    let maxN = arrayX.length -1
    const liczba = 41
    

  const takaSobie=(n) =>{


    let srednia = Math.floor((min + maxN)/2)
    if(maxN < min) console.log('max jest mniejsze od min')
    if(arrayX[srednia] === n) console.log('znajduje się')
    if(arrayX[srednia] < n){
      console.log('n za mała')
      min = srednia + 1
      takaSobie(n)
    }
    if(arrayX[srednia] > n){
      console.log('liczba za duza')
      maxN = srednia - 1
      takaSobie(n)
    }

  }
  
  takaSobie(liczba)


  return(
    <div className='container'>
      <div className='row'>
        <h4> Wyszukaj użytkownika</h4>
      </div>
      <div className='row'>
        <SearchInput/>
      </div>
    </div>  
  )
}