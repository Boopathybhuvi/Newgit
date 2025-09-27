const fs=require('fs');
const XLSX=require('xlsx');
const read=({file,sheet='sheet1'})=>{
const buf=fs.readFileSync(file);
const workbook=xlsx.read(buf,{type:'buffer'});
const rows=XLSX.utils.sheet_to_json(workbook.sheets[sheet]);
return rows    
} 
module.export={
    read,
}