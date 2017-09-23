import {SearchConfig} from './search.config';

const DEFAULT_ITEMS_PER_PAGE = 12;
const DEFAULT_PLACE = 'Brazil';
const DEFAULT_PAGE = 1;

describe('SearchConfig', () => {
  it('should create an instance of SearchConfig', () => {
    expect(new SearchConfig()).toBeTruthy();
  });

  it('should create an instance of SearchConfig with default values', () => {
    let searchConfig = new SearchConfig();
    expect(searchConfig.userName).toBe('');
    expect(searchConfig.itemsPerPage).toBe(DEFAULT_ITEMS_PER_PAGE);
    expect(searchConfig.place).toBe(DEFAULT_PLACE);
    expect(searchConfig.page).toBe(1);
  });

  it('should set values correctly', () => {
    let searchConfig = new SearchConfig();

    searchConfig.place = 'Florianópolis';
    searchConfig.page = 32;

    expect(searchConfig.place).toBe('Florianópolis');
    expect(searchConfig.page).toBe(32);
  });
});
