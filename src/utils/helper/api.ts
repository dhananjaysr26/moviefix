const handleResponse = async (response: Response) => {
  if (response.status === 200 || response.status === 201) {
    const data = await response.json();
    const statusCode = response.status;
    return {data, statusCode};
  }
  return {statusCode: response.status};
};

export const GET_CALL = async (FetchUrl: string) => {
  try {
    const response = await fetch(`${FetchUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await handleResponse(response);
    return responseData;
  } catch (error: any) {
    return {error: error.message};
  }
};
