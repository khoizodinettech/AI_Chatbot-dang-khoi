import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://thuonghieuvaphapluat.vn/Images/hanhnm/2019/05/23/image001.png'),
      new URL('https://hoatrinhnushojo.wordpress.com/wp-content/uploads/2015/04/cac-nhan-vat-chinh-trong-truyen-va-phim-doraemon-cho-be-yeu-tham-khao.png'),
      new URL('https://sohanews.sohacdn.com/2019/5/23/image006-15586129276981915534469.png'),
      new URL('https://sohanews.sohacdn.com/2019/5/23/image008-15586129382691677063185.png')
    ],
  },
};

export default nextConfig;
