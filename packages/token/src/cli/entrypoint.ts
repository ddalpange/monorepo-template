import path from 'path';

import {systemColor, nightBlueColor} from './values/Color';
import {fontSize, fontWeight} from './values/Typography';
import {addPrefixOnObject, unpackingArrayObject, createStyleRule, createTokenRule, mkdirp, writeText} from './utils';

const main = (): void => {
  const systemColorValues = addPrefixOnObject(unpackingArrayObject(systemColor), 'color_system');
  const nightBlueColorValues = addPrefixOnObject(unpackingArrayObject(nightBlueColor), 'color_blue_night');
  const fontSizeValues = addPrefixOnObject(fontSize, 'font_size');
  const fontWeightValues = addPrefixOnObject(fontWeight, 'font_weight');

  const entireValues = {
    ...systemColorValues,
    ...nightBlueColorValues,
    ...fontSizeValues,
    ...fontWeightValues,
  };

  const styleVariants: string = createStyleRule(entireValues);
  const tokenVariants: string = createTokenRule(entireValues);

  const tokenDest = path.resolve(__dirname, '..', 'generated');

  mkdirp(tokenDest);

  writeText(tokenDest + '/token.css', styleVariants);
  writeText(tokenDest + '/token.ts', tokenVariants);

  return;
};

main();
