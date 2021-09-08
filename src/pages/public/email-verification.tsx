import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { verifyEmail } from "../../utils/api";

export default function EmailVerification() {
  const params = useParams<{ userId: string; hash: string }>();
  const location = useLocation();

  const searchParams = location.search;
  const userId = Number(params.userId);

  const queryString = params.hash + searchParams;

  useEffect(() => {
    verifyEmail(userId, queryString);
  }, [params.userId, queryString, userId]);

  return <div>hi</div>;
}
