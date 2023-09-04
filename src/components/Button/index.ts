import { Button as InternalButton } from '@lessonnine/design-system.lib';
import { Version, version } from '../../config';
import { RoundedButton } from './Button';

type CompoundedButton = Record<Version, typeof InternalButton | typeof RoundedButton>;

const Button = RoundedButton as unknown as CompoundedButton;

Button.v1 = InternalButton;
Button.v2 = RoundedButton;

export default Button[version];