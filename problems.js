const PROBLEMS = [
 {
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Operations with complex numbers (multiplication)",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Operations with complex numbers (multiplication) — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$)",
  "html": "<p>A school robotics team is testing a two-stage signal processor for a sensor. In this kind of circuit model, each stage&#x27;s gain is written as a complex number, and the total gain of the two stages in series is the <strong>product</strong> of the individual gains. Stage 1 has gain $2 + 3i$ and Stage 2 has gain $4 - i$. Find the total gain of the processor, written in the form $a + bi$.</p>",
  "evidence": "A computation showing the distributive multiplication of the two complex gains, simplification using $i^2 = -1$, and the total gain written in $a + bi$ form",
  "reveals": "Whether the student can multiply complex numbers accurately and understands that $i^2$ must be replaced by $-1$ to return to standard form."
 },
 {
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Polynomial identities extended to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Polynomial identities extended to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers, e.g., factor a sum of squares)",
  "html": "<p>An acoustics engineer is factoring filter polynomials that have no real zeros, so she needs polynomial identities that work with complex numbers. (a) Expand $(x + 4i)^2$ and simplify completely. (b) Factor $x^2 + 64$ completely as a product of two linear factors involving $i$.</p>",
  "evidence": "An expansion simplified using $i^2 = -1$, and a factorization of the sum of squares into two conjugate linear factors, ideally checked by multiplying the factors back",
  "reveals": "Whether the student understands that a sum of squares, unfactorable over the reals, factors over the complex numbers using conjugate pairs."
 },
 {
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Fundamental Theorem of Algebra and complex roots",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Fundamental Theorem of Algebra and complex roots — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>A water-tank designer solves a design equation and arrives at the polynomial equation $x^3 - x^2 + 4x - 4 = 0$, where $x$ is a dimension parameter in feet. Find <strong>all</strong> solutions of the equation, real and complex, and state how the total number of solutions relates to the degree of the polynomial.</p>",
  "evidence": "A factoring or equivalent solution process, the complete list of solutions, and a statement connecting the count of solutions (with multiplicity) to the degree 3",
  "reveals": "Whether the student expects nonreal roots for a cubic, can recover them by factoring, and can invoke the Fundamental Theorem of Algebra to confirm none are missing."
 },
 {
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Interpreting expressions in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting expressions in context — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression such as terms, factors, and coefficients)",
  "html": "<p>A farmers market vendor sells baskets of peaches. If she charges $p$ dollars per basket, her daily revenue in dollars is modeled by $R(p) = p(200 - 4p)$. (a) Interpret the factor $p$ and the factor $200 - 4p$ in context. (b) In the expanded form, what does the coefficient $-4$ tell you about sales? (c) At what price would she sell zero baskets, and what part of the expression tells you that?</p>",
  "evidence": "Written interpretations of each factor and of the coefficient, tied to price, number of baskets sold, and revenue, plus the price at which the sales factor equals zero",
  "reveals": "Whether the student can read a factored model as a story about quantities — price times quantity sold — rather than treating it as abstract symbols."
 },
 {
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder on division by $x - a$ is $P(a)$)",
  "html": "<p>A small manufacturer&#x27;s monthly profit, in hundreds of dollars, $x$ months after a product launch is modeled by $P(x) = x^3 - 5x^2 + 2x + 8$. Use the <strong>Remainder Theorem</strong> (synthetic substitution, not direct substitution) to find the remainder when $P(x)$ is divided by $x - 4$. Interpret that remainder in context, and state whether $x - 4$ is a factor of $P(x)$ and what that means for the business.</p>",
  "evidence": "A synthetic-division/substitution setup for $a = 4$, the remainder value, its interpretation as the profit at month 4 in hundreds of dollars, and a factor conclusion",
  "reveals": "Whether the student connects polynomial division, function values, and factors as three views of the same fact, and can interpret the result financially."
 },
 {
  "n": 6,
  "strand": "Number & Algebra",
  "topic": "Zeros and graphs of polynomials",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros and graphs of polynomials — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph; include end behavior)",
  "html": "<p>A startup&#x27;s annual profit, in thousands of dollars, $x$ years after opening (for $0 \\le x \\le 8$) is modeled by $P(x) = (x - 1)(x - 4)(x - 6)$. (a) Find all zeros of $P$ and interpret each in context. (b) Find the $y$-intercept and interpret it. (c) Describe the end behavior of the graph. (d) Sketch the graph over its domain, showing the intercepts and the sign of the profit between zeros, and use it to state during which years the startup operates at a loss.</p>",
  "evidence": "The zeros with multiplicities, the $y$-intercept, an end-behavior statement based on degree and leading coefficient, and a labeled sketch with sign intervals interpreted as profit/loss years",
  "reveals": "Whether the student can move fluidly between a factored polynomial, its graph, and a real-world reading of break-even points and loss periods."
 },
 {
  "n": 7,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms; write $a(x)/b(x)$ in the form $q(x) + r(x)/b(x)$ using polynomial division)",
  "html": "<p>A rectangular concrete patio has area $A = 2x^2 + 7x + 10$ square feet and width $W = x + 3$ feet, where $x &gt; 0$ is a design parameter in feet. The length is $L = \\dfrac{A}{W}$. Rewrite $L$ in the form $q(x) + \\dfrac{r}{W}$, where $q(x)$ is a polynomial and $r$ is a constant remainder. Then find the length when $x = 4$ feet, using your rewritten form, and check it against the original fraction.</p>",
  "evidence": "A polynomial long-division (or equivalent) calculation, the quotient-plus-remainder form of the length, and a numerical length at $x = 4$ verified two ways",
  "reveals": "Whether the student can perform polynomial division and understands the quotient/remainder structure as a genuine geometric relationship, not just a procedure."
 },
 {
  "n": 8,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>Two valves feed a community pool. For a valve setting $x$ (with $x &gt; 2$), Valve A&#x27;s flow rate is $\\dfrac{3}{x - 2}$ gallons per minute and Valve B&#x27;s flow rate is $\\dfrac{2}{x + 2}$ gallons per minute. (a) Write and simplify a single rational expression for the combined flow rate when both valves are open. (b) Find the combined flow rate when $x = 6$.</p>",
  "evidence": "A common-denominator addition, a simplified combined-rate expression with its domain restriction noted, and the evaluated rate at $x = 6$ with units",
  "reveals": "Whether the student can combine rational expressions over a common denominator and interpret the result as a physical rate."
 },
 {
  "n": 9,
  "strand": "Number & Algebra",
  "topic": "Solving rational equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving rational equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>Two pumps drain a flooded school basement working together. Pump 1 alone can drain it in $x - 2$ hours and Pump 2 alone can drain it in $x + 2$ hours. Working together, they drain $\\tfrac{3}{8}$ of the basement per hour. (a) Write an equation modeling this situation. (b) Solve the equation and determine how long each pump would take alone. Reject any solution that does not make sense in context, and explain why it is rejected.</p>",
  "evidence": "A work-rate equation using reciprocals, a cleared-denominator solution process, both algebraic solutions, and a context-based rejection with reasoning, ending in the two individual pump times in hours",
  "reveals": "Whether the student can build a rational equation from rates, solve it, and filter algebraic solutions through the physical requirement that times be positive."
 },
 {
  "n": 10,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations; extraneous solutions",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations; extraneous solutions — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>Two models predict the clearance, in feet, of a drone flying an obstacle course, as functions of a tuning parameter $x$. Model A gives $\\sqrt{x + 7}$ feet and Model B gives $x - 5$ feet. Find every value of $x$ for which the two models agree. Check each candidate in the <strong>original</strong> equation and identify any extraneous solution, explaining why it appeared.</p>",
  "evidence": "An isolation-and-squaring solution process, all candidate solutions, explicit checks in the original equation, and an explanation that squaring can introduce solutions of the squared equation that fail the original",
  "reveals": "Whether the student treats checking as part of solving a radical equation and understands the algebraic reason extraneous solutions occur."
 },
 {
  "n": 11,
  "strand": "Number & Algebra",
  "topic": "Systems solved graphically; meaning of intersection points",
  "standards": [
   "NC.M3.A-REI.11",
   "NC.M3.A-CED.2"
  ],
  "standardsDetail": "Systems solved graphically; meaning of intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find approximate solutions graphically); also NC.M3.A-CED.2 (create equations in two or more variables to represent relationships between quantities and graph them)",
  "html": "<p>A community center is comparing two gym pricing plans for a fitness class program. Plan A charges a $\\$40$ sign-up fee plus $\\$3$ per class. Plan B charges a $\\$10$ sign-up fee plus $\\$6$ per class. Let $x$ be the number of classes and $C$ the total cost in dollars. (a) Write the system of equations for the two plans and graph both lines on the same axes. (b) Find the intersection point and explain <strong>why</strong> its $x$-coordinate gives the number of classes at which the two plans cost the same. (c) State which plan is cheaper for fewer classes than that number, and which is cheaper for more.</p>",
  "evidence": "Two cost equations, a graph of both lines, the intersection point with units, a written explanation linking the intersection to the equation $f(x) = g(x)$, and a cost comparison on each side of the break-even point",
  "reveals": "Whether the student understands a system's solution as a point belonging to both graphs — and as a break-even decision — rather than as an isolated algebraic answer."
 },
 {
  "n": 12,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A landscaper builds a conical pile of gravel. The volume of a cone is $V = \\tfrac{1}{3}\\pi r^2 h$. (a) Rearrange the formula to solve for the height $h$. (b) A delivery of gravel has volume $V = 37.68\\ \\text{m}^3$ and the pile&#x27;s radius is $r = 3$ m. Using $\\pi \\approx 3.14$, find the height of the pile.</p>",
  "evidence": "An algebraic rearrangement isolating $h$, a substitution of the given values with $\\pi \\approx 3.14$, and the height reported in meters",
  "reveals": "Whether the student can manipulate a literal equation with confidence — undoing multiplication by a fraction, $\\pi$, and a squared quantity — before substituting numbers."
 },
 {
  "n": 13,
  "strand": "Number & Algebra",
  "topic": "Quotients of complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Quotients of complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; find conjugates and use them to find quotients of complex numbers)",
  "html": "<p>In an AC circuit analysis, the current $I$, in amps, is the voltage divided by the impedance: $I = \\dfrac{V}{Z}$. A circuit has voltage $V = 10 - 5i$ volts and impedance $Z = 1 - 2i$ ohms. Find the current in the form $a + bi$, using the complex conjugate to rationalize the denominator.</p>",
  "evidence": "A division setup multiplied by the conjugate of the denominator, simplification using $i^2 = -1$ and the fact that $z \\cdot \\bar{z}$ is real, and the current in $a + bi$ form with units",
  "reveals": "Whether the student can carry out the conjugate method for complex division and understands why it produces a real denominator."
 },
 {
  "n": 14,
  "strand": "Number & Algebra",
  "topic": "Multiplying and dividing rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Multiplying and dividing rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>A materials engineer compares two production lines by forming the ratio of Plant A&#x27;s output index to Plant B&#x27;s, which is given by<br>$$\\frac{6x + 12}{x - 3} \\div \\frac{3x + 6}{x^2 - 9},$$<br>where $x$ is a shared machine setting. (a) Simplify the ratio to a single polynomial expression. (b) State all values of $x$ that must be excluded. (c) Find the value of the ratio when $x = 4$.</p>",
  "evidence": "A rewrite of the division as multiplication by the reciprocal, factoring of all numerators and denominators, cancellation of common factors, the simplified expression, the full list of excluded values, and the evaluated ratio at $x = 4$",
  "reveals": "Whether the student can factor and cancel within rational expressions while tracking the domain restrictions that cancellation hides."
 },
 {
  "n": 15,
  "strand": "Number & Algebra",
  "topic": "Fundamental Theorem of Algebra; factoring sums of squares",
  "standards": [
   "NC.M3.N-CN.9",
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Fundamental Theorem of Algebra; factoring sums of squares — NC.M3.N-CN.9 and NC.M3.N-CN.8 (find all complex solutions of polynomial equations; extend polynomial identities to the complex numbers)",
  "html": "<p>A vibration-analysis model for a machine mount leads to the equation $x^4 + 5x^2 + 4 = 0$. (a) State, with justification from the Fundamental Theorem of Algebra, how many complex solutions the equation has, counting multiplicity. (b) Find all of the solutions. (c) State how many of the solutions are real numbers, and explain what that means for the graph of $y = x^4 + 5x^2 + 4$.</p>",
  "evidence": "A solution count justified by the degree, a substitution or factoring reducing the quartic to quadratics, factorization of each sum of squares, the complete solution list, and a conclusion about real zeros and $x$-intercepts",
  "reveals": "Whether the student can combine the Fundamental Theorem of Algebra with sum-of-squares factoring to fully solve a higher-degree equation and connect nonreal roots to the absence of $x$-intercepts."
 },
 {
  "n": 16,
  "strand": "Functions",
  "topic": "Function notation; domain and range from a graph",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Function notation; domain and range from a graph — NC.M3.F-IF.1 (understand function notation; determine domain and range from a graph and relate them to the context)",
  "html": "<p>A school science club launches a weather balloon that carries a small instrument package. Let $h(t)$ be the balloon&#x27;s altitude, in feet, $t$ minutes after launch. The graph of $h$ consists of two line segments: the first runs from $(0, 200)$ to $(24, 2600)$, and the second runs from $(24, 2600)$ down to $(60, 200)$, where the balloon is recovered.</p>\n<p>(a) State the domain and range of $h$, and explain what each means for the flight.<br>(b) Find $h(12)$ and explain what it means in context.<br>(c) The balloon passes an altitude of 1,400 feet twice during the flight. Find both times, and explain why there are two answers.</p>",
  "evidence": "Domain and range written in interval notation with contextual explanations; a computation of $h(12)$ using the slope of the first segment; two solved equations (one per segment) for the times at 1,400 feet, with a written explanation of why two times occur",
  "reveals": "Whether the student reads a function as a relationship between input and output, extracts domain/range from a representation, and interprets function values — including recognizing that one output can come from two different inputs."
 },
 {
  "n": 17,
  "strand": "Functions",
  "topic": "Evaluating functions and interpreting $f(a)=b$ in context; creating and solving a one-variable equation",
  "standards": [
   "NC.M3.F-IF.2",
   "NC.M3.A-CED.1"
  ],
  "standardsDetail": "Evaluating functions and interpreting $f(a)=b$ in context; creating and solving a one-variable equation — NC.M3.F-IF.2 (evaluate functions for inputs in their domains; interpret statements that use function notation in context), NC.M3.A-CED.1 (create and solve equations in one variable arising from a linear function)",
  "html": "<p>A community fitness center models its monthly profit, in dollars, by $P(m) = 45m - 1200$, where $m$ is the number of members enrolled that month.</p>\n<p>(a) Find $P(60)$ and write a sentence explaining exactly what the result means.<br>(b) The center&#x27;s board sets a goal of a $2,400 monthly profit. Write and solve an equation to find how many members the center needs to reach that goal.<br>(c) Find the break-even number of members (the enrollment at which profit is zero). If the result is not a whole number, explain how the center should interpret it.</p>",
  "evidence": "Correct substitution and evaluation for part (a) with an interpretation sentence; an equation $45m - 1200 = 2400$ solved step by step; a break-even solution with a written interpretation of a non-integer result (rounding up to whole members)",
  "reveals": "Whether the student connects function evaluation to a real quantity, reverses the process by setting up and solving an equation, and handles a non-integer mathematical answer sensibly in context."
 },
 {
  "n": 18,
  "strand": "Functions",
  "topic": "Interpreting key features of graphs and tables in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Interpreting key features of graphs and tables in context — NC.M3.F-IF.4 (interpret intercepts, intervals of increase/decrease, and average rate of change in terms of the context)",
  "html": "<p>A town maintenance crew fills and then partially drains a water storage tank. The table shows the height $H$, in inches, of water in the tank $t$ minutes after the crew begins.</p>\n<table>\n<tr><th>$t$ (min)</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th><th>50</th><th>60</th></tr>\n<tr><td>$H$ (in)</td><td>4</td><td>10</td><td>16</td><td>16</td><td>12</td><td>8</td><td>4</td></tr>\n</table>\n<p>(a) What was the height of the water when the crew began, and what feature of the function does this value represent?<br>(b) Describe the intervals on which $H$ is increasing, constant, and decreasing, and give a plausible explanation for the constant interval.<br>(c) Find the average rate of change of $H$ on $[0, 20]$ and interpret it.<br>(d) Use the table (assuming the height changes linearly between consecutive entries on the way down) to estimate the time at which the water height is 10 inches during the draining phase.</p>",
  "evidence": "Identification of the initial value as the $H$-intercept; correct increasing/constant/decreasing intervals with a contextual explanation; an average-rate-of-change computation with units (inches per minute); an interpolation on the draining portion of the table",
  "reveals": "Whether the student can read a table as a function, attach meaning to its key features, and use average rate of change and interpolation rather than only point values."
 },
 {
  "n": 19,
  "strand": "Functions",
  "topic": "Relating the domain of a function to its context; representing constraints with inequalities",
  "standards": [
   "NC.M3.F-IF.5",
   "NC.M3.A-CED.3"
  ],
  "standardsDetail": "Relating the domain of a function to its context; representing constraints with inequalities — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes), NC.M3.A-CED.3 (represent constraints by inequalities and interpret solutions as viable or nonviable options in a modeling context)",
  "html": "<p>A tour company runs a small passenger ferry across a lake. Each ticket costs $18, and the ferry can carry at most 150 passengers per trip. Let $R(n) = 18n$ be the revenue, in dollars, from one trip carrying $n$ passengers.</p>\n<p>(a) State an appropriate domain for $R$ in this situation, and explain two separate reasons why the domain is not all real numbers.<br>(b) The company will only make a trip if revenue is at least $1,800. Write and solve an inequality to find the minimum number of passengers needed for the trip to run.<br>(c) A student claims $n = 75.5$ is a valid input because $R(75.5)$ can be computed. Explain why the claim is wrong in context even though the arithmetic works.</p>",
  "evidence": "A domain stated as whole numbers from 0 to 150 with two distinct justifications (passengers are counted in whole numbers; capacity is capped); the inequality $18n \\geq 1800$ solved and interpreted; a written rebuttal distinguishing mathematical computability from contextual viability",
  "reveals": "Whether the student understands that a model's domain comes from the situation — discreteness and capacity — and can use an inequality to express a real constraint."
 },
 {
  "n": 20,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph piecewise-defined functions, including step and absolute value functions; here a continuous piecewise-linear function with a cap)",
  "html": "<p>A community center rents its hall using the following pricing: a flat fee of $50 covers any rental of up to 2 hours; each additional hour (or part of an hour, charged as a full hour for billing, but modeled here as continuous time) beyond 2 hours costs $15 per hour; and the total charge is capped at $140, which is reached at 8 hours. The hall can be rented for at most 12 hours.</p>\n<p>(a) Write a piecewise-defined function $C(h)$ for the total charge, in dollars, for a rental of $h$ hours, $0 &lt; h \\leq 12$.<br>(b) Graph $C(h)$, labeling the breakpoints and the value of the function at each breakpoint.<br>(c) Find $C(5)$ and $C(1.5)$, and interpret each in context.<br>(d) At what rental length does the cap first apply? Justify your answer with an equation.</p>",
  "evidence": "A correct three-piece definition with correct domain intervals for each piece; a graph showing a horizontal segment, a rising segment, and a horizontal cap segment with breakpoints at $h = 2$ and $h = 8$; two evaluations with interpretations; an equation $50 + 15(h-2) = 140$ justifying the cap point",
  "reveals": "Whether the student can translate a verbal pricing rule into a piecewise model, graph it accurately with correct breakpoints, and move fluently between the rule, the graph, and specific values."
 },
 {
  "n": 21,
  "strand": "Functions",
  "topic": "Graphing polynomial functions; zeros and end behavior",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions; zeros and end behavior — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when suitable factorizations are available and showing end behavior)",
  "html": "<p>In a geometry class project, students cut squares of side length $x$ inches from the corners of a rectangular sheet of cardboard measuring 24 inches by 18 inches, then fold up the sides to form an open-top box. The volume of the box, in cubic inches, is modeled by $V(x) = x(24 - 2x)(18 - 2x)$.</p>\n<p>(a) Graph $V$ on a graphing utility over a window that shows all of its zeros. Identify the zeros of the function.<br>(b) Describe the end behavior of $V$ using limit-style notation (as $x \\to -\\infty$ and as $x \\to \\infty$), and identify the leading coefficient&#x27;s role in that behavior.<br>(c) State the domain of $V$ that makes sense for the box project, and explain which zero(s) are excluded by that domain and why.<br>(d) Use the graph (or a table of values) to estimate the cut size $x$ that maximizes the volume, and the maximum volume.</p>",
  "evidence": "A graph of the cubic with zeros identified at $x = 0$, $x = 9$, and $x = 12$ (from the three factors); end-behavior statements tied to the positive leading coefficient of the expanded cubic; a contextual domain with reasoning; a graph/table-based estimate of the maximizing cut and maximum volume",
  "reveals": "Whether the student connects a factored polynomial to its zeros and graph shape, separates the mathematical function from its contextual domain, and uses a graph as evidence for an optimization conclusion."
 },
 {
  "n": 22,
  "strand": "Functions",
  "topic": "Graphing exponential functions (intercepts and asymptotes); expressing the solution of an exponential equation as a logarithm",
  "standards": [
   "NC.M3.F-IF.7e",
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Graphing exponential functions (intercepts and asymptotes); expressing the solution of an exponential equation as a logarithm — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts and end behavior), NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm and evaluate using technology; solve exponential equations)",
  "html": "<p>After drinking a cup of coffee, the amount of caffeine in a person&#x27;s bloodstream can be modeled by $C(t) = 180(0.87)^t$, where $C$ is measured in milligrams and $t$ is the number of hours since the coffee was finished.</p>\n<p>(a) Graph $C$ for $0 \\leq t \\leq 24$. Identify the $C$-intercept, state whether the graph has any $t$-intercepts, and identify the horizontal asymptote.<br>(b) Interpret the $C$-intercept and the horizontal asymptote in context.<br>(c) Find $C(5)$ and interpret the result.<br>(d) Express, as a logarithm, the exact time at which the caffeine level reaches 20 mg, then evaluate it with technology. Interpret the answer in context.</p>",
  "evidence": "A decreasing exponential graph with intercept and asymptote labeled; contextual interpretations of both features; an evaluation of $C(5)$ with units; the logarithmic form $t = \\dfrac{\\log(20/180)}{\\log(0.87)}$ (or equivalent) and a decimal evaluation with interpretation",
  "reveals": "Whether the student reads the structural features of an exponential model (starting value, decay, asymptote) and understands a logarithm as the tool that answers \"how long until…\" for exponential change."
 },
 {
  "n": 23,
  "strand": "Functions",
  "topic": "Comparing properties of two functions represented in different ways",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing properties of two functions represented in different ways — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way — algebraically and in a table)",
  "html": "<p>Two car rental companies serve a family planning a road trip.</p>\n<ul><li><strong>Company A</strong> charges according to $C_A(m) = 38 + 0.25m$, where $C_A$ is the total cost in dollars for driving $m$ miles.</li><li><strong>Company B</strong> publishes the following table of total costs:</li></ul>\n<table>\n<tr><th>Miles driven $m$</th><th>0</th><th>100</th><th>200</th><th>300</th></tr>\n<tr><td>Total cost $C_B$ (dollars)</td><td>50</td><td>70</td><td>90</td><td>110</td></tr>\n</table>\n<p>(a) From the table, determine Company B&#x27;s daily base fee and its per-mile rate, and write $C_B$ as an equation.<br>(b) Compare the two companies: which has the lower base fee, and which has the lower per-mile rate?<br>(c) Find the mileage at which the two companies cost the same, and the cost at that mileage.<br>(d) The family expects to drive about 300 miles. Which company should they choose, and how much do they save? Justify your answer using your results.</p>",
  "evidence": "Company B's base fee and rate extracted from the table and written as an equation; a side-by-side comparison of intercepts and rates; a solved equation $C_A(m) = C_B(m)$ for the break-even mileage and cost; a recommendation for 300 miles supported by computed costs for both companies",
  "reveals": "Whether the student can translate between representations, compare corresponding features (initial value vs. rate of change), and use a break-even analysis to defend a consumer decision."
 },
 {
  "n": 24,
  "strand": "Functions",
  "topic": "Building a function from a context using an explicit expression or recursive process",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building a function from a context using an explicit expression or recursive process — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities, determining an explicit expression or a recursive process from a context)",
  "html": "<p>A high-school cross-country runner follows a training plan in which she runs 12 miles in week 1 and increases her weekly mileage by 1.5 miles each week.</p>\n<p>(a) Write a recursive definition for the sequence $a_n$ of weekly mileages, making clear what $a_1$ is and how each term is obtained from the previous one.<br>(b) Write an explicit formula for $a_n$.<br>(c) How many miles does she run in week 10?<br>(d) In which week does her weekly mileage first reach 30 miles? Show the equation or reasoning you used.</p>",
  "evidence": "A recursive definition with initial value and recurrence; an equivalent explicit (closed-form) formula; an evaluation for week 10; an equation solved for the week when mileage reaches 30 miles",
  "reveals": "Whether the student sees recursive and explicit descriptions as two views of the same pattern and can choose the more efficient view for a \"reach a target\" question."
 },
 {
  "n": 25,
  "strand": "Functions",
  "topic": "Combining standard function types by arithmetic operations",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types by arithmetic operations — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to build a function that models a context)",
  "html": "<p>A food truck sells sandwiches. Its daily costs consist of a fixed cost of $250 (permits, fuel, and commissary fees) plus $3.25 in ingredients for each sandwich sold. The truck sells each sandwich for $9.50. Let $x$ be the number of sandwiches sold in a day.</p>\n<p>(a) Write a cost function $C(x)$ and a revenue function $R(x)$.<br>(b) Build the profit function $P(x)$ by combining $C$ and $R$ with an arithmetic operation, and simplify it. State which operation you used and why it represents profit.<br>(c) How many sandwiches must the truck sell in a day to break even?<br>(d) Find $P(120)$ and interpret it in context.</p>",
  "evidence": "Two correct linear functions for cost and revenue; a profit function built explicitly as $P(x) = R(x) - C(x)$ and simplified; a break-even solution obtained by setting profit to zero; an evaluation at $x = 120$ interpreted as a dollar profit",
  "reveals": "Whether the student understands functions as objects that can be combined to model a new quantity, rather than only evaluating given formulas."
 },
 {
  "n": 26,
  "strand": "Functions",
  "topic": "Identifying the effect of transformations on the graph of a function",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Identifying the effect of transformations on the graph of a function — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$; recognize even and odd functions from graphs and algebraic expressions)",
  "html": "<p>A footbridge crosses a river that is 100 feet wide. The height of the bridge&#x27;s arch above the water, in feet, at a horizontal distance of $x$ feet from the near bank is modeled by $A(x) = -0.008(x - 50)^2 + 20$. The parent function is $f(x) = x^2$.</p>\n<p>(a) Describe each transformation that maps the graph of $f$ to the graph of $A$ (reflections, stretches/compressions, and shifts), in an order that could be applied step by step.<br>(b) State the vertex of the arch and interpret it in context.<br>(c) Find the zeros of $A$ and interpret them in context.<br>(d) Compute $A(25)$ and interpret it.<br>(e) The graph of $A$ is symmetric, but $A$ is not an even function. Explain where its line of symmetry is, and why symmetry about that line does not make $A$ even.</p>",
  "evidence": "A complete list of the four transformations (reflection across the $x$-axis, vertical compression by a factor of 0.008, horizontal shift right 50, vertical shift up 20); vertex identified and interpreted as the arch's maximum height at mid-span; zeros found by solving and interpreted as the points where the arch meets the water at the two banks; an evaluation at $x = 25$; an explanation distinguishing symmetry about $x = 50$ from evenness (symmetry about the $y$-axis)",
  "reveals": "Whether the student reads a vertex-form equation as a transformed parent graph, ties each parameter to a feature of a real structure, and understands evenness as a specific symmetry, not symmetry in general."
 },
 {
  "n": 27,
  "strand": "Functions",
  "topic": "Finding the inverse of a function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding the inverse of a function — NC.M3.F-BF.4a (solve an equation of the form $f(x) = c$ for a simple function and find its inverse; here, find the inverse of a linear function and use it)",
  "html": "<p>A plumbing company charges for a service call according to $C(h) = 65h + 85$, where $C$ is the total charge in dollars and $h$ is the number of hours of labor.</p>\n<p>(a) Find the inverse function $h(C)$, expressing hours as a function of the total charge. Show the algebraic steps.<br>(b) State the domain and range of $C$ in context, and the corresponding domain and range of the inverse.<br>(c) A customer is billed $410. Use the inverse function to find how many hours of labor were charged.<br>(d) A second customer&#x27;s bill is $280. How many hours of labor does the inverse give? Verify your answer by evaluating $C$ at that number of hours.</p>",
  "evidence": "An inverse derived by swapping variables and solving, with steps shown; contextually correct domains and ranges for both functions (charge at least the $85 base fee; hours nonnegative); two inverse evaluations, with the second verified by substitution into the original function",
  "reveals": "Whether the student understands inversion as reversing the roles of input and output — algebraically, in the domain/range, and as a practical tool for answering the \"backwards\" question."
 },
 {
  "n": 28,
  "strand": "Functions",
  "topic": "Verifying inverse functions by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverse functions by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A science class uses the pair of functions $f(x) = \\frac{5}{9}(x - 32)$, which converts a temperature in degrees Fahrenheit to degrees Celsius, and $g(x) = \\frac{9}{5}x + 32$, which converts degrees Celsius back to degrees Fahrenheit.</p>\n<p>(a) Compute $f(g(x))$ and simplify completely.<br>(b) Compute $g(f(x))$ and simplify completely.<br>(c) Based on parts (a) and (b), state the relationship between $f$ and $g$, and explain what the two compositions mean physically for a temperature measurement.<br>(d) A nurse measures a patient&#x27;s temperature as $98.6^\\circ\\text{F}$. Use $f$ to convert it to Celsius, then use $g$ to convert your answer back, confirming the round trip.</p>",
  "evidence": "Both compositions carried out with correct algebra, each simplifying to $x$; an explicit statement that $f$ and $g$ are inverses, with a physical interpretation (converting and converting back returns the original temperature); the numerical conversion $98.6^\\circ\\text{F} \\to 37^\\circ\\text{C}$ and its verified return trip",
  "reveals": "Whether the student can use composition as a proof technique for inversion and connect the algebraic identity $f(g(x)) = x$ to the real-world meaning of undoing a conversion."
 },
 {
  "n": 29,
  "strand": "Functions",
  "topic": "Reading values of an inverse function from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading values of an inverse function from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>A runner&#x27;s distance from the start of a trail, in miles, is a function $d = f(t)$ of the elapsed time $t$, in minutes. Values of $f$ are shown below.</p>\n<table>\n<tr><th>$t$ (min)</th><th>0</th><th>5</th><th>10</th><th>15</th><th>20</th><th>25</th></tr>\n<tr><td>$f(t)$ (mi)</td><td>0</td><td>0.6</td><td>1.3</td><td>1.9</td><td>2.6</td><td>3.2</td></tr>\n</table>\n<p>(a) Find $f(15)$ and explain what it means in context.<br>(b) Find $f^{-1}(2.6)$ and explain what it means in context. In your explanation, make clear how the roles of the input and output have switched compared with part (a).<br>(c) Estimate $f^{-1}(1.0)$, explaining your reasoning from the table.<br>(d) State the domain and range of $f^{-1}$ based on the table.</p>",
  "evidence": "A table lookup for $f(15)$ with interpretation; the inverse value found by locating 2.6 in the output row and reading the corresponding input, with an interpretation that explicitly swaps time and distance; an estimate for $f^{-1}(1.0)$ based on where 1.0 falls between table outputs; domain and range of the inverse stated as the swapped range and domain of $f$",
  "reveals": "Whether the student can operate an inverse from a representation without a formula — reading a table \"backwards\" and keeping track of which quantity is the input."
 },
 {
  "n": 30,
  "strand": "Functions",
  "topic": "Comparing growth of exponential and polynomial functions",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Comparing growth of exponential and polynomial functions — NC.M3.F-LE.3 (observe using graphs and tables that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial function)",
  "html": "<p>A school environmental club is comparing two models for the balance, in dollars, of two fundraising accounts after $t$ years.</p>\n<ul><li><strong>Account P</strong> (a polynomial model from a yearly fair whose proceeds grow as the fair expands): $P(t) = t^2 + 20t + 100$</li><li><strong>Account E</strong> (an exponential model from an investment): $E(t) = 50(1.5)^t$</li></ul>\n<p>(a) Build a table of values for both accounts for $t = 0, 1, 2, 3, 4, 5$.<br>(b) Based on the table, during which years is Account P ahead, and in which year does Account E first move ahead?<br>(c) Account P is still slightly ahead at $t = 3$. Using the table values, explain how that can be true even though Account E is the better long-term choice.<br>(d) State the general principle this comparison illustrates about exponential versus polynomial growth, and support your statement with two specific comparisons from your table (for example, how the gap between the accounts changes from $t = 4$ to $t = 5$).</p>",
  "evidence": "A complete, correct table for $t = 0$ through $5$; identification of the crossover between $t = 3$ and $t = 4$; an explanation reconciling P's narrow lead at $t = 3$ with E's long-term dominance; a statement of the principle that exponential growth eventually exceeds polynomial growth, supported by numerical gap comparisons from the table",
  "reveals": "Whether the student uses tabular evidence — not just intuition — to reason about long-term growth, and can articulate why an exponential model eventually outruns any polynomial model even when it starts behind."
 },
 {
  "n": 31,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length — NC.M3.F-TF.1 (understand radian measure of an angle; the arc length on a unit circle subtended by an angle is its radian measure)",
  "html": "<p>At a school spring fair, a horse on a carousel is 4 meters from the center of the carousel. During one part of the ride, the carousel rotates the horse through an angle of $\\frac{5\\pi}{3}$ radians. (a) Convert this angle measure to degrees. (b) How far does the horse travel along its circular path during this rotation? Give your answer in meters, both exactly in terms of $\\pi$ and rounded to the nearest hundredth.</p>",
  "evidence": "A degree conversion computation, an arc-length equation $s = r\\theta$ with the angle in radians, and a final distance with units interpreted as distance traveled by the horse",
  "reveals": "Whether the student connects radian measure to actual arc length (not just a conversion procedure) and knows arc-length formulas require radians."
 },
 {
  "n": 32,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit circle and extending trigonometric functions",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit circle and extending trigonometric functions — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise around the unit circle; explain signs and periodicity)",
  "html": "<p>A wind turbine at a coastal research station has blades 12 meters long. The hub is the origin of a coordinate system, east is the positive $x$-direction, and north is the positive $y$-direction. One blade starts pointing due east and rotates counterclockwise. After a gust, the blade has rotated through a total angle of $750^\\circ$. (a) Find an angle between $0^\\circ$ and $360^\\circ$ that gives the blade&#x27;s final direction, and explain why the blade&#x27;s direction is the same as it would be after rotating through only that smaller angle. (b) Using the unit circle, state the cosine and sine of the final direction angle, including their signs, and use them to find the coordinates of the blade tip relative to the hub, in meters.</p>",
  "evidence": "A coterminal-angle computation, unit-circle cosine and sine values with justified signs, and scaled coordinates for the blade tip with units",
  "reveals": "Whether the student understands periodicity and coterminal angles as a property of rotation, and can read signs and values from the unit circle rather than a calculator alone."
 },
 {
  "n": 33,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>At Wrightsville Beach, a tide gauge records a high tide of 5.2 feet and the following low tide of 1.0 foot. Assume the tide height follows a sinusoidal pattern with a period of 12 hours, and let $t = 0$ be the moment of high tide. (a) Write a function $h(t)$ that models the tide height, in feet, $t$ hours after high tide. Identify the amplitude, midline, and period in your model. (b) Predict the tide height 4 hours after high tide. (c) A kayaking club wants to launch when the tide is falling and the height is exactly at the midline on its way down. At what time $t$ (with $0 &lt; t &lt; 12$) does this first occur, and how do you know the tide is falling then?</p>",
  "evidence": "A cosine model with amplitude, midline, and angular frequency derived from the given high/low values and period; a computed height at $t = 4$; and a reasoned time for the falling midline crossing",
  "reveals": "Whether the student can build a sinusoidal model from data features (max, min, period) and interpret its parameters and values in a real decision-making context."
 },
 {
  "n": 34,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>A Ferris wheel at the North Carolina State Fair has a diameter of 20 meters. The bottom of the wheel is 2 meters above the ground, and the wheel makes one complete revolution every 40 seconds. A rider boards at the bottom of the wheel at time $t = 0$ seconds. Assume the wheel rotates at a constant speed. (a) Write a function $h(t)$ modeling the rider&#x27;s height above the ground, in meters, $t$ seconds after boarding. (b) Find the rider&#x27;s height at $t = 10$ seconds and at $t = 20$ seconds. (c) Find the rider&#x27;s height at $t = 5$ seconds, rounded to the nearest hundredth of a meter.</p>",
  "evidence": "A sinusoidal height model with midline 12 m, amplitude 10 m, and period 40 s correctly phased to start at the minimum; evaluated heights at three times with units",
  "reveals": "Whether the student can translate a physical rotating system into a phased sinusoidal model and evaluate and interpret it at key points of the cycle."
 },
 {
  "n": 35,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the midsegment theorem)",
  "html": "<p>A school garden club lays out a triangular garden plot with vertices, in meters on a coordinate grid, at $A(0,0)$, $B(6,8)$, and $C(12,0)$. The club wants to run a straight irrigation line between the midpoint $D$ of side $\\overline{AB}$ and the midpoint $E$ of side $\\overline{AC}$. Before buying materials, the club must verify two claims about this midsegment: that the irrigation line will be parallel to side $\\overline{BC}$, and that its length will be exactly half the length of $\\overline{BC}$. Prove both claims using coordinates, showing all computations.</p>",
  "evidence": "A structured coordinate proof: midpoint computations, slope computations showing the segments are parallel, and distance computations showing the length relationship, with a concluding statement tying the computations to the claims",
  "reveals": "Whether the student can carry out a complete coordinate proof — choosing appropriate tools (midpoint, slope, distance formulas) and organizing them into a logical verification, not just isolated calculations."
 },
 {
  "n": 36,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that the measures of the interior angles of a triangle sum to $180^\\circ$)",
  "html": "<p>An engineering student is checking a design drawing for a triangular roof truss. The truss is triangle $ABC$. To verify the design software&#x27;s angle calculations, the student must prove from scratch that the measures of the interior angles of any triangle sum to $180^\\circ$. The diagram is described as follows: triangle $ABC$ with vertex $A$ at the top, base $\\overline{BC}$ horizontal at the bottom, and a straight line $DE$ drawn through vertex $A$ parallel to $\\overline{BC}$, with $D$ on the left and $E$ on the right, so $D$–$A$–$E$ are collinear. Write a complete proof that $m\\angle BAC + m\\angle B + m\\angle C = 180^\\circ$, using the parallel line in the diagram. State each reason.</p>",
  "evidence": "A two-column or paragraph proof with reasons, using alternate interior angles formed by the parallel lines and the straight angle at $A$",
  "reveals": "Whether the student can construct a deductive argument from given information and established angle relationships, rather than verifying the fact with one numerical example."
 },
 {
  "n": 37,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that the diagonals of a parallelogram bisect each other and its converse)",
  "html": "<p>A community theater group builds a rectangular-looking platform frame for a stage set. On a coordinate grid (units in feet), the four corners of the frame are $W(1,1)$, $X(7,2)$, $Y(9,6)$, and $Z(3,5)$, in order around the frame. The director needs the frame to be a true parallelogram so the platform panels fit. (a) Prove that $WXYZ$ is a parallelogram by showing that its diagonals $\\overline{WY}$ and $\\overline{XZ}$ bisect each other, and state the theorem that makes this a valid test. (b) As a check, compute the lengths of all four sides and confirm that opposite sides are congruent.</p>",
  "evidence": "A structured proof using midpoint computations for both diagonals and an explicit statement of the converse theorem used, plus four distance computations confirming opposite-side congruence",
  "reveals": "Whether the student knows a defining test for a parallelogram, can execute it with coordinates, and can support a conclusion with a second independent check."
 },
 {
  "n": 38,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Circle relationships",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Circle relationships — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc / the central angle on the same arc)",
  "html": "<p>An outdoor amphitheater is built around a circular plaza. Points $A$ and $B$ mark the two ends of the stage opening, $O$ is the center of the circle, and the central angle $\\angle AOB$ measures $124^\\circ$. A spectator sits at point $C$ on the major arc of the circle (the long way around from $A$ to $B$). The angle $\\angle ACB$ is the spectator&#x27;s viewing angle of the stage opening. (a) Find the measure of $\\angle ACB$ and state the theorem you used. (b) Explain, in terms of arcs, why your answer would be different if the spectator instead sat on the minor arc.</p>",
  "evidence": "An inscribed-angle computation using the central angle / intercepted arc measure, a named theorem, and an arc-based explanation for the minor-arc case",
  "reveals": "Whether the student understands the inscribed angle theorem as a relationship between an angle and its intercepted arc, including how the position on the circle changes the result."
 },
 {
  "n": 39,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Circle relationships",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Circle relationships — NC.M3.G-C.2 (relationships among inscribed angles, radii, and chords; a radius perpendicular to a chord bisects the chord)",
  "html": "<p>A circular concrete culvert has a radius of 10 feet. A horizontal brace is installed across the inside of the culvert as a chord that is 16 feet long. A radius is drawn from the center $O$ perpendicular to the chord, meeting the chord at point $M$. (a) Explain why $M$ must be the midpoint of the chord (your explanation should use congruent triangles). (b) How far is the brace from the center of the culvert — that is, what is the length $OM$? Give your answer in feet.</p>",
  "evidence": "A congruent-triangle justification (hypotenuse–leg) that the perpendicular radius bisects the chord, followed by a Pythagorean computation of the distance from the center to the chord, with units",
  "reveals": "Whether the student can justify a circle theorem with triangle congruence and then apply it with right-triangle reasoning in a construction setting."
 },
 {
  "n": 40,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed and circumscribed circles",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed and circumscribed circles — NC.M3.G-C.3 (construct and justify inscribed and circumscribed circles of a triangle; find angle measures in inscribed quadrilaterals)",
  "html": "<p>A festival organizer plans two circular features. (a) Four light towers stand at the vertices of a quadrilateral $ABCD$ inscribed in a circular plaza, in order around the circle. The angle at $A$ measures $85^\\circ$ and the angle at $B$ measures $112^\\circ$. Find the measures of the angles at $C$ and $D$, and state the property you used. (b) A triangular first-aid station sign has side lengths 6 feet, 8 feet, and 10 feet. The organizer wants to mount a circular ring around the sign so the ring passes through all three vertices of the triangle (a circumscribed circle). Where is the center of this circle, and what is its radius? Justify your answer, including why the center is located where you claim.</p>",
  "evidence": "Two supplementary-angle computations for the inscribed quadrilateral with the property named; for the triangle, identification of the circumcenter as the intersection of perpendicular bisectors, recognition that the triangle is right, and a radius computation with justification",
  "reveals": "Whether the student knows the opposite-angles property of inscribed quadrilaterals and understands the circumcenter's defining property (equidistance from vertices) well enough to locate it in a special case."
 },
 {
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive, using similarity, the fact that the length of the arc intercepted by an angle is proportional to the radius; define radian measure; derive and use the sector-area formula $A = \\frac{1}{2}r^2\\theta$)",
  "html": "<p>A rotating irrigation sprinkler at a community garden waters a sector-shaped region of a garden bed. The sprinkler&#x27;s spray reaches 12 meters, and it rotates through an angle of $120^\\circ$. (a) Convert the rotation angle to radians. (b) Find the length of the outer arc of the watered region, in meters, exactly in terms of $\\pi$ and rounded to the nearest hundredth. (c) Find the area of the watered region, in square meters, exactly in terms of $\\pi$ and rounded to the nearest hundredth. (d) In one sentence, explain why the sector-area formula must use the angle in radians (or, equivalently, what fraction of the full circle the sector represents).</p>",
  "evidence": "A radian conversion, an arc-length computation, a sector-area computation using $A = \\frac{1}{2}r^2\\theta$, and a proportional/fraction-of-circle explanation, all with correct units",
  "reveals": "Whether the student can move fluently between degrees and radians and understands sector measures as proportional parts of a circle, not just formulas to substitute into."
 },
 {
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area; radian measure",
  "standards": [
   "NC.M3.G-C.5",
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Arc length and sector area; radian measure — NC.M3.G-C.5 (arc length and area of a sector using radian measure), NC.M3.F-TF.1 (radian measure of an angle)",
  "html": "<p>A car&#x27;s windshield wiper sweeps a sector of the windshield. The wiper&#x27;s outer tip is 28 inches from the pivot point, and the wiper rotates through an angle of $105^\\circ$ with each sweep. Assume the cleaned region is the full sector swept by the segment from the pivot to the tip. (a) Express the rotation angle in radians. (b) Find the length of the arc traced by the outer tip, in inches, rounded to the nearest tenth. (c) Find the area of the windshield cleaned by one sweep, in square inches, rounded to the nearest tenth.</p>",
  "evidence": "A radian conversion, an arc-length computation $s = r\\theta$, and a sector-area computation $A = \\frac{1}{2}r^2\\theta$, with units and rounding as specified",
  "reveals": "Whether the student can apply radian-based arc and sector formulas in a new mechanical context and keep arc length (inches) and area (square inches) conceptually distinct."
 },
 {
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A school district maps the coverage boundary of a Wi-Fi hotspot on a coordinate grid where each unit represents 1 mile. The boundary satisfies the equation $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Rewrite the equation in standard (center–radius) form by completing the square, showing your steps. State the center and radius of the coverage circle. (b) A bus stop is located at the point $(7, 1)$. Determine whether the bus stop is inside, on, or outside the coverage boundary, and justify your answer with a distance computation.</p>",
  "evidence": "A complete-the-square derivation to standard form, stated center and radius with units, and a distance-from-center computation compared with the radius to classify the point",
  "reveals": "Whether the student can convert a general-form circle equation to standard form and use the center–radius relationship to make and justify a location decision."
 },
 {
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem / distance formula)",
  "html": "<p>A circular spray park is being planned on a coordinate grid where each unit represents 1 meter. The park&#x27;s boundary passes through every point that is exactly 7 meters from the center point $(-2, 4)$. (a) Starting from the distance definition, derive the equation of the circle that forms the park&#x27;s boundary. Show the distance-formula step before squaring. (b) An entrance gate is planned at $(5, 4)$. Show whether or not this gate lies exactly on the boundary. (c) A bench is planned at $(-2, 12)$. Determine whether the bench is inside or outside the park, with justification.</p>",
  "evidence": "A derivation of the standard-form equation from the distance definition, a substitution check for the gate point, and a distance comparison for the bench point, with units",
  "reveals": "Whether the student understands a circle equation as a distance condition (a locus), not merely a form to memorize, and can test points against that condition."
 },
 {
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A school installs a parabolic satellite dish on its roof. A cross-section of the dish through its center is a parabola. The receiver must be placed at the focus of the parabola. In the design coordinates (units in inches), the parabola has focus $(0, 2)$ and directrix the line $y = -2$, with the vertex at the origin and the dish opening upward. (a) Using the definition of a parabola — the set of points equidistant from the focus and the directrix — derive the equation of this cross-section. Show the distance expressions and the algebra used to simplify. (b) The dish&#x27;s rim is at height $y = 8$ inches in these coordinates. How wide is the dish at the rim? Give your answer in inches.</p>\n<p>---</p>",
  "evidence": "A derivation setting distance to the focus equal to distance to the directrix and simplifying to an equation relating $x$ and $y$, followed by a width computation at the given height with units",
  "reveals": "Whether the student can derive a conic equation from its geometric definition and then use the resulting equation to answer a design question."
 },
 {
  "n": 46,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A high school&#x27;s environmental club installs a cylindrical rain barrel to collect water for the school garden. The barrel has an inside diameter of 24 inches and an inside height of 36 inches. Assume the barrel is filled to the top and that 1 gallon = 231 cubic inches. How many gallons of water does the barrel hold when full?</p>",
  "evidence": "A volume computation using the cylinder formula with the radius correctly taken as half the diameter, a unit conversion to gallons, and a final answer with units",
  "reveals": "Whether the student can select and apply a volume formula, distinguish radius from diameter, and carry a unit conversion through to an interpreted result."
 },
 {
  "n": 47,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A landscaping company stores mulch in a conical pile at its supply yard. The pile has a circular base with radius 6 feet and a vertical height of 4 feet. The company sells mulch by the cubic yard (1 cubic yard = 27 cubic feet). How many cubic yards of mulch are in the pile?</p>",
  "evidence": "A volume computation using the cone formula (including the factor of 1/3), followed by a conversion from cubic feet to cubic yards and a final answer with units",
  "reveals": "Whether the student understands how a cone's volume relates to a cylinder's and can convert between cubic units correctly (dividing by 27, not by 3)."
 },
 {
  "n": 48,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects)",
  "html": "<p>A manufacturer cuts display samples from two solid blocks: a right circular cylinder and a square pyramid. For <strong>each</strong> solid, describe the shape of the cross section produced by (a) a cut parallel to the base, (b) a cut perpendicular to the base that passes through the solid&#x27;s central axis (for the pyramid, through its apex and the center of its base), and (c) a slanted cut that is neither parallel nor perpendicular to the base and does not pass through the apex of the pyramid or cut off a corner of either solid. Name each resulting shape.</p>",
  "evidence": "A labeled description or sketch of all six cross sections (three per solid), with each shape correctly named",
  "reveals": "Whether the student can mentally slice a solid in different planes and reason about how the cutting plane determines the resulting two-dimensional shape."
 },
 {
  "n": 49,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Solids generated by rotating two-dimensional shapes; modeling with geometric solids",
  "standards": [
   "NC.M3.G-GMD.4",
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Solids generated by rotating two-dimensional shapes; modeling with geometric solids — NC.M3.G-GMD.4 (identify three-dimensional objects generated by rotations of two-dimensional objects), NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A metal shop uses a lathe that spins a flat profile around a vertical axis to form a lamp base. Profile 1 is a rectangle 4 inches wide and 6 inches tall, with one 6-inch side lying on the axis of rotation. Profile 2 is a right triangle with legs 4 inches and 6 inches, with the 6-inch leg lying on the axis of rotation. For each profile: name the three-dimensional solid generated by one full rotation, state its radius and height, and compute its volume.</p>",
  "evidence": "Correct identification of each solid, its dimensions derived from the profile, and a volume computation for each solid with units",
  "reveals": "Whether the student can connect a two-dimensional profile to the solid it sweeps out and transfer the profile's measurements to the solid's radius and height."
 },
 {
  "n": 50,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with composite geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with composite geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A school is resurfacing an outdoor performance area. The area consists of a rectangular patio 30 feet by 20 feet with a semicircular stage attached along one of the 20-foot sides, extending outward from the patio. The semicircle&#x27;s diameter is the full 20-foot side. Pavers are sold in boxes that each cover 10 square feet. How many square feet must be resurfaced, and how many boxes of pavers should the school order? State any assumption you make about waste or cutting.</p>",
  "evidence": "A composite-area computation combining a rectangle and a semicircle, a rounding decision (rounding up to whole boxes) justified in context, and a stated assumption about waste/cutting",
  "reveals": "Whether the student can decompose a real object into familiar shapes, and whether they understand that a purchasing answer must be a whole number rounded in the direction the context demands."
 },
 {
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A construction crew pours a rectangular concrete equipment pad that is 4 meters long, 3 meters wide, and 0.15 meter thick. The density of the cured concrete is 2,400 kilograms per cubic meter. The crew&#x27;s trailer is rated to carry at most 5,000 kilograms per load. What is the mass of the concrete in the pad, and can the crew haul the pad&#x27;s worth of concrete (delivered as mixed loads, not as one solid piece) in a single trailer load by mass?</p>",
  "evidence": "A volume computation for the slab, a mass computation using mass = density × volume, and a comparison against the trailer's capacity with a conclusion stated in context",
  "reveals": "Whether the student can chain volume and density relationships together and use the result to make a practical go/no-go decision."
 },
 {
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Population density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Population density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A town in the Piedmont has a population of 18,400 people living within its limits, which cover 8.5 square miles. (a) What is the town&#x27;s current population density, in people per square mile? (b) The town annexes a new subdivision covering 0.4 square mile with 1,200 residents. What is the town&#x27;s population density after annexation? (c) A planning guideline recommends keeping density at or below 2,250 people per square mile for the town&#x27;s current road network. Does the town stay within the guideline after annexation?</p>",
  "evidence": "Two density computations (before and after), with population and area both updated in part (b), and a comparison to the guideline in part (c)",
  "reveals": "Whether the student understands density as a ratio that must be recomputed from updated totals rather than averaged or adjusted informally."
 },
 {
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems and minimizing materials",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems and minimizing materials — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including minimizing cost/materials under constraints)",
  "html": "<p>A local juice company wants to redesign its cylindrical can so the can still holds 355 cubic centimeters of juice but uses as little aluminum (surface area) as possible. The can is a closed cylinder. The design team agrees to test only these radii: 3 cm, 4 cm, 5 cm, and 6 cm. For each radius, find the height the can must have to hold exactly 355 cm³ and the can&#x27;s total surface area. Which of the tested radii uses the least aluminum, and what are that can&#x27;s dimensions and surface area?</p>",
  "evidence": "A table of radius, computed height (from the fixed-volume constraint), and surface area for all four radii; an identified minimum; and a concluding statement of the best tested design with units",
  "reveals": "Whether the student can work under a constraint — using the volume requirement to determine height before comparing surface areas — and search a set of candidate designs systematically rather than guessing."
 },
 {
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design cost comparison using volume and surface area",
  "standards": [
   "NC.M3.G-MG.3",
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Design cost comparison using volume and surface area — NC.M3.G-MG.3 (apply geometric methods to solve design problems), NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A community center is choosing between two designs for a small therapy pool, both 5 feet deep. Design A is a rectangular prism 20 feet long and 10 feet wide. Design B is a cylinder with radius 8 feet. Excavation costs $8 per cubic foot of water volume, and waterproof coating costs $3 per square foot of interior surface (the bottom plus the side walls, not the open top). Find the total cost of each design and state which design the center should choose on cost alone, and by how much it is cheaper.</p>",
  "evidence": "Volume and interior-surface-area computations for both designs, a cost build-up for each, and a final comparison with a recommendation and the dollar difference",
  "reveals": "Whether the student can manage a multi-step modeling problem in which two different measures (volume and surface area) drive two different costs, and can compare complete designs rather than single numbers."
 },
 {
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Purposes of surveys, experiments, and observational studies; inference from a sample to a population",
  "standards": [
   "NC.M3.S-IC.1",
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Purposes of surveys, experiments, and observational studies; inference from a sample to a population — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample; recognize the purposes and differences of sample surveys, experiments, and observational studies), NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies)",
  "html": "<p>A school district is studying three separate questions. For each question, decide whether a <strong>sample survey</strong>, an <strong>experiment</strong>, or an <strong>observational study</strong> is the appropriate method, name the population the district wants to draw a conclusion about, and explain your choice in one or two sentences.<br>(a) What percent of the district&#x27;s 12,000 students favor moving the high school start time from 7:30 a.m. to 8:30 a.m.?<br>(b) Does a new after-school tutoring program <em>cause</em> higher end-of-course scores for the district&#x27;s algebra students?<br>(c) Among the district&#x27;s current students, is there an association between average nightly sleep and GPA, given that the district will not assign students to sleep schedules?</p>",
  "evidence": "A method and population named for each question, with a justification that references what each method can and cannot establish (in particular, that only an experiment can support a cause-and-effect claim)",
  "reveals": "Whether the student can match a research question to a study design based on the kind of conclusion wanted, instead of treating all data collection as interchangeable."
 },
 {
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Randomization in surveys, experiments, and observational studies",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Randomization in surveys, experiments, and observational studies — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>Classify each study as a <strong>sample survey</strong>, an <strong>experiment</strong>, or an <strong>observational study</strong>, and for each one explain where randomization appears (random selection, random assignment, both, or neither) and what that randomization does or does not allow the researchers to conclude.<br>(i) Researchers randomly select 400 addresses in a county and mail residents a questionnaire about satisfaction with county parks.<br>(ii) A sports-medicine clinic recruits 60 volunteers with knee pain and randomly assigns half to a new therapy and half to standard therapy, then compares pain scores after eight weeks.<br>(iii) A researcher compares the resting heart rates of 50 adults who already belong to a gym with those of 50 adults who do not, without assigning anyone to exercise.</p>",
  "evidence": "A correct classification of all three studies, an identification of the type of randomization in each, and a statement of the conclusion each design supports (generalizing to a population vs. inferring cause and effect vs. association only)",
  "reveals": "Whether the student understands that random *selection* and random *assignment* do different jobs — one supports generalizing to a population, the other supports causal conclusions."
 },
 {
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population proportion and developing a margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population proportion and developing a margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A student council wants to estimate the percent of all 1,800 students at a high school who support adding a recycling program. They survey a random sample of 200 students, and 124 say they support it. To build a margin of error, a statistics class simulates 1,000 random samples of size 200 from a population in which the true proportion equals the sample proportion; the simulated sample proportions have mean 0.62 and standard deviation 0.034. (a) Find the sample proportion. (b) Using approximately 2 standard deviations as the margin of error, find the margin of error and the resulting interval. (c) Interpret the interval in context, and state whether the council can reasonably claim that a majority of all students support the program, explaining why.</p>",
  "evidence": "The sample proportion, a margin of error computed as about 2 × (simulation standard deviation), an interval, and an interpretation that includes a justified majority claim based on the interval's lower endpoint",
  "reveals": "Whether the student understands a margin of error as a measure of sampling variability (taken from the simulated sampling distribution) and can use an interval, not just a point estimate, to support a claim."
 },
 {
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean and developing a margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean and developing a margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A city transportation office wants to estimate the mean one-way commute time for all workers in the city. A random sample of 40 workers has a mean commute of 28.4 minutes. The office runs a simulation of 1,000 random samples of size 40; the simulated sample means have mean 28.4 minutes and standard deviation 2.3 minutes. (a) Using approximately 2 standard deviations as the margin of error, find the margin of error and an interval estimate for the mean commute time of all city workers. (b) A grant application requires showing that the city&#x27;s mean commute is below 35 minutes. Does this interval support that claim? Explain. (c) State one assumption behind using this sample to estimate the mean for <em>all</em> city workers.</p>",
  "evidence": "A margin of error and interval in minutes, a decision about the grant claim based on the interval's upper endpoint, and a stated assumption (for example, that the sample was randomly selected and is representative of all city workers)",
  "reveals": "Whether the student can transfer the margin-of-error process from proportions to means and can judge a claim against the whole interval rather than the sample mean alone."
 },
 {
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments using data from a randomized experiment and simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments using data from a randomized experiment and simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A school randomly assigns 60 students to two study apps, 30 students per app, for a four-week test-prep program. At the end, the App A group improved by an average of 12.4 points and the App B group by an average of 8.1 points, an observed difference of 4.3 points in favor of App A. To judge significance, students run a simulation: they shuffle the 60 improvement scores randomly into two groups of 30 a total of 1,000 times and record the difference in group means each time. The simulated differences (assuming no real difference between the apps) have mean 0 points and standard deviation 1.55 points, and only 18 of the 1,000 simulated differences were at least as large as 4.3 points. (a) What proportion of the simulations produced a difference at least as large as the observed difference by chance alone? (b) Using a 5% significance guideline, is the observed difference statistically significant? (c) State the conclusion about the two apps in context, and explain why random assignment matters for that conclusion.</p>",
  "evidence": "The simulated proportion (18/1000), a comparison to the 5% guideline, a significance decision, and a contextual conclusion that credits random assignment with balancing the groups so the difference can be attributed to the apps",
  "reveals": "Whether the student understands significance as \"too large to plausibly arise from random assignment alone,\" judged against a simulated null distribution rather than by the size of the difference alone."
 },
 {
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments using data from a randomized experiment and simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments using data from a randomized experiment and simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>Two warm-up routines are compared for a high school track team. Twenty-five athletes are randomly assigned to Routine X and 25 to Routine Y for six weeks. The mean reduction in 100-meter time is 0.52 second for Routine X and 0.46 second for Routine Y, an observed difference of 0.06 second in favor of Routine X. A simulation shuffles the 50 results into two groups of 25 a total of 1,000 times. The simulated differences in means (assuming no real difference between the routines) have mean 0 second and standard deviation 0.09 second, and 505 of the 1,000 simulated differences were at least as large in absolute value as 0.06 second. (a) What proportion of the simulations produced a difference at least as extreme as the observed difference by chance alone? (b) Is the observed difference statistically significant at the 5% level? (c) Write the conclusion the coach should draw, in context.</p>",
  "evidence": "The simulated proportion (505/1000), a non-significance decision, and a conclusion that the data do not provide convincing evidence that one routine is better — without claiming the routines are proven equal",
  "reveals": "Whether the student can recognize a difference that is well within the range of random-assignment variability, and can state a \"not significant\" conclusion accurately instead of overclaiming."
 },
 {
  "n": 61,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>A local news site runs this headline: <strong>&quot;90% of City Residents Oppose the New Stadium!&quot;</strong> The story explains that the figure comes from a poll posted on a sports-talk radio station&#x27;s website. Over one weekend, 200 people chose to visit the site and click their answer. The question read: &quot;Do you agree that the wasteful new stadium should be stopped before it raises your taxes?&quot; No margin of error is reported. Identify at least four distinct problems with using this poll to support the headline, and for each problem explain how it could distort the result. Then describe how a trustworthy poll on this question should be conducted.</p>",
  "evidence": "At least four identified flaws (for example: voluntary/self-selected response, a sample drawn from sports-radio listeners rather than all residents, leading question wording, no margin of error reported, and a sample too small/unrepresentative to generalize), each tied to its distorting effect, plus a redesigned poll using random sampling of residents and neutral wording",
  "reveals": "Whether the student can critically read a data-based claim in the media and connect specific design flaws to specific ways the reported number can mislead."
 },
 {
  "n": 62,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data; inference about a population from a study",
  "standards": [
   "NC.M3.S-IC.6",
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Evaluating reports based on data; inference about a population from a study — NC.M3.S-IC.6 (evaluate reports based on data), NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population)",
  "html": "<p>A fitness center advertises: <strong>&quot;Our 12-week program causes an average weight loss of 10 pounds — proven by our members&#x27; results!&quot;</strong> The claim is based on the following: of 180 members who enrolled, the 96 who finished all 12 weeks lost an average of 10 pounds. The 84 members who quit during the program were left out of the average. There was no comparison group, and finishers also received optional diet coaching. (a) Explain why this study, as designed, cannot support the word &quot;causes.&quot; (b) Identify two additional problems with the reported average of 10 pounds. (c) Describe a study the fitness center could run that <em>would</em> support a cause-and-effect conclusion, including how participants would be assigned.</p>",
  "evidence": "An explanation that an uncontrolled observational follow-up cannot establish causation, identification of the dropout exclusion (survivorship bias) and the diet-coaching confounder (and/or that results from self-selected finishers do not generalize to all enrollees), and a proposed randomized experiment with a control group and random assignment",
  "reveals": "Whether the student can separate a true numerical average from a valid conclusion — spotting who was excluded, what else changed, and what design a causal claim actually requires."
 }
];
