const calculateTemp = () => {
    const numberTemp = document.getElementById('degree').value;
    const tempSelected = document.getElementById('temp_type');
    const valueTemp=temp_type.options[tempSelected.selectedIndex].value;
  
    const celtofar=(cel) =>{
      let fah= (cel*9/5)+32;
      return fah;
    }
  
    const fartocel=(far) =>{
      let cel= (far-32)*5/9;
      return cel;
    }
  
    let result;
  
    if(valueTemp=='cel'){
      result= celtofar(numberTemp).toFixed(2);
      document.getElementById('result').value=`${result} Fahrenhiet`;
    }else{
      result=fartocel(numberTemp).toFixed(2);
      document.getElementById('result').value=`${result} Celsius`;
    }
    console.log(result)
  }