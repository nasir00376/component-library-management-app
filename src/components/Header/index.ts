
import { Header as InternalHeader } from '@lessonnine/design-system.lib';

import { Version, version } from '../../config';

type CompoundedHeader = Record<Version, typeof InternalHeader>;

const Header = InternalHeader as unknown as CompoundedHeader;

Header.v1 = InternalHeader;
Header.v2 = InternalHeader;

export default Header[version];