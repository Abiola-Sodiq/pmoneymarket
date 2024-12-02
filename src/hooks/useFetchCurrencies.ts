/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import supabase from "../config/supabaseClient";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrencies = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("currency").select();
      if (error) throw error;
      setCurrencies(data || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch currencies.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  return { currencies, loading, error, refetch: fetchCurrencies };
};

export default useCurrencies;
