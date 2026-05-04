<h2><a href="https://leetcode.com/problems/lemonade-change">890. Lemonade Change</a></h2><h3>Easy</h3><hr><p>At a lemonade stand, each lemonade costs <code>$5</code>. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a <code>$5</code>, <code>$10</code>, or <code>$20</code> bill. You must provide the correct change to each customer so that the net transaction is that the customer pays <code>$5</code>.</p>

<p>Note that you do not have any change in hand at first.</p>

<p>Given an integer array <code>bills</code> where <code>bills[i]</code> is the bill the <code>i<sup>th</sup></code> customer pays, return <code>true</code> <em>if you can provide every customer with the correct change, or</em> <code>false</code> <em>otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> bills = [5,5,5,10,20]
<strong>Output:</strong> true
<strong>Explanation:</strong> 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> bills = [5,5,10,10,20]
<strong>Output:</strong> false
<strong>Explanation:</strong> 
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= bills.length &lt;= 10<sup>5</sup></code></li>
	<li><code>bills[i]</code> is either <code>5</code>, <code>10</code>, or <code>20</code>.</li>
</ul>


고수의 생각: "이 장사가 망하는 이유는 결국 딱 하나뿐이잖아? 거슬러 줄 5달러가 모자랄 때!"

이렇게 '궁극적인 실패 조건' 하나를 찾게 되면, 그 앞에 있었던 자잘한 if-else들은 사실 다 쓸모없는 걱정이었다는 걸 깨닫게 됩니다.

3. '마이너스(-)' 변수를 두려워하지 않기
이게 가장 재미있는 차이입니다. 현실 세계에서는 지갑에 -5달러가 있을 수 없습니다. 그래서 우리는 무의식적으로 코드를 짤 때도 five === 0일 때 빼기를 하면 안 된다고 본능적으로 막아섭니다.

하지만 컴퓨터의 변수는 마이너스로 내려가도 아무런 문제가 없습니다! 수학에 맡겨두고 일단 뺀 다음, 루프가 돌기 전에 "어라? 마이너스네? 무효!" 하고 던져버리면 그만입니다. 변수가 일시적으로 현실에 없는 상태(마이너스)가 되는 것을 허용하는 순간, 코딩의 자유도가 엄청나게 올라갑니다.
