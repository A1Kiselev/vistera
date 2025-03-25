import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import StaffContext from "../context/StaffContext.tsx";
import {
  getFix,
  getFixesCount,
  getFixesPrice,
  getListsCounts,
  getListsPrice,
  getPipesLength,
  getPipesPrice
} from "./util.ts";

interface RowProps{
  name: string,
  unit: string,
  count: number,
  price: number
}

const createRowData = ({ count, name, price, unit }: RowProps) => ({ name, unit, count, price })

const ResultTable = () => {
  const [rows, setRows] = useState<Array<RowProps>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const Staff = useContext(StaffContext);

  useEffect(() => {
    if (Staff) {
      const { list, frame, pipe, length: totalLength, width: totalWidth, material } = Staff;

      const listsCount = getListsCounts({ totalLength, totalWidth, listLength: 1, listWidth: list.width });
      const listsPrice = getListsPrice(listsCount, list);
      const listRow = createRowData({
        count: listsCount,
        name: list.name,
        unit: list.unit,
        price: listsPrice,
      })

      const pipesLength = getPipesLength({ totalLength, totalWidth, pipeWidth: pipe.width, step: frame.step });
      const pipePrice = getPipesPrice(pipesLength, pipe);
      const pipeRow = createRowData({
        count: pipesLength,
        name: pipe.name,
        unit: pipe.unit,
        price: pipePrice,
      })

      const fixCount = getFixesCount({ key: material.key, totalLength, totalWidth });
      const fixPrice = getFixesPrice(fixCount);
      const fix = getFix();
      const fixRow = createRowData({
        count: fixCount,
        name: fix.name,
        unit: fix.unit,
        price: fixPrice,
      })

      setRows([listRow, pipeRow, fixRow]);
      setTotalPrice(listsPrice + pipePrice + fixPrice);
    }
  }, [Staff])

  return (
    <TableContainer component={Paper} elevation={5} sx={{ padding: 1, maxWidth: 700 }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        {rows.length
          ? (
            <TableBody>
              {rows.map((row: RowProps) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )
          : (
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row"><Skeleton variant="rectangular" /></TableCell>
                <TableCell align="right"><Skeleton variant="rectangular" /></TableCell>
                <TableCell align="right"><Skeleton variant="rectangular" /></TableCell>
                <TableCell align="right"><Skeleton variant="rectangular" /></TableCell>
              </TableRow>
            </TableBody>
          )}
      </Table>
      {totalPrice > 1 && (
        <TextField label={'Total Price'} value={totalPrice} />
      )}
    </TableContainer>
  )
}

export default ResultTable;
