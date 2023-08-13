import { nlogAPI } from "src/utils/nlog-api";

import { NextApiRequest, NextApiResponse } from "next";

export default async function refresh(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = req.cookies["refresh_token"]; // 쿠키 이름으로 읽기
  console.log(7, refreshToken, req.cookies);
  /**
   * api에 refresh 요청
   */
  const { data: newToken } = await nlogAPI.get("/auth/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  res.status(200).json({ newToken });
}
