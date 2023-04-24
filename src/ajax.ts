const apiHost = 'https://bakesaleforgood.com';

export const fetchInitialDeals = async () => {
  try {
    const response = await fetch(`${apiHost}/api/deals`);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const fetchDealDetail = async (dealId: string) => {
  try {
    const response = await fetch(`${apiHost}/api/deals/${dealId}`);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const fetchDealsSearchTerm = async (searchTerm: string) => {
  try {
    const response = await fetch(
      `${apiHost}/api/deals?searchTerm=${searchTerm}`,
    );
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error, 'error');
  }
};
