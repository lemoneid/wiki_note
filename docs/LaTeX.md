---
id: LaTeX
title: LaTeX
---

数学公式

https://blog.csdn.net/weixin_43159148/article/details/88621318

[**MarkDown 中使用 LaTeX 数学式**](https://www.cnblogs.com/nowgood/p/Latexstart.html)


## 数学符号

https://blog.csdn.net/LCCFlccf/article/details/89643585

## **数学模式**

行间公式用一对 \$...$ 来输入，独立公式用 equation 或 equation* 环
境来输入，有 * 的版本不生成公式编号。

| 效果             | 效果           |
| ---------------- | -------------- |
| $\boxed{E=mc^2}$ | \boxed{E=mc^2} |

### 基本元素

#### 指数、下标、根号

指数或上标用 ^ 表示，下标用 _ 表示，根号用 \sqrt 表示。上下标如
果多于一个字母或符号，需要用一对 {} 括起来。

#### 分数

分数用 \frac 命令表示，它会自动调整字号，比如在行间公式中小一
点，在独立公式则大一点。\dfrac 命令把分数的字号显式设置为独立公式
中的大小，\tfrac 命令则把字号设为行间公式中的大小。

| 效果                         | 效果                     |
| ---------------------------- | ------------------------ |
| $\frac{1}{2} \tfrac{1}{2}$   | \frac{1}{2} \tfrac{1}{2} |
| $\frac{1}{2} \dfrac{1}{2}$   | \frac{1}{2} \dfrac{1}{2} |
| $P(v)=\frac{1}{1+exp(-v/T)}$ |                          |

