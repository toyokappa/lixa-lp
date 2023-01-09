<template lang="pug">
.contract
  .container
    .row
      .offset-lg-2.col-lg-8
        section
          h1 特定商取引法に基づく表示
        section
          h3 1. 事業者の名称
          p パーソナルジムLIXA
        section
          h3 2. 所在地
          p 〒371-0842 群馬県前橋市下石倉町12-4
        section
          h3 3. 電話番号
          p 080-7004-8979
        section
          h3 4. 営業時間
          p 7:00〜22:00
        section
          h3 5. 利用料金
          p ご利用料金は、サービスごとに表示された金額と致します。
        section
          h3 6. 利用条件
          p
            | ご利用いただくサービスのご利用条件は、
            nuxt-link(to="/terms/") 利用規約
            | をご覧ください。
        section
          h3 支払い方法
          p 現金・クレジットカード（VISA / MasterCard）でのお支払いが可能です。
        section
          h3 支払い時期
          p クレジットカードの決済は、サービス利用の予約時。お支払日は、ご利用のクレジットカードの規定によります。
        section
          h3 退会について
          p 毎月10日までに本ジム所定の退会手続を完了することで退会をすることが可能です。
          p 
            | 退会に関する詳しい内容については、
            nuxt-link(to="/terms/") 利用規約
            | をご覧ください。
        section
          h3 個人情報の取扱いについて
          p
            | 個人情報の取扱いに関しては、
            nuxt-link(to="/policy/") プライバシーポリシー
            | をご参照ください。
</template>

<script>
export default {
  head: {
    title: `特定商取引法に基づく表示 | ${process.env.projectName}`
  }
}
</script>