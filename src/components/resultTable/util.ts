import staffFixes from '../../DB/staff/fixes.json';
import configFixes from '../../DB/config/fixes.json';
import { ListType, PipeType } from "../calculator/util.ts";

interface ListsCountsParams{
  totalWidth: number,
  listWidth: number,
  totalLength: number,
  listLength: number,
}
export const getListsCounts = (params: ListsCountsParams) => {
  const getEntirePiecesLists = ({ totalWidth, totalLength, listWidth, listLength }: ListsCountsParams) => {
    const piecesByLength = Math.trunc(totalLength / listLength);
    const piecesByWidth = Math.trunc(totalWidth / listWidth);

    return piecesByLength * piecesByWidth;
  }

  const getCutPiecesLists = ({ totalWidth, totalLength, listWidth, listLength }: ListsCountsParams) => {
    const cutLength = totalLength % listLength;
    const cutWidth = totalWidth % listWidth;
    const cutSquare = cutLength * totalWidth + cutWidth * (Math.trunc(totalLength / listLength));
    const listSquare = listWidth * listLength;

    return Math.ceil(cutSquare / listSquare);
  }

  return getEntirePiecesLists(params) + getCutPiecesLists(params);
}

interface PipeLengthParams{
  totalWidth: number,
  totalLength: number,
  pipeWidth: number,
  step: number,
}
export const getPipesLength = (params: PipeLengthParams) => {
  const {totalLength, totalWidth, pipeWidth, step} = params;
  const pipesByLength = Math.ceil((totalLength - pipeWidth) / (step + pipeWidth)) + 1;
  const pipesByWidthInSegment = Math.ceil((totalWidth - pipeWidth) / (step + pipeWidth)) + 1;
  const segmentsCount = pipesByLength - 1;
  const crossedPipesLength = pipesByLength * pipeWidth;

  return pipesByLength * totalWidth + (pipesByWidthInSegment * segmentsCount * step - crossedPipesLength)
}

interface FixesCountParams{
  key: string,
  totalWidth: number,
  totalLength: number
}
export const getFixesCount = ({key, totalLength, totalWidth}: FixesCountParams) => {
  const fixesType = configFixes.find((fix) => fix.key === key);
  const areaSquare = totalLength * totalWidth;

  return areaSquare * fixesType!.value;
}

export const getListsPrice = (listsCount: number, list: ListType) => {
  return listsCount * list.price;
}
export const getPipesPrice = (pipesLength: number, pipe: PipeType)=> {
  return pipesLength * pipe.price;
}
export const getFixesPrice = (fixesCount: number) => {
  return fixesCount * staffFixes[0].price;
}
export const getFix = () => staffFixes[0];



















