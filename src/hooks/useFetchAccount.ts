/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import supabase from "../config/supabaseClient";

const useFetchAccount = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAccount = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("accounts").select();
      if (error) throw error;
      setAccounts(data || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch accounts.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  return { accounts, loading, error, refetch: fetchAccount };
};

export default useFetchAccount;
