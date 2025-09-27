describe('Read XL',()=>{
    it ('read xl on login',()=>{
        cy.task("readXlsx",{filepath: "bugs.xlsx", sheetName:"bugs"}).then(row=>{
            const weight = {critical:4, high:3, medium:2, low: 1};
            const counts = {critical:0, high:0, medium:0, low:0};

            rows.forEach(row=> {
                const sev=string(row.severity).trim().toLowerCase();
                if(counts.hasOwnProperty(sev))
                    counts[sev]++;
            })
        })

    })
})