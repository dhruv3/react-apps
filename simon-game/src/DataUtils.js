export function generateMainString(){
  const count = 20;
  let out = ""
  for(let i = 0; i < count; i++){
    out += Math.floor((Math.random() * 4) + 1) + ","
  }
  out = out.substr(0, out.length-1)
  return out;
}
