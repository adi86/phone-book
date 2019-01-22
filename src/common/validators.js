export const phoneValidator = (value) => {
  if(!value){
    return true
  }
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g

  return regex.test(value);
}
