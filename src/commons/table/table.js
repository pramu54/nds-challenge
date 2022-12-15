import { CTable, CTableBody,  CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

const MainTable = ({header, data}) => {
    return(
        <>
            <CTable striped>
                <CTableHead>
                    <CTableRow>
                        {header.map((head) => (
                            <CTableHeaderCell 
                                scope="col"
                                key={head.id}
                            >
                                {head.label}
                            </CTableHeaderCell>
                        ))}
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {data}
                </CTableBody>
            </CTable>
        </>
    )
}
export default MainTable;