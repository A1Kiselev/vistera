import lists from '../../DB/staff/lists.json';
import pipes from '../../DB/staff/pipes.json';
import frames from '../../DB/config/frames.json';
import materials from '../../DB/config/materials.json';
import sizes from '../../DB/config/sizes.json';

export interface ListType{
  name: string,
  material: string,
  unit: string,
  width: number,
  price: number
}
export const getLists = (): Array<ListType> =>
  lists.map((el) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...list } = el;

    return list as ListType;
  });

export interface PipeType{
  name: string,
  unit: string,
  width: number,
  price: number
}
export const getPipes = (): Array<PipeType> =>
  pipes.map((el) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {type, ...pipe} = el;

    return pipe as PipeType;
  })

export interface FrameType{
  key: string,
  name: string,
  step: number
}
export const getFrames = (): Array<FrameType> => frames.map((el) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {type, ...frame} = el;

  return frame as FrameType;
})

export interface MaterialType{
  key: string,
  name: string
}
export const getMaterials = (): Array<FrameType> => materials.map((el) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {type, ...frame} = el;

  return frame as FrameType;
})

export enum OptionsType{
  List = 'list',
  Pipe = 'pipe',
  Frame = 'frame',
  Material = 'material'
}
export const getOptionsByType = (type: OptionsType): Array<FrameType | PipeType | ListType> => {
  switch (type) {
    case OptionsType.List:{
      return getLists();
    }
    case OptionsType.Pipe:{
      return getPipes();
    }
    case OptionsType.Frame:{
      return getFrames();
    }
    case OptionsType.Material:{
      return getMaterials();
    }
  }
}

export enum SizeVariant{
  Length = 'length',
  Width = 'width'
}
export interface SizeType{
  key: string,
  name: string,
  min: number,
  max: number,
  step: number
}
export const getSizeLimit = (key: SizeVariant): SizeType => sizes.find((el) => el.key === key) as SizeType;
