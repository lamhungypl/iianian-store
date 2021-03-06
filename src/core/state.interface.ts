import { AuthState } from './auth/reducer/auth.state';
import { AccountState } from './account/reducer/account.state';
import { ProductControlState } from './product-control/reducer/product-control.state';
import { CommonState } from './common/reducer/common.state';
import { ListsState } from './lists/reducer/lists.state';

export interface AppState {
  auth: AuthState;
  account: AccountState;
  productControl: ProductControlState;
  common: CommonState;
  list: ListsState;
}
