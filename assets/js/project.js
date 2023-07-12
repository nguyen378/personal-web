let cr_table = document.querySelector("#CurrentProject");
(
    async () => {
        let workbook = XLSX.read(await (await fetch("./assets/data/Project.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        let html = XLSX.utils.sheet_to_html(workbook.Sheets['Current']);
        cr_table.innerHTML += `${html}`;
    }
)()
let fn_table = document.querySelector("#FinishProject");
(
    async () => {
        let workbook = XLSX.read(await (await fetch("./assets/data/Project.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        let html = XLSX.utils.sheet_to_html(workbook.Sheets['Finish']);
        fn_table.innerHTML += `${html}`;
    }
)()