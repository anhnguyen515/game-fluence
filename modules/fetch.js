export async function fetchByName(apiUrl, name) {
  try {
    const res = await fetch(`${apiUrl}/games/search?search=${name}`);
    const data = res.json();

    return data;
  } catch (e) {
    return false;
  }
}

export async function fetchByOrder(apiUrl, name) {
  try {
    const res = await fetch(`${apiUrl}/games/ordered?ordering=${name}`);
    const data = res.json();

    return data;
  } catch (e) {
    return false;
  }
}
