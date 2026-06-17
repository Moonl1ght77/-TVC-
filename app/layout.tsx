import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "品牌广告概念导演 Skill 使用手册",
  description: "内部使用的品牌广告概念导演 Skill 使用流程、输入输出规则、Prompt 模板和测试方法。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
