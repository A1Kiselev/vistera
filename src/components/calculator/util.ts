import data from '../../DB/data.json';
import config from '../../DB/config.json';

interface ListType{
  id: string,
  name: string,
  material: string,
  unit: string,
  width: number,
  price: number
}
export const getLists = (): Array<ListType> =>
  data.filter((el) => el.type === 'list')
    .map((el, index) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...list } = el;

    return { id: index.toString(), ...list } as ListType;
  });

interface PipeType{
  id: string,
  name: string,
  unit: string,
  width: number,
  price: number
}
export const getPipes = (): Array<PipeType> =>
  data.filter((el) => el.type === 'pipe')
  .map((el, index) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {type, ...pipe} = el;

    return {id: index.toString(), ...pipe} as PipeType;
  })

interface FrameType{
  id: string,
  key: string,
  name: string,
  step: number
}
export const getFrames = (): Array<FrameType> => config.filter((el) => el.type === 'frame').map((el, index) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {type, ...frame} = el;

  return {id: index.toString(), ...frame} as FrameType;
})
