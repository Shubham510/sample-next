import axios from "axios";

export async function checkPermission(path: string, roleCode: string | string[] = "2") {
  try {
    const response = await axios.post(location.origin + "/api/role", {
      path,
      roleCode,
    });
    console.log(response.status);
    if (response.status !== 200) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}