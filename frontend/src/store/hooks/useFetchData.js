import { useEffect, useState,useCallback } from "react";
import { fetchAPI } from "../../utils/api.js";
const BASE_URL = 'http://localhost:9000';

// FETCH AT INIT
export function useFetchData(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(!!endpoint); // Don't load if no endpoint

  const fetchData = useCallback(async () => {
    if (!endpoint) return; // Skip fetch if no endpoint

    console.log("Fetching data from:", endpoint);

    setLoading(true);
    try {
      const result = await fetchAPI(endpoint, options);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(options)]); // include options as dep

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
}

// FETCH AFTER INIT
export async function deleteItem(endpoint, refetch = null) {
  const confirmed = window.confirm("Are you sure you want to delete this item?");
  if (!confirmed) return;

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete item");
    }

    if (refetch) {
      refetch();
    }
    toast.warning("Successfully deleted record");
  } catch (err) {
    console.error(err);
    toast.warning("Failed to delete item. Please try again.");
  }

  
}


// Add this to your existing useFetchData.js
export async function updateItem(endpoint, data, refetch = null) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT", // or "PATCH" depending on your API
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to update item");
    }

    const result = await res.json();

    if (refetch) {
      refetch();
    }
    toast.success("Successfully updated record");
    return result;
  } catch (err) {
    console.error(err);
    toast.error("Failed to update item. Please try again.");
    throw err;
  }
}
