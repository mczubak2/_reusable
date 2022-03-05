import Accordion from './sections/Accordion';
import HasFocus from './global/HasFocus';

import { ready } from '@helpers/ready';

class Core
{
  constructor()
  {
    new Accordion();
    new HasFocus();
  }
}

ready(() => new Core());
