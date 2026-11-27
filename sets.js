const DAILY_SETS = [
 {
  "set": 1,
  "date": "2026-11-27",
  "label": "Day 1 · Fri, Nov 27",
  "theme": "School life & sports"
 },
 {
  "set": 2,
  "date": "2026-11-28",
  "label": "Day 2 · Sat, Nov 28",
  "theme": "Weather, environment & outdoors"
 },
 {
  "set": 3,
  "date": "2026-11-29",
  "label": "Day 3 · Sun, Nov 29",
  "theme": "Money, jobs & local business"
 },
 {
  "set": 4,
  "date": "2026-11-30",
  "label": "Day 4 · Mon, Nov 30",
  "theme": "Health & public health"
 },
 {
  "set": 5,
  "date": "2026-12-01",
  "label": "Day 5 · Tue, Dec 1",
  "theme": "Transportation & travel"
 },
 {
  "set": 6,
  "date": "2026-12-02",
  "label": "Day 6 · Wed, Dec 2",
  "theme": "Construction & home improvement"
 },
 {
  "set": 7,
  "date": "2026-12-03",
  "label": "Day 7 · Thu, Dec 3",
  "theme": "Technology & gaming"
 },
 {
  "set": 8,
  "date": "2026-12-04",
  "label": "Day 8 · Fri, Dec 4",
  "theme": "Food, cooking & school events"
 },
 {
  "set": 9,
  "date": "2026-12-05",
  "label": "Day 9 · Sat, Dec 5",
  "theme": "Environment & community planning"
 },
 {
  "set": 10,
  "date": "2026-12-06",
  "label": "Day 10 · Sun, Dec 6",
  "theme": "Community & celebrations — capstone"
 }
];
const DAILY_PROBLEMS = [
 {
  "id": "S1-1",
  "set": 1,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Adding and subtracting complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Adding and subtracting complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$)",
  "html": "<p>The drone club maps its flying field on a complex plane, where a position $a + bi$ means $a$ meters east and $b$ meters north of the launch pad. Drone A hovers at $5 + 3i$ and Drone B hovers at $-2 + 7i$. (a) Find the complex number for the position you reach by starting at the launch pad, flying Drone A&#x27;s displacement, and then flying Drone B&#x27;s displacement. (b) Find the complex number that represents the displacement from Drone B&#x27;s position to Drone A&#x27;s position, and interpret its real and imaginary parts.</p>",
  "evidence": "Two complex-number computations in $a + bi$ form, plus a written interpretation of the parts of the displacement in meters east/north",
  "reveals": "Whether the student treats a complex number as a single quantity with two meaningful components, combining like parts rather than mixing real and imaginary terms."
 },
 {
  "id": "S1-2",
  "set": 1,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder on division by $x - a$ is $P(a)$)",
  "html": "<p>The drama club models the profit from its spring musical with $R(x) = 2x^3 - 3x^2 + 4x + 5$, where $x$ is the performance number and $R(x)$ is the profit in hundreds of dollars. The club&#x27;s faculty advisor asks what the remainder would be if the polynomial were divided by $x - 3$, and what that remainder tells the club. Find the remainder and explain its meaning for the third performance.</p>",
  "evidence": "An evaluation of $R(3)$ (or synthetic division) connected explicitly to the remainder, with the value converted from hundreds of dollars and interpreted",
  "reveals": "Whether the student understands the Remainder Theorem as a shortcut with meaning — the remainder equals the function's value — rather than performing long division mechanically."
 },
 {
  "id": "S1-3",
  "set": 1,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Solving rational equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving rational equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable)",
  "html": "<p>Two members of the art club are painting a mural on the gym wall. Working alone, Maya can paint the whole mural in 6 hours, and Jordan can paint it in 4 hours. Assuming each works at a constant rate, write and solve an equation to find how long it takes them to paint the mural together. Check that your answer is reasonable.</p>",
  "evidence": "A work-rate equation built from the two individual rates, its solution in hours (also expressed in hours and minutes), and a reasonableness check comparing the answer with each individual time",
  "reveals": "Whether the student can build a rational equation from rates — the heart of the standard — and judge the solution against the context instead of accepting any algebraic result."
 },
 {
  "id": "S1-4",
  "set": 1,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Subtracting rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Subtracting rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>In an engineering elective, a ramp design gives two slope expressions. The slope computed from the left support is $\\dfrac{x^2 + 3x}{x^2 - x - 6}$ and the slope computed from the right support is $\\dfrac{x}{x - 3}$, where $x$ is a design parameter in feet. Find the difference (left slope minus right slope) written as a single rational expression in lowest terms, and state all values of $x$ that must be excluded.</p>",
  "evidence": "Factoring of the quadratic denominator, a common-denominator subtraction, simplification to a single rational expression, and the excluded values",
  "reveals": "Whether the student manages the sign and factoring demands of rational subtraction and remembers that excluded values come from the original denominators."
 },
 {
  "id": "S1-5",
  "set": 1,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>For a science-fair project, a student builds a pendulum and uses the period formula $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$, where $T$ is the period in seconds, $L$ is the string length in meters, and $g = 9.8$ m/s². (a) Rearrange the formula to solve for $L$. (b) The student wants a period of exactly 2 seconds. Find the required string length, to the nearest hundredth of a meter.</p>\n<p>## Functions (Problems 6–10)</p>",
  "evidence": "A step-by-step isolation of $L$ (squaring both sides included), then substitution of $T = 2$ and $g = 9.8$ with the length reported in meters",
  "reveals": "Whether the student can undo a square root and a product in the correct order when rearranging — the inverse-operation reasoning the standard targets."
 },
 {
  "id": "S1-6",
  "set": 1,
  "n": 6,
  "strand": "Functions",
  "topic": "Evaluating functions and interpreting function notation",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Evaluating functions and interpreting function notation — NC.M3.F-IF.2 (evaluate functions for inputs in their domains; interpret statements that use function notation in terms of a context)",
  "html": "<p>The school store&#x27;s daily profit from selling granola bars is modeled by $P(n) = 1.25n - 40$, where $n$ is the number of bars sold and $P(n)$ is the profit in dollars. (a) Find $P(200)$ and explain what it means. (b) Find $P(32)$ and explain what it means for the store.</p>",
  "evidence": "Two evaluations with the dollar amounts stated, each followed by a plain-language interpretation tied to bars sold",
  "reveals": "Whether the student reads $P(n)$ as an input–output statement about a real situation, including the meaning of a zero output, not just as substitution practice."
 },
 {
  "id": "S1-7",
  "set": 1,
  "n": 7,
  "strand": "Functions",
  "topic": "Finding the inverse of a function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding the inverse of a function — NC.M3.F-BF.4a (solve an equation of the form $f(x) = c$ for a simple function and find its inverse)",
  "html": "<p>A shuttle service charges a field-trip class a flat fee of \\$3 plus \\$2.50 per mile, so the cost in dollars for a trip of $m$ miles is $C(m) = 3 + 2.5m$. (a) Find a formula for the inverse function $C^{-1}$. (b) The class has \\$53 to spend. Use the inverse to find how many miles the shuttle can take them.</p>",
  "evidence": "The inverse formula obtained by swapping and solving, its correct input/output units (dollars in, miles out), and the mileage for a \\$53 budget",
  "reveals": "Whether the student understands an inverse as reversing a process — budget to distance — and can carry the units through the reversal."
 },
 {
  "id": "S1-8",
  "set": 1,
  "n": 8,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm and evaluate using technology)",
  "html": "<p>In biology class, a bacteria culture starts with 50 bacteria and doubles every 3 hours, so the population after $t$ hours is $A(t) = 50 \\cdot 2^{t/3}$. The class needs the culture to reach 5,000 bacteria for an experiment. Write the equation that determines the waiting time, express its solution using a logarithm, and find the time to the nearest tenth of an hour.</p>",
  "evidence": "The equation $50 \\cdot 2^{t/3} = 5000$, its exact logarithmic form, and a decimal time in hours obtained with a calculator",
  "reveals": "Whether the student sees a logarithm as the tool that undoes an exponential with an unknown in the exponent, and can move between exact and approximate answers."
 },
 {
  "id": "S1-9",
  "set": 1,
  "n": 9,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph piecewise-defined functions)",
  "html": "<p>The school rents its gym for community events. The rental cost in dollars for $h$ hours is<br>$$C(h) = \\begin{cases} 40h, &amp; 0 &lt; h \\le 3 \\\\ 120 + 25(h - 3), &amp; h &gt; 3 \\end{cases}$$<br>(a) Graph $C(h)$ for $0 &lt; h \\le 8$, showing the point where the two pieces meet. (b) A youth basketball league rents the gym for 5 hours. Use the graph or the function to find its cost, and explain which piece you used and why.</p>",
  "evidence": "A graph of both linear pieces on the correct domains with the junction point marked, the 5-hour cost, and a justification based on which domain contains 5",
  "reveals": "Whether the student respects domain restrictions on each piece — the defining skill of piecewise functions — instead of graphing two full lines."
 },
 {
  "id": "S1-10",
  "set": 1,
  "n": 10,
  "strand": "Functions",
  "topic": "Function transformations",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Function transformations — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$)",
  "html": "<p>A student designing a video game uses $f(x) = x^2$ for a character&#x27;s jump arc. For a harder level she uses $g(x) = -(x - 2)^2 + 5$. (a) Describe every transformation that changes the graph of $f$ into the graph of $g$. (b) State the vertex of $g$ and the range of $g$, and explain what the vertex means for the character&#x27;s jump.</p>\n<p>## Trigonometry, Proof, Circles &amp; Coordinate Geometry (Problems 11–15)</p>",
  "evidence": "A list of transformations (reflection, horizontal shift, vertical shift) tied to the numbers in the formula, the vertex, the range, and a contextual reading of the vertex",
  "reveals": "Whether the student connects each algebraic change to a geometric effect — especially the sign and direction of the horizontal shift, the most commonly reversed idea."
 },
 {
  "id": "S1-11",
  "set": 1,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena; interpret amplitude, period, and midline in context)",
  "html": "<p>A Ferris wheel at the school carnival has a radius of 10 meters. Riders board at a platform 1 meter above the ground, so the center of the wheel is 11 meters above the ground. The wheel completes one revolution every 40 seconds, and a rider starts at the lowest point. (a) Write a function $h(t)$ for the rider&#x27;s height above the ground, in meters, $t$ seconds after the ride starts. (b) Find the rider&#x27;s height after 10 seconds. (c) At what time does the rider first reach the top of the wheel?</p>",
  "evidence": "A cosine-based model with amplitude 10, midline 11, and period 40 identified, the height at $t = 10$, and the first time the height is maximal",
  "reveals": "Whether the student can translate physical features of a periodic situation (radius, center height, revolution time, starting position) into the parameters of a trigonometric model."
 },
 {
  "id": "S1-12",
  "set": 1,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angle theorem",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angle theorem — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>The school auditorium has a circular stage. Two spotlights are mounted at points $A$ and $B$ on the edge of the stage, and the stage manager sits at point $C$ on the opposite edge of the stage. The stage&#x27;s center is $O$, and the central angle $\\angle AOB$ measures $110^\\circ$. Using the inscribed angle theorem, find the measure of the angle $\\angle ACB$ formed by the two light beams at the manager&#x27;s seat, and explain the theorem in your own words.</p>",
  "evidence": "Identification of the intercepted arc, the inscribed angle measure in degrees, and a statement of the theorem relating it to the central angle",
  "reveals": "Whether the student can pick out the intercepted arc in a diagram-free description and apply the half-measure relationship with understanding."
 },
 {
  "id": "S1-13",
  "set": 1,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle; completing the square",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle; completing the square — NC.M3.G-GPE.1 (complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>On a coordinate map of the school grounds (each grid unit = 10 feet), the boundary of a circular courtyard is described by the equation $x^2 + y^2 - 6x + 4y - 12 = 0$. Find the center and radius of the courtyard by completing the square, and give the radius in feet.</p>",
  "evidence": "The equation rewritten in standard form by completing the square on both variables, the center as an ordered pair, and the radius converted from grid units to feet",
  "reveals": "Whether the student can run completing the square on two variables at once and keep track of the constant balance — and connect the result back to a physical size."
 },
 {
  "id": "S1-14",
  "set": 1,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the exterior angle theorem)",
  "html": "<p><strong>Proof.</strong> In triangle $ABC$, side $BC$ is extended past $C$ to a point $D$, forming the exterior angle $\\angle ACD$ at vertex $C$. Prove that the measure of the exterior angle equals the sum of the measures of the two non-adjacent interior angles: $m\\angle ACD = m\\angle A + m\\angle B$. Write a structured proof with a reason for each statement.</p>",
  "evidence": "A two-column or paragraph proof using the triangle angle sum and the supplementary (linear pair) relationship at point $C$, with a reason attached to every statement",
  "reveals": "Whether the student can chain two known facts through a shared angle to reach a conclusion — the essence of proof — rather than measuring or asserting."
 },
 {
  "id": "S1-15",
  "set": 1,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure — NC.M3.F-TF.1 (understand radian measure of an angle; the arc length on a unit circle subtended by an angle is its radian measure)",
  "html": "<p>The minute hand of the school clock tower is 1.2 meters long. (a) Through what angle, in radians, does the minute hand sweep in 25 minutes? (b) How far does the tip of the hand travel during those 25 minutes? Give exact answers in terms of $\\pi$ and decimal approximations.</p>\n<p>## Volume, Geometric Modeling &amp; Statistics (Problems 16–20)</p>",
  "evidence": "The fraction of a full revolution turned in 25 minutes, the angle in radians, and the arc length $s = r\\theta$ in meters",
  "reveals": "Whether the student understands a radian as a proportion of a full turn and can use it to find a distance traveled along a circle."
 },
 {
  "id": "S1-16",
  "set": 1,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>For field day, the school inflates a spherical beach ball with a diameter of 60 centimeters. Find the volume of air inside the ball, in cubic centimeters, and convert your answer to liters (1 liter = 1,000 cm³). Round to the nearest tenth of a liter.</p>",
  "evidence": "Halving the diameter to get the radius, the sphere volume computation in cm³, and the unit conversion to liters",
  "reveals": "Whether the student selects the correct formula and radius — the two classic sphere errors are using the diameter as the radius and dropping the $\\frac{4}{3}$ factor."
 },
 {
  "id": "S1-17",
  "set": 1,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>The gym floor where the school holds pep rallies is a rectangle 100 feet long and 60 feet wide. The fire code guideline for a standing assembly is 7.5 square feet of floor space per person. (a) What is the maximum number of people allowed on the gym floor under this guideline? (b) If 750 students attend a rally, what is the actual area per person, and what is the crowd density in people per square foot?</p>",
  "evidence": "The floor area, a division to get the capacity, and both density statements (area per person and people per unit area) with units",
  "reveals": "Whether the student can move fluently between a density and its reciprocal and use a density guideline as a constraint, not just a computation."
 },
 {
  "id": "S1-18",
  "set": 1,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a proportion and margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a proportion and margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>The student council wants to know whether a majority of the school&#x27;s 1,200 students support a longer lunch period. They survey a random sample of 150 students, and 96 say they support it. To build a margin of error, the council runs a simulation: 200 simulated random samples of size 150, drawn assuming the sample proportion is the true proportion, produced sample proportions with mean 0.64 and standard deviation 0.04. (a) Find the sample proportion. (b) Using the simulation, estimate the margin of error and give an interval for the true proportion of all students who support a longer lunch. (c) Can the council reasonably claim that a majority of all students support it? Explain using your interval.</p>",
  "evidence": "The sample proportion, a margin of error of about two simulation standard deviations, the resulting interval in percent, and a majority conclusion justified by the interval's position relative to 50%",
  "reveals": "Whether the student treats a margin of error as a measure of sampling variability from a simulation — and uses the interval, not the point estimate, to make a claim about the population."
 },
 {
  "id": "S1-19",
  "set": 1,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Surveys, experiments, and observational studies",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Surveys, experiments, and observational studies — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A school is studying three questions: (1) Do students prefer a later school start time? (2) Do students who choose to attend after-school tutoring earn higher grades than students who do not attend? (3) Does a new 20-minute daily review program cause higher quiz scores? For each question, name the appropriate type of study — sample survey, observational study, or experiment — and explain your choice. For the experiment, explain what role random assignment plays.</p>",
  "evidence": "A correct classification of all three studies with a reason for each, and an explanation that random assignment in the experiment balances other variables so a cause-and-effect conclusion is possible",
  "reveals": "Whether the student chooses a study design from the question being asked — preference, association, or causation — instead of treating all data collection as a \"survey.\""
 },
 {
  "id": "S1-20",
  "set": 1,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects)",
  "html": "<p>In a 3D art class, students carve three solids and slice each with a flat plane. (a) A cylinder is sliced parallel to its bases, and then sliced perpendicular to its bases. Name each cross section. (b) A cone is sliced parallel to its base, and then sliced by a plane through its apex perpendicular to the base. Name each cross section. (c) A sphere is sliced by a plane that does not pass through its center, and then by a plane that does. Name each cross section, and state which slice has the larger area and why.</p>",
  "evidence": "Six named cross-section shapes matched to the correct solids and cutting planes, plus a comparison of the two sphere slices with a reason",
  "reveals": "Whether the student can visualize how a plane meets a solid — spatial reasoning that underlies later work with volume and 3D modeling."
 },
 {
  "id": "S2-1",
  "set": 2,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of polynomial equations",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of polynomial equations — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>An environmental engineer models a stream sensor&#x27;s calibration error with the polynomial $P(x) = x^3 - 4x^2 + 9x - 36$, where $x$ is a dial setting. The settings where the error is exactly zero are the solutions of $P(x) = 0$. Find all solutions of $P(x) = 0$ — real and complex — state how the number of solutions relates to the Fundamental Theorem of Algebra, and identify which solutions could be actual dial settings.</p>",
  "evidence": "A factorization of the cubic (e.g., by grouping), all three solutions listed, a statement connecting the count of solutions to the degree, and the physically meaningful solution(s) identified",
  "reveals": "Whether the student expects and can find non-real roots of a real polynomial — and can separate algebraic completeness from physical meaning."
 },
 {
  "id": "S2-2",
  "set": 2,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Zeros and end behavior of polynomials",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros and end behavior of polynomials — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph; include end behavior)",
  "html": "<p>For a conservation drone flight, the drone&#x27;s height in feet relative to a hilltop, $t$ minutes after launch, is modeled (for planning purposes) by $P(t) = t(t + 2)(t - 4)$. (a) Find all zeros of $P$ and interpret the zero at $t = 4$ in context. (b) Describe the end behavior of the graph of $P$, and explain why one of the zeros is not a possible flight time.</p>",
  "evidence": "All three zeros from the factored form, an interpretation of the $t = 4$ zero, end behavior stated in both directions using the degree and leading coefficient, and the domain restriction $t \\ge 0$ applied to the negative zero",
  "reveals": "Whether the student links factored form, zeros, and end behavior into one picture of a polynomial — and filters the algebra through the context's domain."
 },
 {
  "id": "S2-3",
  "set": 2,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms; write $a(x)/b(x)$ in the form $q(x) + r(x)/b(x)$ using polynomial division)",
  "html": "<p>A trail crew&#x27;s total clearing time for a new path is modeled by $W(x) = x^3 - 3x^2 + 5x - 4$ worker-hours, where $x$ is the number of crew members. To study how the time splits across a two-member core team, the crew leader needs the expression $\\dfrac{W(x)}{x - 2}$ rewritten in the form $q(x) + \\dfrac{r}{x - 2}$. Carry out the division and write the result, identifying the quotient and the remainder.</p>",
  "evidence": "A polynomial division (long or synthetic) with the quotient and remainder identified, and the final expression written as quotient plus remainder over the divisor",
  "reveals": "Whether the student can execute polynomial division accurately and present the result in the quotient–remainder form the standard requires."
 },
 {
  "id": "S2-4",
  "set": 2,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Systems solved graphically; meaning of intersection points",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Systems solved graphically; meaning of intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find approximate solutions graphically)",
  "html": "<p>Two drones are surveying a forest. Drone A&#x27;s altitude in meters is $A(t) = 50 + 15t$ and Drone B&#x27;s altitude is $B(t) = 110 + 5t$, where $t$ is minutes after launch. (a) Graph both altitude functions on the same axes (or describe the graphs precisely). (b) Find the intersection point and explain why its $t$-coordinate is the solution of $A(t) = B(t)$. (c) State what the intersection means for the two drones.</p>",
  "evidence": "Both lines graphed or described with intercepts/slopes, the intersection point with units, an explanation tying the intersection to the equation $A(t) = B(t)$, and a contextual conclusion",
  "reveals": "Whether the student understands an intersection as a point belonging to both graphs — a shared time and altitude — rather than just an algebraic answer."
 },
 {
  "id": "S2-5",
  "set": 2,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Polynomial identities extended to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Polynomial identities extended to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers, e.g., factor a sum of squares)",
  "html": "<p>A vibration model in a wind-turbine design study produces the expressions $x^2 + 16$ and $4x^2 + 25$, neither of which factors over the real numbers. (a) Factor each expression over the complex numbers. (b) Verify your factorization of $4x^2 + 25$ by multiplying it back out.</p>\n<p>## Functions (Problems 6–10)</p>",
  "evidence": "Both factorizations using imaginary units, and a multiplication check that expands back to the original expression using $i^2 = -1$",
  "reveals": "Whether the student can extend the difference-of-squares identity to sums of squares by using $i$ — the core move of this standard."
 },
 {
  "id": "S2-6",
  "set": 2,
  "n": 6,
  "strand": "Functions",
  "topic": "Key features of functions in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of functions in context — NC.M3.F-IF.4 (interpret key features of graphs and tables — maximums, intervals of increase/decrease, average rate of change — in terms of the context)",
  "html": "<p>A weather station records the temperature on a spring day. Here $t$ is hours after 6:00 AM and $T(t)$ is the temperature in °F: $T(0) = 52$, $T(3) = 61$, $T(6) = 70$, $T(9) = 74$, $T(12) = 71$, $T(15) = 63$, $T(18) = 55$. (a) What is the maximum temperature, and at what clock time does it occur? (b) On what intervals is the temperature increasing and decreasing? (c) Find the average rate of change of the temperature from 6:00 AM to noon, with units, and interpret it.</p>",
  "evidence": "The maximum with its clock time, increasing/decreasing intervals in $t$ (or clock time), and an average rate of change in °F per hour with an interpretation",
  "reveals": "Whether the student reads a table as a story about a changing quantity — peaks, trends, and rates — rather than as isolated values."
 },
 {
  "id": "S2-7",
  "set": 2,
  "n": 7,
  "strand": "Functions",
  "topic": "Comparing functions in different representations",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing functions in different representations — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way — algebraically and in a table)",
  "html": "<p>A park plants two young trees. Tree A&#x27;s height in feet, $t$ years after planting, is $A(t) = 2.5t + 3$. Tree B&#x27;s height is recorded in a table: at $t = 0$, 4 ft; $t = 2$, 9 ft; $t = 4$, 14 ft; $t = 6$, 19 ft. (a) Which tree was taller at planting, and by how much? (b) Compare the two trees&#x27; growth rates. (c) Which tree is taller after 10 years, and by how much? (d) Will Tree A ever catch up to Tree B? Explain using the two growth rates.</p>",
  "evidence": "Initial values read from both representations, growth rates computed from both, heights at $t = 10$ for both trees, and a catch-up conclusion justified by the rates",
  "reveals": "Whether the student can extract the same features (starting value, rate) from an equation and from a table and reason about the comparison — the exact skill this standard names."
 },
 {
  "id": "S2-8",
  "set": 2,
  "n": 8,
  "strand": "Functions",
  "topic": "Building functions from a context",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building functions from a context — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities, determining an explicit expression or a recursive process from a context)",
  "html": "<p>A wildlife refuge counts a flock of geese that starts at 40 birds and grows by 15% each year, assuming the growth rate stays constant. (a) Write a recursive formula for the flock size $a_n$ after $n$ years. (b) Write an explicit formula. (c) Use the explicit formula to estimate the flock size after 3 years, and state any assumption your estimate depends on.</p>",
  "evidence": "A recursive rule with the initial value and the multiplier, the matching explicit formula, the year-3 estimate rounded sensibly for a count of birds, and the constant-rate assumption stated",
  "reveals": "Whether the student can translate a percent-growth description into both recursive and explicit forms and move between them."
 },
 {
  "id": "S2-9",
  "set": 2,
  "n": 9,
  "strand": "Functions",
  "topic": "Exponential growth eventually exceeds polynomial growth",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Exponential growth eventually exceeds polynomial growth — NC.M3.F-LE.3 (observe using graphs and tables that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial function)",
  "html": "<p>Two invasive plants are spreading across a meadow. Species P covers $P(t) = 3t^2 + 10$ square meters and Species E covers $E(t) = 5 \\cdot 2^t$ square meters, where $t$ is years after they were first measured. (a) Build a table of both coverages for $t = 0, 1, 2, 3, 4, 5$. (b) In which year does Species E first cover more ground than Species P? (c) Explain, using your table, why Species E&#x27;s coverage will keep pulling further ahead in later years.</p>",
  "evidence": "A two-row table of values, the crossover year identified from the table, and an explanation based on constant-ratio versus polynomial growth visible in the values",
  "reveals": "Whether the student can use tabular evidence to see the long-run dominance of exponential growth — an observation standard, so the table and the reasoning from it are the point."
 },
 {
  "id": "S2-10",
  "set": 2,
  "n": 10,
  "strand": "Functions",
  "topic": "Reading values of an inverse function from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading values of an inverse function from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>A greenhouse sensor gives the air temperature $f(t)$ in °F at $t$ hours after midnight: $f(0) = 48$, $f(2) = 52$, $f(4) = 59$, $f(6) = 66$, $f(8) = 71$, $f(10) = 69$. Assume $f$ has an inverse on these values. (a) Find $f(4)$ and state what it means. (b) Find $f^{-1}(66)$ and $f^{-1}(71)$, and state what each means. (c) A grower asks, &quot;When was it 59°F?&quot; Answer using inverse notation.</p>\n<p>## Trigonometry, Proof, Circles &amp; Coordinate Geometry (Problems 11–15)</p>",
  "evidence": "The forward value with its meaning (time in, temperature out), two inverse values with the inputs and outputs swapped and interpreted, and the grower's question answered in inverse notation",
  "reveals": "Whether the student truly grasps that an inverse swaps the roles of input and output — reading a table backward with the units reversed."
 },
 {
  "id": "S2-11",
  "set": 2,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit circle and extending trigonometric functions",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit circle and extending trigonometric functions — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise; explain signs and periodicity)",
  "html": "<p>A wind turbine&#x27;s blade tip is tracked by an angle $\\theta$ measured counterclockwise from the positive $x$-axis on a unit circle. At one moment, $\\theta = \\dfrac{5\\pi}{4}$. (a) In which quadrant does the blade tip lie, and what are the exact coordinates of the tip on the unit circle? (b) State $\\sin\\theta$ and $\\cos\\theta$, including their signs, and explain the signs using the quadrant. (c) The sensor later reports an angle of $\\dfrac{13\\pi}{6}$. Find an angle between $0$ and $2\\pi$ that gives the same blade position, and explain why the sine and cosine values are the same.</p>",
  "evidence": "The quadrant, exact unit-circle coordinates, sine and cosine with signs explained by quadrant, and the coterminal angle in $[0, 2\\pi)$ with a periodicity explanation",
  "reveals": "Whether the student anchors trig values to a position on the unit circle — including angles beyond one revolution — instead of memorizing a table."
 },
 {
  "id": "S2-12",
  "set": 2,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive, using similarity, that arc length is proportional to the radius; define radian measure; use the sector-area formula $A = \\frac{1}{2}r^2\\theta$)",
  "html": "<p>A curved section of a bike path is an arc of a circle with radius 25 meters, and it turns through a central angle of $72^\\circ$. The pie-shaped wedge of park lawn enclosed by the arc and two straight paths to the center is being reseeded. (a) Convert $72^\\circ$ to radians. (b) Find the length of the curved bike path. (c) Find the area of the wedge of lawn. Give exact answers in terms of $\\pi$ and decimal approximations.</p>",
  "evidence": "The angle in radians, the arc length $s = r\\theta$ in meters, and the sector area in square meters, each exact and approximated",
  "reveals": "Whether the student works in radians fluently for both arc length and sector area — the payoff of the radian definition."
 },
 {
  "id": "S2-13",
  "set": 2,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>The cross-section of a solar cooker is a parabola. Its focus is at $(0, 2)$ and its directrix is the line $y = -2$ (units in inches), with the vertex at the origin. (a) Derive the equation of the parabola. (b) The cooker&#x27;s rim passes through points where $x = 4$. Find the depth of the dish at $x = 4$.</p>",
  "evidence": "The equation derived from the equal-distance definition (or the $x^2 = 4py$ form with $p$ identified from the focus), and the $y$-value at $x = 4$ interpreted as the dish's depth in inches",
  "reveals": "Whether the student connects the geometric definition of a parabola to its algebraic equation — derivation, not recall."
 },
 {
  "id": "S2-14",
  "set": 2,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that opposite sides of a parallelogram are congruent)",
  "html": "<p><strong>Proof.</strong> Figure: quadrilateral $ABCD$ is a parallelogram, with vertices in order, and diagonal $\\overline{AC}$ drawn from $A$ to $C$. Prove that the opposite sides are congruent: $\\overline{AB} \\cong \\overline{CD}$ and $\\overline{AD} \\cong \\overline{CB}$. Write a structured proof with a reason for each statement. (You may use the fact that opposite sides of a parallelogram are parallel, by definition.)</p>",
  "evidence": "A two-column or paragraph proof using alternate interior angles from the parallel sides, the shared diagonal, ASA triangle congruence, and CPCTC, with a reason for every statement",
  "reveals": "Whether the student can route a proof through a diagonal — converting a quadrilateral claim into a triangle congruence — the standard technique this theorem teaches."
 },
 {
  "id": "S2-15",
  "set": 2,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena; interpret amplitude, period, and midline in context)",
  "html": "<p>On a summer day, the temperature in a mountain town is modeled by $T(t) = 70 + 8\\sin\\left(\\dfrac{\\pi}{12}(t - 9)\\right)$, where $t$ is hours after midnight and $T$ is in °F. (a) Identify the midline, amplitude, and period, and interpret each in context. (b) At what time is the temperature at its daily maximum, and what is that maximum? (c) Find the temperature at 6:00 PM, to the nearest tenth of a degree.</p>\n<p>## Volume, Geometric Modeling &amp; Statistics (Problems 16–20)</p>",
  "evidence": "Midline, amplitude, and period each named and interpreted (average temperature, swing, 24-hour cycle), the time and value of the maximum, and $T(18)$ computed in °F",
  "reveals": "Whether the student reads the parameters of a given sinusoidal model as physical facts about the day — and can evaluate the model at a specific time."
 },
 {
  "id": "S2-16",
  "set": 2,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A landscaping crew dumps a load of mulch into a conical pile with a radius of 3 feet and a height of 4 feet. (a) Find the volume of the pile in cubic feet. (b) Mulch is ordered by the cubic yard (1 yd³ = 27 ft³). How many cubic yards is the pile, to the nearest hundredth? (c) If the crew needs this same amount again, is ordering 1.5 cubic yards enough? Justify with your numbers.</p>",
  "evidence": "The cone volume computation in ft³, the conversion to yd³, and an order decision justified by comparing the converted volume with 1.5 yd³",
  "reveals": "Whether the student handles the $\\frac{1}{3}$ factor in the cone formula and carries a volume through a unit conversion into a practical decision."
 },
 {
  "id": "S2-17",
  "set": 2,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling objects with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling objects with geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A farm&#x27;s grain silo is a cylinder with radius 3 meters and height 8 meters, topped by a hemisphere of the same radius. Model the silo as these two solids and find the total volume of grain the silo can hold, in cubic meters. Give an exact answer in terms of $\\pi$ and a decimal approximation.</p>",
  "evidence": "The silo decomposed into a cylinder and a hemisphere, both volumes computed with $r = 3$, and the total in m³ (exact and approximate)",
  "reveals": "Whether the student can decompose a real object into standard solids and assemble the total — the modeling move this standard is about."
 },
 {
  "id": "S2-18",
  "set": 2,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing treatments from a randomized experiment",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing treatments from a randomized experiment — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>An agricultural researcher tests two seed treatments for tomato plants. Forty identical garden plots are randomly assigned, 20 to Treatment A and 20 to Treatment B. After one season, the mean plant height is 18.2 cm for Treatment A and 15.6 cm for Treatment B, an observed difference of 2.6 cm. To judge significance, the researcher runs a simulation: in 200 random reassignments of the results to the two treatments (assuming no real treatment effect), a difference of means of 2.6 cm or larger occurred only 4 times. (a) State the observed difference of means. (b) What proportion of the simulations produced a difference at least as large as the observed one? (c) Is the difference statistically significant? Explain what the simulation result means, and state the conclusion about the treatments.</p>",
  "evidence": "The observed difference with units, the simulation proportion (4 out of 200) as a percent, and a significance conclusion that ties the rarity under \"no effect\" to evidence for a real treatment difference",
  "reveals": "Whether the student understands significance as \"too rare to be plausible by chance alone,\" judged against a simulation distribution — not as a property of the raw difference."
 },
 {
  "id": "S2-19",
  "set": 2,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>A local news site posts a story headlined &quot;68% of residents support the new riverfront park!&quot; The figure comes from a poll on the news site&#x27;s own webpage: 214 readers chose to click and answer, and the story reports a &quot;margin of error of ±3 percentage points.&quot; Write an evaluation of this report: identify at least three problems with using this poll to describe all residents, and explain specifically why the stated margin of error is not trustworthy here.</p>",
  "evidence": "A written critique naming the voluntary (self-selected) sample, the mismatch between the sample (site readers who clicked) and the population (all residents), and the fact that margin-of-error formulas assume random sampling — plus at least one further issue (e.g., wording, nonresponse, or sample representativeness)",
  "reveals": "Whether the student interrogates how data were collected before accepting a headline number — the critical-consumption skill this standard targets."
 },
 {
  "id": "S2-20",
  "set": 2,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Geometric design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Geometric design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including maximizing area under constraints)",
  "html": "<p>A community garden has 60 feet of fencing to enclose a rectangular plot. One long side of the rectangle will border an existing barn wall, so fencing is needed on only three sides. (a) Let $x$ be the length, in feet, of each side perpendicular to the barn. Write the fenced length along the barn and the plot&#x27;s area $A(x)$ in terms of $x$. (b) Find the dimensions that maximize the area, and the maximum area. Show the reasoning (e.g., vertex of a parabola) behind your answer.</p>",
  "evidence": "The constraint used to express the barn side as $60 - 2x$, the area as a quadratic in $x$, the vertex found and interpreted as the optimal dimensions, and the maximum area in square feet",
  "reveals": "Whether the student can turn a physical constraint into a one-variable model and optimize it — design reasoning, not just formula use."
 },
 {
  "id": "S3-1",
  "set": 3,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Quotients of complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Quotients of complex numbers — NC.M3.N-CN.3 (find the conjugate of a complex number; use conjugates to find quotients of complex numbers)",
  "html": "<p>A freelance sound engineer models the load of one audio processor as the complex number $8 + 6i$ ohms and the load of a second processor as $1 + i$ ohms. The combined calibration value is the quotient $\\dfrac{8 + 6i}{1 + i}$. Find the calibration value, written in $a + bi$ form, and explain what the conjugate of the denominator has to do with the computation.</p>",
  "evidence": "A computation that multiplies numerator and denominator by the conjugate $1 - i$, simplifies using $i^2 = -1$, and ends with the quotient in $a + bi$ form, plus a sentence explaining why the conjugate makes the denominator real",
  "reveals": "Whether the student can carry out complex division procedurally and understands *why* the conjugate works, not just that it does."
 },
 {
  "id": "S3-2",
  "set": 3,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Interpreting expressions in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting expressions in context — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression such as terms, factors, and coefficients)",
  "html": "<p>A mobile car-detailing business models its weekly profit, in dollars, by $P(x) = -3x^2 + 210x - 1200$, where $x$ is the number of cars detailed in a week. (a) Interpret the meaning of the term $210x$ in this context. (b) Interpret the constant $-1200$. (c) The owner says the $-3x^2$ term exists because after about 35 cars she must pay overtime rates, so each additional car adds less profit than the one before. Explain, using the structure of the expression, why a negative quadratic term (rather than a negative linear term) captures that behavior.</p>",
  "evidence": "Three context interpretations tied to the specific parts of the expression, and a written explanation contrasting a term that grows quadratically with one that grows linearly",
  "reveals": "Whether the student reads an expression as a story about a business — revenue per car, fixed weekly costs, and diminishing returns — rather than as symbols to manipulate."
 },
 {
  "id": "S3-3",
  "set": 3,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Radical equations and extraneous solutions",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Radical equations and extraneous solutions — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>A bakery is installing a diagonal brace under a display shelf. The brace length $x$, in inches, must satisfy the equation $\\sqrt{x + 7} = x - 5$, which came from matching the brace to a right-triangle layout on the wall. Solve the equation algebraically, check every candidate solution in the original equation, and state which value(s) can actually be used for the brace and why the other must be rejected.</p>",
  "evidence": "Squaring both sides, solving the resulting quadratic, a substitution check of both candidates in the original equation, and a conclusion identifying the extraneous solution with a reason",
  "reveals": "Whether the student treats checking as part of solving a radical equation and can explain that squaring can introduce solutions the original equation never had."
 },
 {
  "id": "S3-4",
  "set": 3,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Multiplying and dividing rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Multiplying and dividing rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to the rational numbers)",
  "html": "<p>A catering company uses the factor $\\dfrac{x^2 - 9}{x^2 + 5x} \\div \\dfrac{x - 3}{x^2 + 10x + 25}$ to adjust a recipe&#x27;s yield factor, where $x$ is a positive scaling number greater than 3. Simplify the expression completely, and state the values of $x$ that would have been excluded from the domain of the original expression.</p>",
  "evidence": "Factoring of all polynomials, rewriting division as multiplication by the reciprocal, canceling common factors, a simplified expression, and a list of excluded values from the original denominators and the divisor",
  "reveals": "Whether the student can run the full rational-expression algorithm — factor, flip, cancel — while keeping track of domain restrictions that disappear from the simplified form."
 },
 {
  "id": "S3-5",
  "set": 3,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A local credit union pays simple interest on a savings certificate using $A = P(1 + rt)$, where $A$ is the final amount, $P$ is the principal, $r$ is the annual interest rate (as a decimal), and $t$ is the time in years. (a) Rearrange the formula to solve for $r$. (b) A customer deposited $\\$5{,}000$ and had $\\$5{,}400$ after 2 years. Use your rearranged formula to find the annual interest rate, expressed as a percent.</p>",
  "evidence": "A step-by-step isolation of $r$ in the formula, then a substitution with units giving the rate as a percent, interpreted as the certificate's annual rate",
  "reveals": "Whether the student can treat a literal equation as an equation to be solved — isolating a variable that appears inside a product — and then use the rearranged form purposefully."
 },
 {
  "id": "S3-6",
  "set": 3,
  "n": 6,
  "strand": "Functions",
  "topic": "Domain and range from a graph in context",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Domain and range from a graph in context — NC.M3.F-IF.1 (understand that a function assigns to each input exactly one output; determine domain and range from a graph and relate them to the context)",
  "html": "<p>The graph of $C(t)$ shows the number of customers inside a bakery $t$ hours after it opens at 6:00 AM. The graph starts at $(0, 5)$, rises steadily to a peak of $(3, 48)$, falls to $(6, 30)$ at noon, rises slightly to $(7, 36)$, and then falls to $(8, 0)$ when the bakery closes at 2:00 PM. (a) State the domain and range of $C$ as they relate to this situation. (b) During which interval is the bakery busiest, and how does the graph show it? (c) Explain why $C$ is a function of $t$.</p>",
  "evidence": "Domain and range written in interval or inequality notation and translated back into clock times and customer counts, an interval answer for the busiest period, and a definition-based justification that $C$ is a function",
  "reveals": "Whether the student connects the abstract domain/range of a graph to the real hours and headcounts it describes, and can ground \"function\" in the one-output-per-input definition."
 },
 {
  "id": "S3-7",
  "set": 3,
  "n": 7,
  "strand": "Functions",
  "topic": "Domain constraints represented by inequalities",
  "standards": [
   "NC.M3.F-IF.5",
   "NC.M3.A-CED.3"
  ],
  "standardsDetail": "Domain constraints represented by inequalities — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes), NC.M3.A-CED.3 (represent constraints by equations or inequalities and interpret solutions as viable or nonviable options in a modeling context)",
  "html": "<p>A school concession stand sells hot dogs ($x$) and pretzels ($y$) at a Friday game. The stand can prepare at most 240 items total. Each hot dog takes 3 minutes of grill time and each pretzel takes 2 minutes, and the grill crew has at most 600 minutes available. Hot dogs and pretzels cannot be negative in number. (a) Write a system of inequalities describing all feasible $(x, y)$ combinations. (b) The manager proposes preparing 100 hot dogs and 140 pretzels. Determine whether this plan is viable, and justify your answer using your system. (c) Explain what the domain restrictions $x \\ge 0$ and $y \\ge 0$ mean in this context and why they belong in the model even though nobody would &quot;prepare a negative hot dog.&quot;</p>",
  "evidence": "A system of four inequalities, a substitution test of the proposed plan against every constraint, and a written interpretation of the nonnegativity constraints as domain restrictions of the model",
  "reveals": "Whether the student can build a feasible-region model from verbal constraints and use it to judge a real proposal, rather than solving inequalities in the abstract."
 },
 {
  "id": "S3-8",
  "set": 3,
  "n": 8,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to build a function that models a context)",
  "html": "<p>A freelance courier charges clients using two pieces: mileage pay modeled by $R(x) = 2.50x$ dollars for $x$ miles driven, and expenses modeled by $C(x) = 0.60x + 12$ dollars, where the $\\$12$ is a fixed daily dispatch fee. (a) Build a profit function $P(x) = R(x) - C(x)$ and simplify it. (b) Find the courier&#x27;s profit on a day with 40 miles of deliveries. (c) Interpret the coefficient of $x$ and the constant term in your simplified profit function.</p>",
  "evidence": "A simplified profit function built by subtracting the two given functions, an evaluation at $x = 40$ with units, and contextual interpretations of both parameters of the result",
  "reveals": "Whether the student sees a new function as a combination of meaningful parts — net per-mile earnings after per-mile costs, minus the fixed fee — and not just an algebra exercise."
 },
 {
  "id": "S3-9",
  "set": 3,
  "n": 9,
  "strand": "Functions",
  "topic": "Verifying inverse functions by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverse functions by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A print shop computes the final price of a poster order with $f(x) = 2x + 6$, where $x$ is the base printing cost in dollars and $f(x)$ is the final price after a framing markup and a $\\$6$ handling fee. The bookkeeper claims the function $g(x) = \\dfrac{x - 6}{2}$ undoes $f$, recovering the base cost from a final price. Verify the bookkeeper&#x27;s claim by computing both $f(g(x))$ and $g(f(x))$, and explain why both compositions must be checked.</p>",
  "evidence": "Both compositions computed and simplified to $x$, and an explanation that one composition alone does not confirm the functions undo each other on both sides",
  "reveals": "Whether the student understands inverse as a two-way undoing relationship confirmed by composition, rather than a procedure of swapping $x$ and $y$."
 },
 {
  "id": "S3-10",
  "set": 3,
  "n": 10,
  "strand": "Functions",
  "topic": "Graphing exponential functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing exponential functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts and end behavior)",
  "html": "<p>A neighborhood bakery&#x27;s social media following is modeled by $F(t) = 300(2)^t$, where $t$ is months since the account was created and $F(t)$ is the number of followers. (a) Sketch the graph of $F$, labeling the $F$-intercept and any asymptote. (b) State the end behavior of the graph and explain what it means for the bakery. (c) A second account&#x27;s following is modeled by $G(t) = 300\\left(\\tfrac{1}{2}\\right)^t$. Without graphing it, describe how the graph of $G$ differs from the graph of $F$, including its end behavior and asymptote.</p>",
  "evidence": "A labeled sketch with intercept $(0, 300)$ and horizontal asymptote $F = 0$, an end-behavior statement interpreted in context, and a comparison describing $G$ as decreasing toward the same asymptote",
  "reveals": "Whether the student links the base of an exponential (greater than 1 vs. between 0 and 1) to the shape, intercept, and long-run behavior of its graph."
 },
 {
  "id": "S3-11",
  "set": 3,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radius perpendicular to a chord",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Radius perpendicular to a chord — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; a radius perpendicular to a chord bisects the chord)",
  "html": "<p>A round bakery sign has radius 13 inches. A straight metal support bar is mounted across the back of the sign as a chord, and the perpendicular distance from the center of the sign to the bar is 5 inches. Using the theorem about a radius drawn perpendicular to a chord, find the exact length of the support bar, and justify each step with the relevant circle relationships.</p>",
  "evidence": "A labeled diagram, a statement that the perpendicular from the center bisects the chord, a right-triangle computation (Pythagorean theorem) giving half the chord, and the full chord length with units",
  "reveals": "Whether the student can assemble a circle theorem and the Pythagorean theorem into one argument, recognizing the right triangle hidden in the figure."
 },
 {
  "id": "S3-12",
  "set": 3,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length on the unit circle",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length on the unit circle — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle)",
  "html": "<p>A jewelry store&#x27;s rotating display is modeled with a unit circle (radius 1 foot) centered at the display&#x27;s motor. A necklace starts at the point $(1, 0)$ and rotates counterclockwise through an angle of $\\dfrac{7\\pi}{4}$ radians. (a) Explain why the necklace travels along an arc whose length is exactly $\\dfrac{7\\pi}{4}$ feet. (b) Give the arc length as a decimal approximation. (c) The store&#x27;s catalog describes the same rotation as &quot;one full turn minus a quarter of a right angle.&quot; Verify that description using radian measure.</p>",
  "evidence": "An explanation tying radian measure to unit-circle arc length by definition, a decimal approximation of $\\frac{7\\pi}{4}$, and a verification converting $2\\pi - \\frac{\\pi}{4}$ and comparing",
  "reveals": "Whether the student understands a radian as a length measurement on the unit circle — the definition itself — rather than as a conversion factor to memorize."
 },
 {
  "id": "S3-13",
  "set": 3,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Angle measures in inscribed quadrilaterals",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Angle measures in inscribed quadrilaterals — NC.M3.G-C.3 (construct inscribed and circumscribed circles of a triangle; use properties of inscribed quadrilaterals)",
  "html": "<p>A stained-glass artist is building a quadrilateral panel inscribed in a circular frame for a shop window. Two opposite angles of the quadrilateral are $A = (3x + 10)^\\circ$ and $C = (5x - 30)^\\circ$. (a) Find $x$. (b) Find the measures of angles $A$ and $C$. (c) State the theorem that makes your equation in part (a) correct, and explain in one or two sentences why it holds for any quadrilateral inscribed in a circle.</p>",
  "evidence": "A supplementary-angle equation, its solution, both angle measures with degree units, and a theorem statement with a brief justification referencing inscribed angles intercepting arcs that together make the whole circle",
  "reveals": "Whether the student can apply the inscribed-quadrilateral property and also trace it back to the inscribed angle theorem, showing the theorems form a connected system."
 },
 {
  "id": "S3-14",
  "set": 3,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving the equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Deriving the equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean theorem)",
  "html": "<p>A bike courier company guarantees delivery within a circular zone centered at its depot. On the company&#x27;s coordinate map (units in miles), the depot is at $(2, -3)$ and the guaranteed zone extends 6 miles in every direction. (a) Use the distance formula (Pythagorean theorem) to derive the equation of the circle that bounds the delivery zone: start from a general point $(x, y)$ on the boundary. (b) A customer at $(6, 1)$ requests a delivery. Determine whether the customer is inside the guaranteed zone, and justify your answer with the equation.</p>",
  "evidence": "A derivation that sets the distance from $(x, y)$ to $(2, -3)$ equal to 6 and squares both sides to get the standard-form equation, followed by a substitution test of the customer's point with a conclusion in context",
  "reveals": "Whether the student sees the circle equation as the Pythagorean theorem in disguise — a distance condition — and can use it to make a yes/no service decision."
 },
 {
  "id": "S3-15",
  "set": 3,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the triangle midsegment theorem)",
  "html": "<p>A landscape architect is designing a walkway across a triangular plaza with vertices at $A(0, 0)$, $B(8, 0)$, and $C(2, 6)$ (coordinates in feet). The walkway will join the midpoint of side $AB$ to the midpoint of side $AC$. Before ordering materials, the architect wants proof of two claims about this walkway: it will be parallel to side $BC$, and it will be exactly half as long as side $BC$. Write a coordinate proof of both claims, with a reason given for each step.</p>",
  "evidence": "A structured coordinate proof: midpoint computations, slopes compared to establish parallelism, distances compared to establish the half-length relationship, each step justified (midpoint formula, slope criterion for parallel lines, distance formula)",
  "reveals": "Whether the student can carry a proof from givens to conclusion with every step warranted, using coordinates as the proof medium — the midsegment theorem demonstrated, not merely quoted."
 },
 {
  "id": "S3-16",
  "set": 3,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a pyramid",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a pyramid — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A candle shop sells a pyramid-shaped candle with a square base 6 inches by 6 inches and a height of 4 inches. (a) Find the volume of wax in one candle. (b) The shop pours candles from a melting pot holding 480 cubic inches of wax. How many of these candles can be poured from one full pot, assuming no wax is wasted? (c) Explain where the factor $\\tfrac{1}{3}$ in the pyramid volume formula &quot;comes from&quot; in relation to a prism with the same base and height.</p>",
  "evidence": "A volume computation with cubic units, a division interpreted as a whole number of candles, and a comparison statement relating the pyramid's volume to the corresponding prism's volume",
  "reveals": "Whether the student can use the pyramid formula accurately and understands it as a relationship between two solids, including interpreting a quotient as a count of physical objects."
 },
 {
  "id": "S3-17",
  "set": 3,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A local foundry casts a solid metal block with a volume of 250 cubic centimeters and a mass of 1,925 grams. (a) Find the density of the metal in grams per cubic centimeter. (b) The foundry&#x27;s chart lists aluminum at $2.7\\ \\text{g/cm}^3$, iron at $7.9\\ \\text{g/cm}^3$, and lead at $11.3\\ \\text{g/cm}^3$. Which listed metal is the block most likely made of, and what assumption are you making when you answer? (c) A second block of the same metal has a mass of 3,850 grams. Predict its volume.</p>",
  "evidence": "A density computation with units $\\text{g/cm}^3$, a comparison against the chart with the closest match named and the uniformity assumption stated, and a proportional prediction of the second block's volume",
  "reveals": "Whether the student treats density as a rate that characterizes a material — usable in both directions, to identify and to predict — rather than a one-off division."
 },
 {
  "id": "S3-18",
  "set": 3,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Inference from a random sample",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Inference from a random sample — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population; recognize the purposes of sample surveys, experiments, and observational studies)",
  "html": "<p>A town council wants to know what proportion of all town residents support building a new farmers market. A polling firm randomly selects 150 residents from the town&#x27;s utility-account list, and 96 of them say they support the market. (a) Identify the population and the sample in this study. (b) Explain why the random selection matters: what would go wrong with the inference if the firm instead surveyed 150 people at the existing Saturday market? (c) The firm reports, &quot;We estimate that about 64% of residents support the market.&quot; Explain what makes this an <em>inference</em> rather than a direct measurement, and name the type of study (survey, experiment, or observational study) being used.</p>",
  "evidence": "Correct population/sample identification, a bias explanation for the convenience-sample alternative tied to who would be overrepresented, and a statement distinguishing the sample statistic from the population parameter, with the study type named",
  "reveals": "Whether the student understands that a sample statistic only speaks for a population when the sample represents it — the foundational idea of statistical inference."
 },
 {
  "id": "S3-19",
  "set": 3,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean with margin of error via simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean with margin of error via simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A coffee shop owner wants to estimate the mean wait time for all customers during the morning rush. She times a random sample of 40 customers and finds a sample mean wait of 4.6 minutes. To build a margin of error, she runs a simulation: 200 random samples of size 40 are drawn from a model of the rush-hour population, and the 200 sample means have a standard deviation of 0.5 minutes. (a) Using the rule that the margin of error is about two standard deviations of the simulated sample means, compute the margin of error. (b) Give the interval of plausible values for the true mean wait time. (c) A sign in the shop claims &quot;average wait under 4 minutes.&quot; Based on your interval, is that claim plausible? Explain.</p>",
  "evidence": "A margin-of-error computation from the simulation's standard deviation, an interval centered at the sample mean with minute units, and a plausibility judgment comparing the claim against the whole interval",
  "reveals": "Whether the student can turn simulation output into an honest statement of uncertainty and use the interval — not the single sample value — to evaluate a claim."
 },
 {
  "id": "S3-20",
  "set": 3,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Solids generated by rotating two-dimensional shapes",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Solids generated by rotating two-dimensional shapes — NC.M3.G-GMD.4 (identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>A machine shop produces a cylindrical roller by rotating a rectangular steel blank 10 cm long and 4 cm wide about its long side (the side of length 10 cm) on a lathe. (a) Identify the three-dimensional solid generated by this rotation. (b) State the solid&#x27;s radius and height, explaining which dimension of the rectangle produces each. (c) A trainee claims rotating the same rectangle about its short side would produce &quot;the same cylinder, just lying differently.&quot; Explain why the trainee is wrong, and state the radius and height of the solid that rotation would actually generate.</p>",
  "evidence": "The solid named (cylinder), radius and height correctly assigned from the rectangle's dimensions with reasoning about the axis of rotation, and a correction of the trainee's claim with the swapped dimensions identified",
  "reveals": "Whether the student can mentally sweep a 2D shape through space and track which dimension becomes the radius — genuine 2D-to-3D spatial reasoning, including catching a plausible misconception."
 },
 {
  "id": "S4-1",
  "set": 4,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Polynomial identities extended to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Polynomial identities extended to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers; e.g., rewrite $x^2 + 49$ as $(x + 7i)(x - 7i)$)",
  "html": "<p>A biomedical engineer analyzing a hearing-aid signal filter encounters the polynomial $x^2 + 49$, which does not factor over the real numbers. (a) Rewrite $x^2 + 49$ as a product of two linear factors involving the imaginary unit $i$. (b) Verify your factorization by expanding it. (c) Explain, in terms of the graph of $y = x^2 + 49$, why no real factorization was possible.</p>",
  "evidence": "A factorization using $7i$ and $-7i$, an expansion check that recovers $x^2 + 49$ using $i^2 = -1$, and a graphical explanation referencing the absence of $x$-intercepts",
  "reveals": "Whether the student can extend a familiar identity (difference of squares) into the complex numbers and connect \"no real roots\" algebraically to \"no $x$-intercepts\" graphically."
 },
 {
  "id": "S4-2",
  "set": 4,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Zeros, multiplicity, and graphs of polynomials",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros, multiplicity, and graphs of polynomials — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available and use the zeros to construct a rough graph of the function)",
  "html": "<p>A health app models its net change in active users, in hundreds of users per month, by $P(x) = (x - 2)^2(x + 5)$, where $x$ is months after a new feature launched. (a) Find all zeros of $P$ and state the multiplicity of each. (b) Describe the end behavior of the graph. (c) Sketch the graph, showing clearly what happens at each zero — whether the graph crosses or touches the $x$-axis — and justify those behaviors using multiplicity.</p>",
  "evidence": "Zeros with multiplicities, an end-behavior statement based on degree and leading coefficient, and a sketch whose crossing/touching behavior at each zero matches its multiplicity, with justification",
  "reveals": "Whether the student reads a factored polynomial as a graph — multiplicity controlling the local shape at each intercept — rather than treating zeros as a list of numbers."
 },
 {
  "id": "S4-3",
  "set": 4,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Meaning of intersection points of two models",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Meaning of intersection points of two models — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find the solutions approximately or exactly)",
  "html": "<p>Two mobile vaccination sites report their cumulative doses given, $t$ days after a campaign begins. Site A: $A(t) = 40t + 200$. Site B: $B(t) = 25t + 500$. (a) Find the point where the two graphs intersect. (b) Explain what the intersection point means for the two sites — both coordinates, in context. (c) A coordinator says, &quot;The intersection is where the sites are giving doses at the same rate.&quot; Correct that statement, and explain what feature of the graphs <em>does</em> represent each site&#x27;s rate.</p>",
  "evidence": "An intersection found by solving $A(t) = B(t)$, a two-coordinate interpretation in context (day and cumulative doses), and a correction distinguishing equal *totals* (intersection) from equal *rates* (slopes)",
  "reveals": "Whether the student distinguishes accumulated quantity from rate — the intersection of cumulative models is about totals catching up, not speeds matching."
 },
 {
  "id": "S4-4",
  "set": 4,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms; write $a(x)/b(x)$ in the form $q(x) + r(x)/b(x)$ using inspection, long division, or technology)",
  "html": "<p>A clinic&#x27;s average supply cost per patient, in dollars, is modeled by $\\dfrac{3x^2 + 5x - 7}{x + 2}$, where $x$ is the number of patients seen in a session (in hundreds). Rewrite the expression in the form $q(x) + \\dfrac{r}{x + 2}$ using polynomial division, and interpret the remainder in the context of the model.</p>",
  "evidence": "A complete polynomial long division, the rewritten form with quotient and remainder identified, and a contextual interpretation of the remainder term",
  "reveals": "Whether the student can execute polynomial division accurately and sees the rewritten form as the same cost model reorganized, with the remainder carrying meaning rather than being discarded."
 },
 {
  "id": "S4-5",
  "set": 4,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Multiplying complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Multiplying complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$ to simplify)",
  "html": "<p>In the design of a medical imaging device, two signal stages are modeled by the complex numbers $3 + 2i$ and $1 - 4i$, and the combined stage value is their product. Find the product in $a + bi$ form, showing each use of $i^2 = -1$.</p>",
  "evidence": "A distribution (FOIL) computation in which the $i^2$ term is converted to a real number, ending in $a + bi$ form",
  "reveals": "Whether the student handles complex multiplication fluently, including the sign change that $i^2 = -1$ produces — the step where most errors occur."
 },
 {
  "id": "S4-6",
  "set": 4,
  "n": 6,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm; evaluate logarithms using technology; solve exponential equations)",
  "html": "<p>A hospital laboratory grows a bacterial culture that starts with 500 colonies and grows according to $N(t) = 500(1.8)^t$, where $t$ is hours since the culture was started. Technicians must run a test when the culture reaches 10,000 colonies. (a) Write the equation that determines when the test must be run. (b) Solve the equation by expressing the answer as a logarithm, then evaluate it with technology. (c) State the time in hours, rounded to the nearest tenth, and explain why an exact logarithmic form is still useful even though the decimal is what the technicians will use.</p>",
  "evidence": "The equation $500(1.8)^t = 10000$, isolation of the exponential, a logarithmic exact answer, a decimal evaluation, and a brief comment on exact vs. approximate forms",
  "reveals": "Whether the student understands a logarithm as the tool that \"undoes\" an exponential to free an exponent, and can move between exact and usable forms of an answer."
 },
 {
  "id": "S4-7",
  "set": 4,
  "n": 7,
  "strand": "Functions",
  "topic": "Function transformations including $f(kx)$",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Function transformations including $f(kx)$ — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $k f(x)$, $f(kx)$, and $f(x + k)$ for specific values of $k$)",
  "html": "<p>A physical therapist models a patient&#x27;s stretching reach with $f(x) = x^2$, where $x$ is weeks of therapy and $f(x)$ is reach in centimeters beyond the starting point. A new exercise program changes the model to $g(x) = f(2x) + 3$. (a) Write $g(x)$ as an explicit expression. (b) Describe both transformations that turn the graph of $f$ into the graph of $g$, being careful about what $f(2x)$ does to the graph. (c) Compute $g(2)$ and interpret it in context.</p>",
  "evidence": "The explicit $g(x) = 4x^2 + 3$, transformation descriptions (horizontal compression by a factor of $\\tfrac12$; vertical shift up 3), an evaluation $g(2)$ with units, and a contextual interpretation",
  "reveals": "Whether the student has mastered the counterintuitive inside transformation — $f(2x)$ compresses horizontally — rather than guessing \"stretch by 2.\""
 },
 {
  "id": "S4-8",
  "set": 4,
  "n": 8,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when suitable factorizations are available and showing end behavior)",
  "html": "<p>A clinic models the net change in patients waiting, over the course of a day, by $f(x) = (x + 1)(x - 3)(x - 4)$, where $x$ is hours after opening. (a) Find the zeros of $f$ and the $y$-intercept. (b) State the end behavior. (c) Sketch the graph of $f$, placing the intercepts correctly and showing the correct end behavior and the sign of $f$ on each interval between zeros.</p>",
  "evidence": "Zeros $-1, 3, 4$ and intercept $12$ identified, end behavior from the cubic's leading term, and a sketch consistent with the sign pattern on the four intervals determined by the zeros",
  "reveals": "Whether the student can assemble intercepts, end behavior, and sign analysis into one coherent graph of a cubic given in factored form."
 },
 {
  "id": "S4-9",
  "set": 4,
  "n": 9,
  "strand": "Functions",
  "topic": "Inverses of nonlinear functions with restricted domains",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Inverses of nonlinear functions with restricted domains — NC.M3.F-BF.4a (find inverse functions; solve an equation of the form $f(x) = c$ for a simple function that has an inverse and write an expression for the inverse)",
  "html": "<p>A lab technician uses the function $f(x) = x^2 + 2$ for $x \\ge 0$, where $x$ is a measured sample width in millimeters and $f(x)$ is the volume of reagent, in milliliters, the protocol requires. (a) Find the inverse function $f^{-1}$, stating its domain. (b) Explain why the restriction $x \\ge 0$ on $f$ is necessary for an inverse to exist. (c) A protocol calls for 11 mL of reagent. Use the inverse to find the sample width that requires exactly that amount.</p>",
  "evidence": "The inverse $f^{-1}(x) = \\sqrt{x - 2}$ with domain $x \\ge 2$, an explanation referencing one-to-oneness (horizontal line test) on the restricted domain, and an inverse evaluation answering the protocol question with units",
  "reveals": "Whether the student understands that restricting a domain is what *makes* a non-one-to-one function invertible, and can run the inverse in the direction a real question demands."
 },
 {
  "id": "S4-10",
  "set": 4,
  "n": 10,
  "strand": "Functions",
  "topic": "Interpreting function notation in context",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Interpreting function notation in context — NC.M3.F-IF.2 (use function notation, evaluate functions for inputs in their domains, and interpret statements that use function notation in terms of a context)",
  "html": "<p>A patient&#x27;s temperature, in degrees Fahrenheit, $h$ hours after the onset of a fever is modeled by $T(h) = -0.2h^2 + 1.2h + 98.6$. (a) Compute $T(3)$. (b) Write a complete sentence interpreting the statement &quot;$T(3) = 100.4$&quot; for the patient&#x27;s care team: what does the input represent, what does the output represent, and what are the units? (c) The care team wants to know when the temperature was $98.6^\\circ$F at the start. Identify the feature of the formula that answers this without any computation, and name it.</p>",
  "evidence": "A correct evaluation $T(3) = 100.4$, a full contextual interpretation of $T(3) = 100.4$ with units on both input and output, and identification of the constant term as the initial value ($h = 0$)",
  "reveals": "Whether function notation is a language the student can translate both ways — computing a value and then saying precisely what the equation $T(3) = 100.4$ claims about a real patient."
 },
 {
  "id": "S4-11",
  "set": 4,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline; interpret the parameters in context)",
  "html": "<p>A resting patient&#x27;s breathing is modeled by $V(t) = 2.4 + 0.5\\sin\\left(\\dfrac{2\\pi}{5}t\\right)$, where $t$ is time in seconds and $V(t)$ is the air volume in the lungs, in liters. (a) Identify the midline, amplitude, and period of the model, with units. (b) Interpret each of the three values for the care team: what does each describe about the patient&#x27;s breathing? (c) Compute the patient&#x27;s breathing rate in breaths per minute from the period, and state the maximum and minimum lung volumes predicted by the model.</p>",
  "evidence": "Midline 2.4 L, amplitude 0.5 L, and period 5 s read from the formula, contextual interpretations of all three, a breaths-per-minute conversion, and max/min volumes from midline ± amplitude",
  "reveals": "Whether the student can decode the parameters of a sinusoidal model into physiology — resting volume, breath size, and breath timing — rather than reciting definitions."
 },
 {
  "id": "S4-12",
  "set": 4,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Sector area using radian measure",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Sector area using radian measure — NC.M3.G-C.5 (derive, using similarity, that arc length is proportional to the radius and define radian measure; derive and use the formula $A = \\frac{1}{2}r^2\\theta$ for the area of a sector)",
  "html": "<p>A radiation therapy machine delivers treatment along an arc: its beam sweeps a sector of a circle with radius 80 cm (the distance from the machine&#x27;s pivot to the treatment point) through an angle of 1.2 radians. (a) Find the area of the sector swept by the beam. (b) Show the computation a second way, by first finding what fraction of the full circle the angle 1.2 radians represents. (c) Explain why the sector-area formula $A = \\tfrac{1}{2}r^2\\theta$ requires $\\theta$ to be measured in radians rather than degrees.</p>",
  "evidence": "A sector-area computation in square centimeters, an independent fraction-of-the-circle check giving the same result, and an explanation connecting radians to the proportionality between angle and arc/sector size",
  "reveals": "Whether the student can use the sector formula and also justify it — radians are what make the \"fraction of the circle\" reasoning exact."
 },
 {
  "id": "S4-13",
  "set": 4,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle from completing the square",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle from completing the square — NC.M3.G-GPE.1 (complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A hospital&#x27;s ambulance dispatch region is modeled on a coordinate grid (units in miles). The boundary of the region satisfies $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Complete the square to write the equation in standard form. (b) State the center and radius of the dispatch region, and interpret both for the dispatch team, assuming the hospital sits at the center. (c) An ambulance call comes from the point $(3, 3)$. Is the call inside the dispatch region? Justify your answer.</p>",
  "evidence": "A completing-the-square computation for both variables, the standard-form equation, center and radius identified and interpreted in miles, and a distance-based or substitution-based determination for the call point",
  "reveals": "Whether the student can reverse-engineer a circle's geometry from a general-form equation — the completing-the-square skill that makes conic equations readable."
 },
 {
  "id": "S4-14",
  "set": 4,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and the diameter theorem",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and the diameter theorem — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; an angle inscribed in a semicircle is a right angle; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>A circular therapy garden at a rehabilitation center has a straight path $AB$ that passes through the center of the circle, so $AB$ is a diameter. A second path runs from $A$ to a point $P$ on the circle, and a third from $P$ to $B$, forming triangle $APB$ inscribed in the circle. The arc from $A$ to $P$ (not containing $B$) has measure $70^\\circ$. (a) Find the measure of $\\angle APB$, and name the theorem that determines it. (b) Find the measure of $\\angle ABP$. Show your reasoning using an inscribed angle and its intercepted arc.</p>",
  "evidence": "$\\angle APB = 90^\\circ$ justified by the theorem on angles inscribed in a semicircle, and $\\angle ABP$ found by identifying its intercepted arc and halving its measure, with the triangle angle sum used consistently",
  "reveals": "Whether the student can chain two inscribed-angle facts — the diameter theorem and the half-arc rule — inside one figure without confusing which arc each angle intercepts."
 },
 {
  "id": "S4-15",
  "set": 4,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Extending trigonometric functions with the unit circle",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Extending trigonometric functions with the unit circle — NC.M3.F-TF.2 (explain how the unit circle enables the extension of trigonometric functions to all real numbers, interpreted as radian measures of angles traversed around the unit circle; explain signs and periodicity)",
  "html": "<p>An ECG technician notes that the heart-monitor model uses $\\sin t$, and a trainee asks why the trace repeats every $2\\pi$ seconds of model time and why $\\sin\\left(\\dfrac{13\\pi}{3}\\right)$ should equal $\\sin\\left(\\dfrac{\\pi}{3}\\right)$. (a) Using the unit circle, explain why $\\sin(t + 2\\pi) = \\sin t$ for every $t$. (b) Compute $\\sin\\left(\\dfrac{13\\pi}{3}\\right)$ exactly, showing how periodicity justifies your steps. (c) Determine the sign of $\\cos\\left(\\dfrac{5\\pi}{4}\\right)$ from the unit circle and give its exact value, naming the quadrant of the terminal side.</p>",
  "evidence": "A unit-circle explanation of periodicity (a full revolution returns to the same point and same $y$-coordinate), an exact value obtained by subtracting full revolutions, and a quadrant-based sign determination with exact value",
  "reveals": "Whether periodicity and signs are, for the student, geometric facts about traveling around a circle — not rules memorized from a chart."
 },
 {
  "id": "S4-16",
  "set": 4,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A clinic stores purified water in a cylindrical tank with radius 3 feet and height 8 feet. (a) Find the volume of the tank in cubic feet, in exact form and as a decimal approximation. (b) Using the conversion 1 cubic foot $\\approx 7.48$ gallons, find the tank&#x27;s capacity in gallons. (c) The clinic uses about 120 gallons of purified water per day. For how many full days will one full tank last?</p>",
  "evidence": "A cylinder volume computation in exact ($\\pi$) and decimal form, a unit conversion to gallons, and a division interpreted as a whole number of full days with the leftover acknowledged",
  "reveals": "Whether the student can carry a volume through a unit conversion into a practical supply decision, handling the \"full days\" interpretation honestly."
 },
 {
  "id": "S4-17",
  "set": 4,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems with geometric constraints",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems with geometric constraints — NC.M3.G-MG.3 (apply geometric methods to solve design problems, e.g., satisfying physical constraints or minimizing cost)",
  "html": "<p>A health center is fencing a rectangular outdoor exercise patio against the side of its building, so fencing is needed on only three sides (the building forms the fourth side). The center has 60 feet of fencing. (a) Let $w$ be the length, in feet, of each side perpendicular to the building. Write the patio&#x27;s area $A$ as a function of $w$, and state the domain of $w$ that makes sense for this design. (b) Find the dimensions that maximize the patio&#x27;s area, and the maximum area. Show a method (completing the square, vertex formula, or symmetry of roots) rather than guessing. (c) State one real-world constraint, other than the fencing total, that the model ignores.</p>",
  "evidence": "An area function built from the fencing constraint with a sensible domain ($0 < w < 30$), a vertex-based optimization giving dimensions and maximum area with units, and a plausible unmodeled constraint (door placement, minimum width for accessibility, building length)",
  "reveals": "Whether the student can run the full modeling cycle — constraint to function to optimum to critique — which is the heart of geometric design problems."
 },
 {
  "id": "S4-18",
  "set": 4,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing treatments in a randomized experiment",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing treatments in a randomized experiment — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A clinic runs a randomized experiment comparing two recovery programs after knee surgery. Sixty patients are randomly assigned, 30 to Program A (a new therapy) and 30 to Program B (standard therapy). Mean recovery time is 12.4 days for Program A and 14.1 days for Program B, an observed difference of $-1.7$ days (A minus B). To test whether the difference could be due to chance, researchers run a simulation: they randomly reassign the 60 recovery times to the two programs 200 times, recomputing the difference of means each time. In the simulation, a difference at least as extreme as $-1.7$ days (that is, $\\le -1.7$) occurred in 6 of the 200 trials. (a) Estimate the probability of seeing a difference this large if the programs were truly equally effective. (b) At the 5% significance level, is the observed difference statistically significant? (c) State the conclusion the clinic can draw, and explain why the <em>random assignment</em> of patients is what allows a cause-and-effect conclusion here.</p>",
  "evidence": "A probability computed from the simulation count ($6/200$), a comparison against the 5% level, a conclusion in context (Program A appears to speed recovery), and an explanation tying random assignment to balancing the groups and supporting causation",
  "reveals": "Whether the student can read a randomization simulation as a \"how surprising is this if nothing is going on?\" argument — the logic of significance — and knows why experiments, unlike surveys, can support causal claims."
 },
 {
  "id": "S4-19",
  "set": 4,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Randomization in surveys, experiments, and observational studies",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Randomization in surveys, experiments, and observational studies — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A county health department is planning two studies about a new walking initiative. Study 1: survey a random sample of 500 county residents about their current exercise habits. Study 2: recruit 80 volunteers, randomly assign half to a structured walking program and half to a control group, and compare their fitness after three months. (a) Classify each study as a sample survey, an experiment, or an observational study. (b) Explain what &quot;randomization&quot; means in Study 1 and what it means in Study 2 — they are not the same thing. (c) Only one of the two studies can support the claim &quot;the walking program <em>causes</em> improved fitness.&quot; Identify which, and explain why, referencing your answers to (b).</p>",
  "evidence": "Correct classification of both studies, distinct definitions of random *selection* (Study 1) and random *assignment* (Study 2) with what each accomplishes, and a causal-claim judgment tied to random assignment controlling confounders",
  "reveals": "Whether the student can separate the two jobs randomization does — representing a population vs. balancing groups — the distinction on which all study-design reasoning rests."
 },
 {
  "id": "S4-20",
  "set": 4,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with composite geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with composite geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe and model objects)",
  "html": "<p>A medicine capsule is shaped like a cylinder with a hemisphere attached to each end. The capsule&#x27;s total length is 2.0 cm and its radius is 0.3 cm. (a) Find the length of the cylindrical middle section, explaining your reasoning. (b) Model the capsule as a composite solid and find its total volume, in exact form and as a decimal approximation. (c) A pharmacist says, &quot;Two hemispheres make a sphere, so the capsule is just a cylinder plus a sphere.&quot; Verify that claim as part of your solution and explain why it makes the computation cleaner.</p>",
  "evidence": "The cylinder length found by subtracting the two radii from the total length, a volume computation combining a cylinder and a sphere with cubic units, and an explicit verification of the two-hemispheres-make-a-sphere decomposition",
  "reveals": "Whether the student can decompose a real object into standard solids — including seeing that the two end caps combine into one sphere — the essential move of geometric modeling."
 },
 {
  "id": "S5-1",
  "set": 5,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>A highway patrol investigator uses the formula $v = \\sqrt{30df}$ to estimate a car&#x27;s speed $v$ (in miles per hour) from the length of its skid marks $d$ (in feet) on a road with friction factor $f$. On dry asphalt, $f = 0.75$, so the formula becomes $v = \\sqrt{22.5d}$. A driver involved in a crash on dry asphalt insists she was traveling exactly 60 mph before braking. (a) Solve the equation $\\sqrt{22.5d} = 60$ to find the skid-mark length her claim predicts. (b) Investigators actually measure skid marks of 200 ft. Is her claim consistent with the evidence? Justify your answer using the formula.</p>",
  "evidence": "The squared equation with the solution for $d$, a check of the solution in the original equation, and a written consistency judgment comparing predicted and measured skid lengths",
  "reveals": "Whether the student can isolate a radical, square both sides responsibly, and use a solution as evidence in an argument rather than as a bare number."
 },
 {
  "id": "S5-2",
  "set": 5,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Dividing rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Dividing rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>During a road test, an engineer models a delivery van&#x27;s miles driven as $\\dfrac{x^2-9}{2x}$ and its gallons of fuel used as $\\dfrac{x+3}{4x^2}$, where $x$ is an engine tuning parameter. The van&#x27;s fuel economy is miles driven divided by gallons used. Write the fuel-economy expression in simplified form, and state all values of $x$ that must be excluded.</p>",
  "evidence": "The division rewritten as multiplication by the reciprocal, factoring of $x^2-9$, cancellation of common factors, the simplified expression, and the excluded values",
  "reveals": "Whether the student treats rational expressions as a closed system like rational numbers — factoring and tracking domain restrictions, not just canceling symbols."
 },
 {
  "id": "S5-3",
  "set": 5,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Fundamental Theorem of Algebra and complex roots",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Fundamental Theorem of Algebra and complex roots — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>A drone manufacturer models interference in a motor controller with the polynomial equation $x^3 + 2x^2 + 9x + 18 = 0$, where $x$ is a normalized frequency setting. (a) Find all complex solutions of the equation. (b) State how the Fundamental Theorem of Algebra guarantees the number of solutions you found is complete. (c) Which solution(s) could describe a physical frequency setting, and why?</p>",
  "evidence": "Factoring by grouping, the three complex solutions, a statement connecting the count of solutions to the degree of the polynomial, and an interpretation of the real solution",
  "reveals": "Whether the student expects nonreal roots for a cubic, finds them through structure (grouping and a sum of squares), and distinguishes algebraic completeness from physical meaning."
 },
 {
  "id": "S5-4",
  "set": 5,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A bus company safety officer uses the stopping-distance formula $d = \\dfrac{v^2}{2a}$, where $d$ is stopping distance in feet, $v$ is initial speed in feet per second, and $a$ is the deceleration in ft/s². (a) Rearrange the formula to solve for $a$. (b) A bus traveling 88 ft/s (60 mph) stops in 242 ft. Find its deceleration.</p>",
  "evidence": "The correctly rearranged formula $a$ in terms of $v$ and $d$, substitution with units, and the computed deceleration",
  "reveals": "Whether the student can manipulate a formula with squared and fractional structure before substituting, instead of guessing operations after plugging in numbers."
 },
 {
  "id": "S5-5",
  "set": 5,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder on division by $x - a$ is $P(a)$)",
  "html": "<p>A charter bus company models its weekly profit, in hundreds of dollars, during week $x$ of the summer season by $P(x) = 2x^3 - 7x^2 + 4x + 3$. (a) Use the Remainder Theorem to find the remainder when $P(x)$ is divided by $x - 3$, without performing the full division first. (b) Interpret the remainder in the context of the company&#x27;s profit. (c) Confirm your result by performing the division (long or synthetic).</p>",
  "evidence": "Evaluation of $P(3)$, the division confirming the same remainder, and a sentence interpreting the value as the week-3 profit in dollars",
  "reveals": "Whether the student understands the Remainder Theorem as a statement about function values, not just a division shortcut, and can translate the result back into the context."
 },
 {
  "id": "S5-6",
  "set": 5,
  "n": 6,
  "strand": "Functions",
  "topic": "Average rate of change in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Average rate of change in context — NC.M3.F-IF.4 (interpret key features of graphs and tables in terms of the context, including average rate of change)",
  "html": "<p>The table shows the distance a tour bus has traveled from its depot at each hour of a trip.</p>\n<table>\n<tr><th>$t$ (hours)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>\n<tr><td>Distance (miles)</td><td>0</td><td>55</td><td>130</td><td>185</td><td>240</td></tr>\n</table>\n<p>(a) Find the average rate of change of distance over the whole trip, $0 \\le t \\le 4$, and interpret it. (b) During which single hour was the bus traveling fastest? Justify with rates of change. (c) Explain in context why the average rate over the whole trip can hide what happened during the fastest hour.</p>",
  "evidence": "Rate-of-change computations for the full interval and each one-hour interval, the fastest hour identified with its rate, and a contextual explanation",
  "reveals": "Whether the student reads a table as a story of changing speed and understands an average rate as a summary that can mask variation."
 },
 {
  "id": "S5-7",
  "set": 5,
  "n": 7,
  "strand": "Functions",
  "topic": "Recursive processes from a context",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Recursive processes from a context — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities, determining an explicit expression or a recursive process from a context)",
  "html": "<p>A traveler is saving for a train tour. In week 1 she deposits $\\$60$ into a trip account. Each following week, she deposits $\\$15$ more than she deposited the week before. (a) Write a recursive definition for $d_n$, her deposit in week $n$. (b) List her deposits for weeks 1–4. (c) How much has she saved in total after 6 weeks? (d) Write an explicit formula for $d_n$.</p>",
  "evidence": "A recursive definition with the initial value and the recurrence, the first four deposits, the six-week total, and the explicit formula",
  "reveals": "Whether the student can translate \"each week, \\$15 more than the week before\" into a recurrence with a stated seed, and move between recursive and explicit descriptions."
 },
 {
  "id": "S5-8",
  "set": 5,
  "n": 8,
  "strand": "Functions",
  "topic": "Exponential growth eventually exceeds polynomial growth",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Exponential growth eventually exceeds polynomial growth — NC.M3.F-LE.3 (observe using graphs and tables that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial function)",
  "html": "<p>Two plans for adding electric-vehicle charging stations along a highway corridor are compared. Plan P (public funding) follows $P(t) = 4t^2 + 20t + 50$ stations after $t$ years. Plan E (a startup network) follows $E(t) = 40(1.6)^t$ stations after $t$ years. (a) Build a table of values for both plans for $t = 0, 1, 2, 3, 4, 5$. (b) During which year does Plan E first move ahead of Plan P? (c) Explain, using the table and the structure of the two functions, why Plan E will stay ahead in the long run even though it started behind.</p>",
  "evidence": "A two-row table of values, the crossover year identified from the table, and an explanation contrasting constant-ratio growth with polynomial growth",
  "reveals": "Whether the student can use tabular evidence to witness a crossover and articulate why exponential growth must eventually dominate."
 },
 {
  "id": "S5-9",
  "set": 5,
  "n": 9,
  "strand": "Functions",
  "topic": "Comparing two functions in different representations",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing two functions in different representations — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way — algebraically and graphically)",
  "html": "<p>Two airport taxi services post their fares. Service A charges according to the equation $C(x) = 2.5x + 4$, where $x$ is the trip length in miles and $C$ is the fare in dollars. Service B&#x27;s fare is shown on a graph: a straight line passing through the points $(0, 10)$ and $(10, 30)$, with trip length (miles) on the horizontal axis and fare (dollars) on the vertical axis. (a) Compare the two services&#x27; pickup fees and per-mile rates. (b) Which service is cheaper for a 20-mile trip, and by how much? (c) For what trip length do the two services cost the same?</p>",
  "evidence": "Service B's rate and intercept extracted from the graph's two points, both fares computed at 20 miles, and the break-even mileage found by setting the fares equal",
  "reveals": "Whether the student can pull the same features (initial value, rate) out of an equation and a graph and use them to make a consumer decision."
 },
 {
  "id": "S5-10",
  "set": 5,
  "n": 10,
  "strand": "Functions",
  "topic": "Reading inverse values from a graph",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values from a graph — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>The graph shows the height $h$ (in feet) of a cable car above a valley floor as a function of time $t$ (in minutes) since it left the station. The graph is a smooth curve passing through the points $(0, 0)$, $(2, 250)$, $(4, 600)$, $(6, 1000)$, and $(8, 1500)$, and $h$ is a one-to-one function of $t$. (a) Find $h(4)$ and explain what it means. (b) Find $h^{-1}(1000)$ and explain what it means. (c) Find $h^{-1}(250)$.</p>",
  "evidence": "The three values read from the given points, with the input/output roles explicitly swapped for the inverse values and interpreted in context",
  "reveals": "Whether the student understands an inverse as a reversal of the question — from \"height at a time\" to \"time at a height\" — rather than a new formula."
 },
 {
  "id": "S5-11",
  "set": 5,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>The cross-section of a high-speed train&#x27;s headlight reflector is a parabola with its vertex at the origin, opening upward. The light bulb sits at the focus $(0, 2)$, and the directrix is the line $y = -2$ (measurements in centimeters). (a) Derive the equation of the parabola from the focus and directrix. (b) The reflector&#x27;s rim is at $y = 8$ cm. How wide is the reflector at its rim?</p>",
  "evidence": "A derivation setting the distance to the focus equal to the distance to the directrix, the resulting equation, and the rim width computed from the two points at $y = 8$",
  "reveals": "Whether the student can rebuild the parabola's equation from its geometric definition instead of recalling a template, and apply it to a design measurement."
 },
 {
  "id": "S5-12",
  "set": 5,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length on a unit circle",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length on a unit circle — NC.M3.F-TF.1 (understand radian measure of an angle; the arc length on a unit circle subtended by an angle is its radian measure)",
  "html": "<p>A ship&#x27;s radar display is modeled by a unit circle, where 1 unit represents 10 nautical miles. A contact moves along the circle through a central angle of $150^\\circ$ from the positive $x$-axis. (a) Convert $150^\\circ$ to radian measure. (b) Find the length of the arc the contact travels, in units. (c) Convert your answer to nautical miles.</p>",
  "evidence": "The degree-to-radian conversion, the arc length identified with the radian measure on the unit circle, and the scaled distance in nautical miles",
  "reveals": "Whether the student understands radian measure as a length on the unit circle, not merely a conversion factor to memorize."
 },
 {
  "id": "S5-13",
  "set": 5,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that if the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram)",
  "html": "<p>A folding scissor gate at a ferry terminal is built from two bars that cross and are pinned where they meet. In the gate&#x27;s frame, quadrilateral $ABCD$ has diagonals $\\overline{AC}$ and $\\overline{BD}$ that intersect at point $E$, with $AE = EC$ and $BE = ED$ (the diagonals bisect each other). Prove that $ABCD$ is a parallelogram.</p>",
  "evidence": "A structured (two-column or paragraph) proof using vertical angles, SAS triangle congruence, and alternate interior angles to show both pairs of opposite sides are parallel",
  "reveals": "Whether the student can chain congruence into parallelism — using CPCTC to manufacture the equal alternate interior angles that the definition of a parallelogram requires."
 },
 {
  "id": "S5-14",
  "set": 5,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed and circumscribed circles; inscribed quadrilateral angles",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed and circumscribed circles; inscribed quadrilateral angles — NC.M3.G-C.3 (construct and justify inscribed and circumscribed circles of a triangle; find angle measures in inscribed quadrilaterals)",
  "html": "<p>Four streets meet a circular plaza at points $A$, $B$, $C$, and $D$ in order around the circle, forming quadrilateral $ABCD$ inscribed in the circle. The angle at $A$ measures $112^\\circ$ and the angle at $B$ measures $85^\\circ$. (a) Find the measures of the angles at $C$ and $D$. (b) Find the measure of the arc $BCD$ intercepted by $\\angle A$.</p>",
  "evidence": "Use of the supplementary relationship between opposite angles of an inscribed quadrilateral for both unknown angles, and the intercepted-arc measure from the inscribed angle theorem",
  "reveals": "Whether the student connects the inscribed-quadrilateral theorem to the inscribed angle theorem instead of treating supplementary opposite angles as an isolated fact."
 },
 {
  "id": "S5-15",
  "set": 5,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>A piston in a car engine moves up and down inside its cylinder as the crankshaft turns. The piston&#x27;s height above the bottom of its stroke, in centimeters, $t$ seconds after it starts at the bottom is modeled by $h(t) = 4 - 4\\cos(20\\pi t)$. (a) Identify the amplitude, midline, and period of the model, and explain what each means for the piston. (b) Find the piston&#x27;s height after $0.025$ seconds. (c) At what time does the piston first reach the top of its stroke, and how high is that? (d) How many complete up-and-down cycles does the piston make in one minute?</p>",
  "evidence": "Amplitude, midline, and period read from the model and tied to the piston's stroke and crankshaft speed, the two requested height/time evaluations, and a cycle count converted from the period",
  "reveals": "Whether the student can move in both directions between a physical cycle and the parameters of its trigonometric model, including connecting period to engine speed."
 },
 {
  "id": "S5-16",
  "set": 5,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>A travel website publishes the headline &quot;78% of Americans Prefer Road Trips to Flying, Survey Finds.&quot; Reading the fine print, you learn: the &quot;survey&quot; was an optional pop-up poll on a website devoted to classic-car enthusiasts; 1,200 people chose to respond; the question asked, &quot;Don&#x27;t you agree that a great American road trip beats a cramped flight?&quot;; and no margin of error is reported. Write a critique of this report: identify at least three distinct problems with the study or the headline, and state what conclusion, if any, the data can actually support.</p>",
  "evidence": "A written critique naming the voluntary-response sample, the unrepresentative sampling frame (car enthusiasts), and the leading question, plus a correctly limited conclusion",
  "reveals": "Whether the student audits a claim's evidence — who was asked, how they were chosen, and what they were asked — before accepting a headline percentage."
 },
 {
  "id": "S5-17",
  "set": 5,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A transit agency compares two districts to decide where to add bus service. District A covers 12.5 km² and has 87,500 residents. District B covers 9 km² and has 45,000 residents. (a) Find the population density of each district, in residents per km². (b) District A has 25 bus stops. How many residents per bus stop is that? (c) Based on density, which district has the stronger case for more frequent bus service? Justify.</p>",
  "evidence": "Both density computations with units, the residents-per-stop computation, and a justified recommendation",
  "reveals": "Whether the student uses density as a fair comparison tool — normalizing by area instead of comparing raw populations of unequal districts."
 },
 {
  "id": "S5-18",
  "set": 5,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>At a highway construction site, a pile of sand is shaped like a cone with a radius of 6 ft and a height of 4 ft. (a) Find the volume of the sand pile, in cubic feet. (b) Convert the volume to cubic yards. (c) A dump truck can carry 3 cubic yards per load. How many truckloads are needed to move the pile?</p>",
  "evidence": "The cone volume computation, the unit conversion (27 ft³ = 1 yd³), and the truckload count rounded up with a reason",
  "reveals": "Whether the student can carry a volume through a unit conversion and make the practical rounding decision the context demands."
 },
 {
  "id": "S5-19",
  "set": 5,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population proportion; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population proportion; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A city transit agency will add a new airport express bus only if at least 45% of all its riders say they would ride it at least once a week. In a random sample of 250 riders, 128 say they would. To build a margin of error, the agency runs a simulation: 200 simulated random samples of size 250 (using the sample proportion as the assumed population proportion) produce sample proportions with mean 0.512 and standard deviation 0.032. (a) Find the sample proportion $\\hat{p}$. (b) Use the simulation to give a margin of error and a plausible interval for the true proportion of all riders who would ride the express at least weekly. (c) Based on the interval, can the agency conclude that its 45% threshold is met? Justify. (d) Suppose the agency instead surveyed 1,000 riders and got the same sample proportion. Roughly what would happen to the margin of error, and would the decision change? Explain using sampling variability.</p>",
  "evidence": "The sample proportion, a margin of error of about two simulation standard deviations, the resulting interval, a threshold decision justified by whether the whole interval clears 45%, and a prediction that quadrupling the sample size roughly halves the margin of error",
  "reveals": "Whether the student treats a sample proportion as an estimate with a plausible range, tests a real decision threshold against the whole interval rather than the point estimate alone, and understands how sample size controls sampling variability."
 },
 {
  "id": "S5-20",
  "set": 5,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects)",
  "html": "<p>A truck&#x27;s fuel tank is a horizontal cylinder 20 ft long with a circular cross-section of radius 4 ft. For each cutting plane, identify the shape of the cross-section of the tank: (a) a vertical plane perpendicular to the tank&#x27;s length, cutting across the tank; (b) a horizontal plane passing through the tank&#x27;s central axis; (c) a plane tilted at an angle to the tank&#x27;s length, making a slanted slice through the curved wall. For part (b), also give the dimensions of the shape.</p>",
  "evidence": "The three shapes identified (circle, rectangle with dimensions, ellipse) with a brief justification for each based on how the plane meets the cylinder",
  "reveals": "Whether the student can visualize how a slicing plane's orientation determines the resulting two-dimensional shape, including the non-obvious slanted case."
 },
 {
  "id": "S6-1",
  "set": 6,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Quotients of complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Quotients of complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; find conjugates and use them to find quotients of complex numbers)",
  "html": "<p>An electrician analyzing a home-theater circuit needs the current $I = \\dfrac{V}{Z}$, where the voltage is $V = 7 + 4i$ and the impedance is $Z = 1 + 2i$ (complex numbers model AC circuits). Compute the quotient $\\dfrac{7 + 4i}{1 + 2i}$ in the form $a + bi$, showing how the conjugate is used.</p>",
  "evidence": "Multiplication of numerator and denominator by the conjugate $1 - 2i$, use of $i^2 = -1$, and the quotient written in $a + bi$ form",
  "reveals": "Whether the student understands the conjugate as the tool that makes a complex denominator real, rather than as a memorized ritual."
 },
 {
  "id": "S6-2",
  "set": 6,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>Two pumps drain a flooded basement. Working against a valve setting $x$, their drainage rates (in gallons per minute) are modeled by $\\dfrac{4}{x-1}$ and $\\dfrac{2}{x+4}$. The combined drainage rate is the sum of the two rates. Write the combined rate as a single rational expression in simplified form, and state the values of $x$ that must be excluded.</p>",
  "evidence": "A common denominator built from both factors, the combined numerator expanded and simplified, and the excluded values from both original denominators",
  "reveals": "Whether the student can build a least common denominator and keep track of restrictions that come from the original expressions, not the simplified one."
 },
 {
  "id": "S6-3",
  "set": 6,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Solving rational equations; extraneous solutions",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving rational equations; extraneous solutions — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>A supplier&#x27;s cost-balancing formula for a remodeling job leads to the equation<br>$$\\frac{x}{x-3} - \\frac{12}{x+3} = \\frac{18}{x^2-9},$$<br>where $x$ is the number of crew members assigned to the job. Solve the equation, and explain what happens to each candidate solution: which are valid, which are extraneous, and what the valid solution means for the job.</p>",
  "evidence": "Clearing denominators with the LCD, the resulting quadratic and its two roots, a check of each root in the original equation, and the interpretation of the surviving root as the crew size",
  "reveals": "Whether the student treats \"solutions\" of a cleared equation as candidates that must be checked against the original denominators — and can say why a root is rejected."
 },
 {
  "id": "S6-4",
  "set": 6,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Interpreting expressions in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting expressions in context — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression such as terms, factors, and coefficients)",
  "html": "<p>A homeowner builds an open-top cylindrical metal planter. The amount of sheet metal needed is modeled by $A = \\pi r^2 + 2\\pi r h$, where $r$ is the radius and $h$ is the height, both in feet. (a) Identify each term of the expression and explain what part of the planter it measures. (b) Find the amount of sheet metal needed for a planter with radius 1.5 ft and height 2 ft.</p>",
  "evidence": "Each term matched to the planter's base and lateral surface with a reason, and the total area computed with units for the given dimensions",
  "reveals": "Whether the student reads an expression as a sum of meaningful physical pieces — area of a circle plus circumference times height — rather than as a string of symbols."
 },
 {
  "id": "S6-5",
  "set": 6,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Zeros and graphs of polynomials",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros and graphs of polynomials — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph; include end behavior)",
  "html": "<p>A furniture maker models monthly profit, in hundreds of dollars, by $P(x) = x^3 - 2x^2 - 8x$, where $x$ is the number of months since the shop launched. (a) Factor $P(x)$ completely and find all of its zeros. (b) Describe the end behavior of the graph. (c) Interpret the zeros in context: during which months is the shop losing money, and when does it break even for good? (d) Sketch the graph, labeling the intercepts.</p>",
  "evidence": "The complete factorization, all three zeros, end-behavior statements for both ends, a labeled sketch, and a contextual reading of the negative zero and the break-even point",
  "reveals": "Whether the student connects factored form, intercepts, end behavior, and the business story (early losses, then profit) into one coherent picture."
 },
 {
  "id": "S6-6",
  "set": 6,
  "n": 6,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to build a function that models a context)",
  "html": "<p>A homeowner expands a square patio. The new patio will have side length $(x + 6)$ ft, built by extending an original square patio of side $x$ ft. (a) The patio&#x27;s area is the product of two linear functions of $x$ (its length and width). Write the area $A(x)$ as a single polynomial. (b) Pavers cost $\\$9$ per square foot. Write the total paver cost $C(x)$ as a function, and find the cost when $x = 10$ ft.</p>",
  "evidence": "The area written as a product of the two side-length functions and expanded, the cost function built from the area function, and the evaluated cost with units",
  "reveals": "Whether the student sees a geometric area as a product of functions and a budget as a composition-by-scaling of that product, building new functions deliberately."
 },
 {
  "id": "S6-7",
  "set": 6,
  "n": 7,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph piecewise-defined functions, including step and absolute value functions)",
  "html": "<p>A handyman charges for a job lasting $h$ hours according to<br>$$C(h) = \\begin{cases} 150 &amp; 0 &lt; h \\le 2 \\\\ 150 + 45(h - 2) &amp; 2 &lt; h \\le 6 \\\\ 330 + 55(h - 6) &amp; h &gt; 6 \\end{cases}$$<br>(a) Graph $C(h)$ for $0 &lt; h \\le 9$, marking open/closed endpoints on each piece. (b) Find the charge for a 5-hour job and for a 7-hour job. (c) Explain in context why the third piece is steeper than the second.</p>",
  "evidence": "A graph with three correct pieces, correct endpoint conventions, continuity checks at $h = 2$ and $h = 6$, both charges computed, and a rate interpretation of the steeper piece",
  "reveals": "Whether the student can read a tiered pricing rule as a graph — including which piece owns each boundary hour — instead of as three unrelated formulas."
 },
 {
  "id": "S6-8",
  "set": 6,
  "n": 8,
  "strand": "Functions",
  "topic": "Verifying inverse functions by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverse functions by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A concrete supplier charges $C(x) = 135x + 75$ dollars for $x$ cubic yards of concrete, where the $\\$75$ is a flat delivery fee. The supplier&#x27;s office uses the inverse function $x = g(C) = \\dfrac{C - 75}{135}$ to find how many yards a customer ordered from the total charge. Verify by composition that $C$ and $g$ are inverses of each other, showing both $C(g(C)) = C$ and $g(C(x)) = x$.</p>",
  "evidence": "Both compositions carried out algebraically and each simplifying to the identity, plus a sentence stating what the verification establishes",
  "reveals": "Whether the student understands inverse verification as undoing in both directions, not just solving for the other variable once."
 },
 {
  "id": "S6-9",
  "set": 6,
  "n": 9,
  "strand": "Functions",
  "topic": "Expressing solutions of exponential equations as logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Expressing solutions of exponential equations as logarithms — NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm and evaluate using technology; solve exponential equations)",
  "html": "<p>After a renovation, a home&#x27;s value is modeled by $V(t) = 320{,}000(1.045)^t$ dollars, where $t$ is years since the renovation. (a) Express the solution of $V(t) = 500{,}000$ as a logarithm. (b) Evaluate the logarithm (technology is appropriate) to find how long it takes the home&#x27;s value to reach $\\$500{,}000$.</p>",
  "evidence": "The equation reduced to $(1.045)^t = 1.5625$, the solution written as a logarithmic expression, and the evaluated time in years with a context statement",
  "reveals": "Whether the student understands a logarithm as the answer to \"what exponent?\" — the inverse operation that isolates time in a growth model."
 },
 {
  "id": "S6-10",
  "set": 6,
  "n": 10,
  "strand": "Functions",
  "topic": "Function notation; domain and range",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Function notation; domain and range — NC.M3.F-IF.1 (understand function notation; determine domain and range from a graph and relate them to the context)",
  "html": "<p>A crane lifting a roof beam is shown on a graph of height $h$ (feet) versus time $t$ (minutes). The graph consists of three segments: a straight rise from $(0, 0)$ to $(4, 24)$, a horizontal segment from $(4, 24)$ to $(6, 24)$, and a straight descent from $(6, 24)$ to $(9, 0)$. (a) State the domain and range of the function. (b) Find $h(2)$ and interpret it. (c) For which times is the beam at its maximum height? (d) Find $h(7.5)$ and interpret it.</p>",
  "evidence": "Domain and range as intervals tied to the lift's duration and heights, $h(2)$ and $h(7.5)$ read/computed from the segments with interpretations, and the plateau interval identified",
  "reveals": "Whether the student can translate a piecewise-linear graph into function statements — including reading a value on a slanted descent and recognizing an interval of maximum value."
 },
 {
  "id": "S6-11",
  "set": 6,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that the measures of the interior angles of a triangle sum to $180^\\circ$)",
  "html": "<p>A carpenter cuts a triangular brace for a deck. The brace forms triangle $ABC$. Using the figure in which a line through vertex $A$ is drawn parallel to side $\\overline{BC}$, meeting the directions of sides $\\overline{AB}$ and $\\overline{AC}$ extended — specifically, let line $\\ell$ pass through $A$ parallel to $\\overline{BC}$, with points $D$ and $E$ on $\\ell$ so that $D$–$A$–$E$ are collinear in that order and $\\overline{AB}$, $\\overline{AC}$ lie between them — prove that the measures of the interior angles of triangle $ABC$ sum to $180^\\circ$.</p>",
  "evidence": "A structured proof using alternate interior angles (twice, with the two transversals) and the straight angle at $A$ on line $\\ell$",
  "reveals": "Whether the student can manufacture a straight angle and transfer the triangle's angles onto it with parallel-line reasoning — the core move of the classic proof."
 },
 {
  "id": "S6-12",
  "set": 6,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles, radii, and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles, radii, and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>A circular garden has center $O$. Points $A$ and $B$ lie on the circle, and the central angle $\\angle AOB$ measures $84^\\circ$. (a) Find the measure of arc $AB$. (b) Point $C$ lies on the major arc $AB$. Find the measure of the inscribed angle $\\angle ACB$. (c) Point $D$ lies on the minor arc $AB$. Find the measure of $\\angle ADB$, and explain which arc it intercepts.</p>",
  "evidence": "The arc measure from the central angle, the inscribed angle on the major arc as half the minor arc, and the inscribed angle on the minor arc as half the major arc, each tied to the intercepted arc",
  "reveals": "Whether the student tracks *which* arc an inscribed angle intercepts — the distinction that decides between $42^\\circ$ and $138^\\circ$."
 },
 {
  "id": "S6-13",
  "set": 6,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>On a survey grid for a backyard (units in feet), the boundary of a circular patio satisfies the equation $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Complete the square to write the equation in standard form. (b) State the center and radius of the patio. (c) The patio&#x27;s center is where a table will go. Give the table&#x27;s coordinates.</p>",
  "evidence": "Completing the square in both variables with the constants balanced on the right side, the standard-form equation, and the center and radius read from it",
  "reveals": "Whether the student can reverse-engineer a circle's geometry from a general equation, keeping the added constants balanced — the most common place this skill breaks down."
 },
 {
  "id": "S6-14",
  "set": 6,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit circle; extending trigonometric functions to all real numbers",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit circle; extending trigonometric functions to all real numbers — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise around the unit circle; explain signs and periodicity)",
  "html": "<p>A tower crane&#x27;s jib rotates on a construction site, and its rotation is tracked in degrees from a reference direction. (a) Find $\\sin 405^\\circ$ and $\\cos 405^\\circ$, explaining how periodicity lets you reduce the angle. (b) Find $\\sin(-210^\\circ)$ and $\\cos(-210^\\circ)$, explaining how you handle the negative angle and the reference angle. (c) For each angle, state the quadrant in which the terminal side lies and how the signs of your answers match it.</p>",
  "evidence": "Reduction of $405^\\circ$ by one full turn, treatment of $-210^\\circ$ via its coterminal/reference angle, all four values with correct signs, and quadrant statements consistent with those signs",
  "reveals": "Whether the student sees trig values as coordinates on the unit circle — periodic and sign-determined by position — rather than as calculator outputs for acute angles only."
 },
 {
  "id": "S6-15",
  "set": 6,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and radian measure",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and radian measure — NC.M3.G-C.5 (derive, using similarity, the fact that the length of the arc intercepted by an angle is proportional to the radius; define radian measure; derive and use the sector-area formula $A = \\frac{1}{2}r^2\\theta$)",
  "html": "<p>Two semicircular garden borders are built with the same central angle (a semicircle, $\\pi$ radians) but different radii: 2 ft and 3 ft. (a) Find the arc length (the length of edging) for each border. (b) Show that the ratio of the arc lengths equals the ratio of the radii. (c) Derive the general fact you used: starting from the proportion $\\dfrac{s}{2\\pi r} = \\dfrac{\\theta}{2\\pi}$, explain why arc length is proportional to radius for a fixed angle, and state the resulting formula.</p>",
  "evidence": "Both arc lengths computed, the ratio comparison, and a derivation of $s = r\\theta$ from the proportion of arc to circumference",
  "reveals": "Whether the student understands $s = r\\theta$ as a consequence of proportionality (and similarity of circles), not as an isolated formula."
 },
 {
  "id": "S6-16",
  "set": 6,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems; minimizing materials under constraints",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems; minimizing materials under constraints — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including minimizing cost/materials under constraints)",
  "html": "<p>A homeowner wants an open-top storage bin (square base, no lid) for deck cushions, with a volume of exactly 32 ft³. If the base has side length $x$ ft, the height is determined by the volume, and the material needed (base plus four sides) is $A(x) = x^2 + \\dfrac{128}{x}$ square feet. (a) Use a table of values (try $x = 2, 3, 4, 5, 6$ and refine near the best value, e.g. $x = 4.5$) or graphing technology to find the base size that minimizes the material. (b) State the bin&#x27;s dimensions and the minimum material needed. (c) Explain why making the base very small or very large both waste material.</p>",
  "evidence": "A table or graph of $A(x)$ over the suggested values showing the minimum near $x = 4$, the corresponding height from the volume constraint, the minimum area, and a trade-off explanation",
  "reveals": "Whether the student can optimize a real design numerically — balancing base area against side area under a fixed-volume constraint — without calculus."
 },
 {
  "id": "S6-17",
  "set": 6,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a pyramid",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a pyramid — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A pyramid-shaped roof section tops a square turret on a house. The pyramid has a square base 12 ft by 12 ft and a vertical height of 5 ft. (a) Find the volume of the attic space inside the pyramid, in cubic feet. (b) A contractor will fill the space with spray-foam insulation sold by the cubic yard. How many cubic yards are needed?</p>",
  "evidence": "The pyramid volume using $\\frac{1}{3}Bh$ with the base area computed first, and the conversion to cubic yards",
  "reveals": "Whether the student applies the one-third factor for pyramids correctly and carries a volume through a unit conversion for a purchasing decision."
 },
 {
  "id": "S6-18",
  "set": 6,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Purposes of surveys, experiments, and observational studies; randomization",
  "standards": [
   "NC.M3.S-IC.1",
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Purposes of surveys, experiments, and observational studies; randomization — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample; recognize the purposes of sample surveys, experiments, and observational studies), NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A paint company claims its new primer &quot;reduces peeling&quot; and wants evidence strong enough to advertise a cause. It is considering three studies of homes in a town:<br>• <strong>Design 1 (survey):</strong> Mail a questionnaire to 400 homeowners asking which primer they used and whether their paint peeled.<br>• <strong>Design 2 (observational study):</strong> Inspect 200 homes, recording which primer each owner happened to use and whether the paint peeled.<br>• <strong>Design 3 (experiment):</strong> Recruit 60 similar homes whose owners agree to participate; randomly assign each home to the new primer or the standard primer, have all homes painted the same way, and compare peeling after two years.<br>(a) Classify each design as a sample survey, observational study, or experiment. (b) Which design can support a causal claim that the primer reduces peeling, and why? (c) In the design you chose, what role does randomization play, and what population can the conclusion apply to?</p>",
  "evidence": "Correct classification of all three designs, the experiment identified as the only causal design with a confounding-based justification, and an explanation of random assignment balancing other variables, with the conclusion limited to homes like those recruited",
  "reveals": "Whether the student distinguishes watching, asking, and intervening — and understands that random assignment, not sample size or good intentions, is what licenses a causal claim."
 },
 {
  "id": "S6-19",
  "set": 6,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments from a randomized experiment using simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments from a randomized experiment using simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A builder tests whether a new insulation package lowers monthly heating bills. Twenty-four similar homes are randomly assigned: 12 get the new insulation, 12 get standard insulation. After one winter month, the new-insulation homes save an average of $\\$86$ per month compared with their previous bills, and the standard-insulation homes save an average of $\\$64$ — an observed difference of $\\$22$ in mean savings. To judge significance, the builder runs a simulation: in 500 random reassignments of the 24 homes into two groups of 12 (assuming insulation type makes no difference), a difference in means of $\\$22$ or more occurred only 12 times. (a) What proportion of the simulations produced a difference at least as large as the observed one? (b) Using a 5% significance standard, is the observed difference statistically significant? (c) State the conclusion the builder can draw, in context.</p>",
  "evidence": "The simulated proportion computed from 12 of 500, comparison against the 5% standard, and a context conclusion that credits the insulation rather than chance",
  "reveals": "Whether the student interprets a simulation as a \"how surprising is this if nothing is going on?\" distribution — the logic behind significance — instead of just comparing two averages."
 },
 {
  "id": "S6-20",
  "set": 6,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>The front wall of a house is a rectangle 30 ft wide and 10 ft tall, topped by a triangular gable whose base is the top of the rectangle (30 ft) and whose height is 6 ft. The wall has two windows, each 3 ft by 4 ft, and one door, 3 ft by 7 ft, all of which will not be sided. (a) Model the wall with geometric shapes and find the area that needs siding, in square feet. (b) Siding is sold in &quot;squares&quot; of 100 ft². How many squares must be bought? (c) At $\\$185$ per square, what is the cost of the siding?</p>",
  "evidence": "Areas of the rectangle and triangle computed and added, window and door areas subtracted, the number of squares rounded up, and the total cost",
  "reveals": "Whether the student can decompose a real structure into standard shapes, account for cutouts, and make the purchasing round-up the context requires."
 },
 {
  "id": "S7-1",
  "set": 7,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms; write $a(x)/b(x)$ in the form $q(x) + r(x)/b(x)$ using polynomial division)",
  "html": "<p>A cloud gaming platform models the average processing time per session, in milliseconds, by $T(x) = \\dfrac{2x^2 + 7x + 3}{x + 2}$, where $x$ is the number of active server clusters beyond a baseline. (a) Use polynomial division to rewrite $T(x)$ in the form $q(x) + \\dfrac{r}{x + 2}$. (b) Based on your rewritten form, what happens to the average processing time as the number of clusters grows very large, and which part of the expression controls that behavior?</p>",
  "evidence": "A complete polynomial long-division (or synthetic) computation, the rewritten expression, and a written interpretation of the quotient and remainder terms as $x$ grows",
  "reveals": "Whether the student can perform polynomial division accurately and read the structure of the result — quotient as the long-run trend, remainder term as a shrinking correction — rather than treating the rewrite as a mechanical exercise."
 },
 {
  "id": "S7-2",
  "set": 7,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Fundamental Theorem of Algebra and complex roots",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Fundamental Theorem of Algebra and complex roots — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>A drone racing game&#x27;s flight-tuning software solves the equation $x^3 - 3x^2 + 9x - 27 = 0$ to calibrate a responsiveness parameter $x$. (a) Find all solutions of the equation, including any complex solutions. (b) Explain how the degree of the polynomial tells you in advance how many complex solutions to expect, counting multiplicity. (c) Which solutions could describe a real physical setting for the drone, and why must the others be rejected in context?</p>",
  "evidence": "Factoring (by grouping) or equivalent work, all three solutions listed, a statement connecting the count of solutions to the degree, and a context-based rejection of the nonreal solutions",
  "reveals": "Whether the student understands that a degree-$n$ polynomial has exactly $n$ complex solutions and can distinguish algebraic completeness from physical meaningfulness."
 },
 {
  "id": "S7-3",
  "set": 7,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Systems solved graphically; meaning of intersection points",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Systems solved graphically; meaning of intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find approximate solutions graphically)",
  "html": "<p>Two cloud gaming subscriptions are priced as follows. Service A charges a $\\$12$ monthly fee plus $\\$0.80$ per hour played. Service B charges a $\\$4$ monthly fee plus $\\$1.60$ per hour played. (a) Write a system of equations for the monthly costs $C$ in terms of hours $h$, and graph both lines on the same axes. (b) Find the intersection point and explain why its $h$-coordinate is the solution of the equation formed by setting the two cost expressions equal. (c) Recommend a service for a gamer who plays 6 hours per month and for one who plays 15 hours per month.</p>",
  "evidence": "Two cost equations, a labeled graph of both lines, the intersection point with units, a written explanation of why the intersection solves the system, and recommendations justified by the graph",
  "reveals": "Whether the student sees a system's solution as a break-even decision point belonging to both graphs, not just an algebraic answer."
 },
 {
  "id": "S7-4",
  "set": 7,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Subtracting rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Subtracting rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>A game is mirrored on two download servers. After $t$ minutes, Server 1 has delivered the fraction $\\dfrac{t}{t + 2}$ of the game file, and Server 2 has delivered the fraction $\\dfrac{3}{t + 5}$. A network analyst wants a single expression for how much farther ahead Server 1 is than Server 2. (a) Subtract the two rational expressions and simplify the result to a single fraction. (b) State any values of $t$ that must be excluded from the domain of the combined expression, and explain why they are excluded algebraically even though negative time is already meaningless in context.</p>",
  "evidence": "A common-denominator subtraction with correct numerator algebra, a simplified single fraction, and the excluded values with reasoning",
  "reveals": "Whether the student can combine rational expressions accurately — especially distributing the subtraction across the second numerator — and respects domain restrictions created by denominators."
 },
 {
  "id": "S7-5",
  "set": 7,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A VR motion rig swings like a pendulum. Its period $T$ (in seconds) is modeled by $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$, where $L$ is the length of the swing arm in meters and $g = 9.8\\ \\text{m/s}^2$. (a) Rearrange the formula to solve for $L$. (b) The design team wants a period of $1.2$ seconds. Find the required arm length, to the nearest hundredth of a meter.</p>",
  "evidence": "A step-by-step rearrangement that isolates $L$ (including squaring both sides), substitution of $T = 1.2$ and $g = 9.8$, and the final length with units",
  "reveals": "Whether the student can undo a formula containing a square root and a fraction — applying inverse operations in the correct order — and then use the rearranged form for a design target."
 },
 {
  "id": "S7-6",
  "set": 7,
  "n": 6,
  "strand": "Functions",
  "topic": "Graphing logarithmic functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing logarithmic functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts and end behavior)",
  "html": "<p>An audio app visualizes signal levels with the function $f(x) = \\log_2(x + 4) - 1$, where $x$ is a signal index. (a) Sketch the graph of $f$, showing the vertical asymptote, the $x$-intercept, and the $y$-intercept. (b) State the domain and range of $f$. (c) Explain how the graph of $f$ is related to the graph of $y = \\log_2 x$.</p>",
  "evidence": "A sketch with asymptote $x = -4$, intercepts $(-2, 0)$ and $(0, 1)$, domain $x > -4$, range all real numbers, and a transformation description (shift left 4, down 1)",
  "reveals": "Whether the student connects the features of a logarithmic graph — asymptote from the domain restriction, intercepts found by solving — to the shifts applied to the parent function."
 },
 {
  "id": "S7-7",
  "set": 7,
  "n": 7,
  "strand": "Functions",
  "topic": "Graph transformations and even/odd functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Graph transformations and even/odd functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$; recognize even and odd functions from graphs and algebraic expressions)",
  "html": "<p>A sound designer models a bass tone&#x27;s waveform with $f(x) = x^3 - x$. (a) The tone is played at double speed, producing the waveform $g(x) = f(2x)$. Describe precisely how the graph of $g$ differs from the graph of $f$, and write $g(x)$ in simplified form. (b) Determine algebraically whether $f$ is even, odd, or neither, and state what that symmetry means for the waveform&#x27;s graph.</p>",
  "evidence": "Identification of the horizontal compression by a factor of $\\tfrac{1}{2}$, the simplified $g(x) = 8x^3 - 2x$, and an algebraic test using $f(-x)$ concluding $f$ is odd with origin symmetry",
  "reveals": "Whether the student understands that $f(kx)$ acts horizontally (and in the \"opposite\" direction from intuition), and can verify symmetry algebraically rather than guessing from the exponents."
 },
 {
  "id": "S7-8",
  "set": 7,
  "n": 8,
  "strand": "Functions",
  "topic": "Comparing growth of exponential and polynomial functions",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Comparing growth of exponential and polynomial functions — NC.M3.F-LE.3 (observe using graphs and tables that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial function)",
  "html": "<p>A mobile game studio tracks daily players (in hundreds) for two of its titles during launch week and beyond. Title L grows linearly: $L(t) = 500 + 120t$. Title E grows exponentially: $E(t) = 300(1.25)^t$. In both models $t$ is days since launch and the output is hundreds of players. (a) Build a table of values for $t = 0, 1, \\dots, 8$ for both titles. (b) On which day does Title E first pass Title L? (c) Explain, using the table, why the exponential title is guaranteed to stay ahead from some point on even though it started behind.</p>",
  "evidence": "A two-row table of values, the first day the exponential exceeds the linear model, and an explanation contrasting constant differences with constant ratios",
  "reveals": "Whether the student can use tabular evidence to see that constant-ratio growth eventually dominates constant-difference growth, regardless of starting values."
 },
 {
  "id": "S7-9",
  "set": 7,
  "n": 9,
  "strand": "Functions",
  "topic": "Finding the inverse of a function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding the inverse of a function — NC.M3.F-BF.4a (solve an equation of the form $f(x) = c$ for a simple function and find its inverse; find the inverse of a linear function and use it)",
  "html": "<p>A streaming platform awards points for watch time: a viewer&#x27;s total points are $P = 4m + 100$, where $m$ is minutes watched and the extra $100$ points are a one-time sign-up bonus. (a) Find the inverse function that gives minutes watched as a function of total points. (b) Use the inverse to find how many minutes a viewer has watched if they have $900$ points. (c) Explain why the inverse, not the original function, is the right tool for part (b).</p>",
  "evidence": "The inverse $m = \\dfrac{P - 100}{4}$ found by swapping and solving, the evaluation at $P = 900$, and a sentence explaining the reversal of roles of the variables",
  "reveals": "Whether the student understands an inverse as undoing the original process — bonus removed first, then the rate divided out — and chooses it deliberately for a \"reverse\" question."
 },
 {
  "id": "S7-10",
  "set": 7,
  "n": 10,
  "strand": "Functions",
  "topic": "Relating the domain of a function to its context",
  "standards": [
   "NC.M3.F-IF.5"
  ],
  "standardsDetail": "Relating the domain of a function to its context — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes)",
  "html": "<p>A delivery drone&#x27;s battery charge is modeled by $C(t) = 100 - 4t$, where $C$ is the percent of charge remaining and $t$ is hours since takeoff. (a) State the domain of this function as it applies to the drone, and the corresponding range. (b) Explain why the unrestricted line&#x27;s domain (all real numbers) is not appropriate here, referring to both endpoints of the practical domain. (c) How long can the drone stay airborne, according to the model?</p>",
  "evidence": "Domain $0 \\le t \\le 25$ and range $0 \\le C \\le 100$, reasoning about takeoff and battery depletion at the endpoints, and the flight time of 25 hours read from the model",
  "reveals": "Whether the student restricts a mathematical model to the interval where it describes reality, instead of reporting the domain of the abstract line."
 },
 {
  "id": "S7-11",
  "set": 7,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>A subwoofer&#x27;s speaker cone vibrates so that its displacement from rest, in millimeters, is modeled by $p(t) = 2.5\\sin(20\\pi t)$, where $t$ is time in seconds. (a) Identify the amplitude, midline, period, and frequency of the motion, and interpret each in the context of the speaker cone. (b) What is the maximum distance the cone travels from one extreme position to the other during each cycle?</p>",
  "evidence": "Amplitude $2.5$ mm, midline $0$, period $0.1$ s from $\\tfrac{2\\pi}{20\\pi}$, frequency $10$ Hz, contextual interpretations, and a peak-to-peak distance of $5$ mm",
  "reveals": "Whether the student can extract and interpret all four parameters of a sinusoidal model, including deriving frequency as the reciprocal of period."
 },
 {
  "id": "S7-12",
  "set": 7,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A Wi-Fi router&#x27;s coverage area on an office floor plan is described by the equation $x^2 + y^2 - 6x + 4y - 3 = 0$, where coordinates are in meters. (a) Rewrite the equation in standard form and give the router&#x27;s location and coverage radius. (b) A desk sits at $(6, 2)$. Determine whether the desk is inside the coverage area, justifying your answer with a computation.</p>",
  "evidence": "Completing the square on both variables to get $(x - 3)^2 + (y + 2)^2 = 16$, center $(3, -2)$, radius $4$ m, and a distance computation ($5$ m) showing the desk is outside coverage",
  "reveals": "Whether the student can recover geometric information from a general-form circle equation and use distance to make a placement decision."
 },
 {
  "id": "S7-13",
  "set": 7,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles, radii, and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles, radii, and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc / the central angle on the same arc)",
  "html": "<p>A circular esports arena has a center point $O$. Two spotlights at the center form a central angle $\\angle AOB$ of $96^\\circ$, where $A$ and $B$ are points on the arena&#x27;s circular wall. A camera mounted on the wall at point $C$ (on the major arc&#x27;s opposite side, so that it views arc $AB$ from the circle) frames the same two points $A$ and $B$. (a) Find the measure of the inscribed angle $\\angle ACB$. (b) Explain, in terms of arcs, why the inscribed angle has exactly half the measure of the central angle. (c) If the camera were moved to a different point $C&#x27;$ on the same arc, would the angle change? Justify your answer.</p>",
  "evidence": "The value $48^\\circ$, an explanation tying both angles to the measure of arc $AB$, and the conclusion that the angle is unchanged for any $C'$ on the same arc",
  "reveals": "Whether the student understands the inscribed angle theorem as a statement about a shared intercepted arc — including its invariance — rather than a memorized \"divide by 2\" rule."
 },
 {
  "id": "S7-14",
  "set": 7,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure — NC.M3.F-TF.1 (understand radian measure of an angle; the arc length on a unit circle subtended by an angle is its radian measure)",
  "html": "<p>A server-room cooling fan has blades $45$ cm long, measured from the center hub to the tip. During a diagnostic, a blade rotates through $150^\\circ$. (a) Convert $150^\\circ$ to radian measure. (b) Find the exact distance the blade tip travels during this rotation, and give an approximation to the nearest tenth of a centimeter. (c) Explain why the radian measure, not the degree measure, is the one that makes the arc-length computation $s = r\\theta$ work.</p>",
  "evidence": "The conversion $\\tfrac{5\\pi}{6}$ radians, arc length $37.5\\pi \\approx 117.8$ cm from $s = r\\theta$, and an explanation that radians measure the angle as a ratio of arc length to radius",
  "reveals": "Whether the student understands radians as a natural unit defined by arc length, not merely a conversion factor of $\\tfrac{\\pi}{180}$."
 },
 {
  "id": "S7-15",
  "set": 7,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that the measures of the interior angles of a triangle sum to $180^\\circ$)",
  "html": "<p><strong>Proof.</strong> Let $\\triangle ABC$ be any triangle. Through vertex $A$, draw the line $\\ell$ parallel to $\\overleftrightarrow{BC}$, and mark points $D$ and $E$ on $\\ell$ so that $D$–$A$–$E$ are collinear with $D$ on the $B$ side and $E$ on the $C$ side. Prove that the measures of the interior angles of $\\triangle ABC$ sum to $180^\\circ$. Your proof should use the parallel line, alternate interior angles, and the straight angle at $A$.</p>",
  "evidence": "A structured proof (two-column or paragraph) with reasons: alternate interior angles from the parallel lines, the straight-angle sum at $A$ on line $\\ell$, and substitution to conclude $\\angle A + \\angle B + \\angle C = 180^\\circ$",
  "reveals": "Whether the student can build a deductive argument from a construction — transferring the triangle's angles onto a straight line — instead of citing the result as a known fact."
 },
 {
  "id": "S7-16",
  "set": 7,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Solids generated by rotating two-dimensional shapes",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Solids generated by rotating two-dimensional shapes — NC.M3.G-GMD.4 (identify three-dimensional objects generated by rotations of two-dimensional objects, and identify the shapes of two-dimensional cross sections of three-dimensional objects)",
  "html": "<p>A game designer creates 3D power-up shapes by rotating flat regions. A right triangle with legs $3$ cm (horizontal) and $4$ cm (vertical) is rotated a full turn about its vertical leg. (a) Name the solid formed and give its radius and height. (b) Explain how the parts of the triangle determine the parts of the solid. (c) A rectangle $5$ cm by $2$ cm is instead rotated about its $5$-cm side. Name that solid and give its radius and height.</p>",
  "evidence": "A cone with radius $3$ cm and height $4$ cm, reasoning that the axis leg becomes the height and the other leg sweeps the radius, and a cylinder with radius $2$ cm and height $5$ cm",
  "reveals": "Whether the student can mentally sweep a plane figure through space and map its dimensions onto the resulting solid."
 },
 {
  "id": "S7-17",
  "set": 7,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population proportion; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population proportion; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A high school activities council wants to know what percent of all $1{,}800$ students would join a new coding club. They survey a random sample of $200$ students, and $74$ say they would join. To estimate sampling variability, the council runs a simulation of $500$ random samples of size $200$ (using the sample proportion as the assumed population proportion); the middle $95\\%$ of the simulated sample proportions fall between $0.305$ and $0.435$. (a) Compute the sample proportion. (b) Give an interval of plausible values for the true percent of all students who would join, based on the simulation. (c) The council can fund the club only if at least $30\\%$ of all students would join. Does the simulation justify funding the club? Explain. (d) Why does the council base the decision on the simulated samples rather than on the single survey alone?</p>",
  "evidence": "The sample proportion, a plausible interval read from the simulation's middle-95% range, a funding decision justified by comparing the interval's lower end with the 30% threshold, and an explanation of sampling variability",
  "reveals": "Whether the student can read a plausible interval directly from simulation percentiles and connect sampling variability to a real funding decision, instead of relying on one point estimate."
 },
 {
  "id": "S7-18",
  "set": 7,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A collectible game token is cast as a solid brass cylinder with radius $2$ cm and thickness $0.5$ cm. Brass has a density of $8.5\\ \\text{g/cm}^3$. (a) Find the volume of one token. (b) Find the mass of one token. (c) A shipping box holds $200$ tokens. Find the total mass of the tokens in the box, in kilograms, and comment on whether the box can be shipped under a $12$ kg weight limit for contents.</p>",
  "evidence": "Volume $2\\pi \\approx 6.28\\ \\text{cm}^3$ from the cylinder formula, mass $\\approx 53.4$ g from density $\\times$ volume, total $\\approx 10.7$ kg, and a comparison to the $12$ kg limit",
  "reveals": "Whether the student can chain a volume computation into a density model and carry the result through a unit conversion to a practical decision."
 },
 {
  "id": "S7-19",
  "set": 7,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>A gaming blog publishes the headline &quot;Energy Drinks Make Gamers Faster, Study Proves.&quot; The article describes a study in which researchers recruited $60$ gamers, recorded which of them regularly drank energy drinks and which did not, and measured everyone&#x27;s reaction time in a racing game. The regular energy-drink users averaged faster reaction times, and the blog concludes that drinking energy drinks causes faster reactions. (a) Identify the type of study conducted and explain how you know. (b) Give two specific reasons the causal conclusion is not justified. (c) Describe one change to the study design that would allow a causal conclusion.</p>",
  "evidence": "Classification as an observational study (no treatment assigned), two valid critiques such as self-selection and confounding variables (sleep, experience, practice), and a redesign using random assignment to drink or no-drink conditions",
  "reveals": "Whether the student can distinguish association from causation and pinpoint exactly which design feature — random assignment — a causal claim requires."
 },
 {
  "id": "S7-20",
  "set": 7,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A streamer&#x27;s studio has a spherical glass water tank (used for a cooling display) with radius $25$ cm. (a) Find the exact volume of the tank and an approximation to the nearest tenth of a cubic centimeter. (b) Convert the volume to liters ($1\\ \\text{L} = 1{,}000\\ \\text{cm}^3$) and state how many liters of water the tank holds, to the nearest tenth.</p>",
  "evidence": "Volume $\\dfrac{62{,}500\\pi}{3} \\approx 65{,}449.8\\ \\text{cm}^3$ from $V = \\tfrac{4}{3}\\pi r^3$, and the conversion to about $65.4$ L",
  "reveals": "Whether the student can apply the sphere volume formula with a cubed radius accurately and manage a large-volume unit conversion in context."
 },
 {
  "id": "S8-1",
  "set": 8,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations; extraneous solutions",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations; extraneous solutions — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>A baker is enlarging a square display tray for a bake sale. The design software links the tray&#x27;s side length $x$ (in inches) to the length of a diagonal support brace through the equation $\\sqrt{x + 7} = x - 5$. (a) Solve the equation. (b) One of the algebraic solutions does not satisfy the original equation — identify it and explain why it appeared. (c) State the tray&#x27;s side length.</p>",
  "evidence": "Squaring both sides, solving the resulting quadratic, checking both candidates in the original equation, and identifying the extraneous solution with a reason tied to the square root's nonnegative output",
  "reveals": "Whether the student understands that squaring can introduce solutions and that checking against the original equation — including the sign condition on the right side — is part of solving, not an optional extra."
 },
 {
  "id": "S8-2",
  "set": 8,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Adding complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Adding complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$)",
  "html": "<p>For the school theater&#x27;s lighting rig, the impedance of each stage circuit is modeled by a complex number, and circuits wired in series have impedances that add. Circuit 1 has impedance $Z_1 = 5 + 3i$ ohms and Circuit 2 has impedance $Z_2 = 2 - 7i$ ohms. (a) Find the total impedance of the two circuits in series, in $a + bi$ form. (b) Interpret the real and imaginary parts of the total in the context of the circuit model (real part: resistance; imaginary part: net reactance).</p>",
  "evidence": "Component-wise addition of real and imaginary parts giving $7 - 4i$ ohms, with a contextual reading of both components",
  "reveals": "Whether the student treats a complex number as a two-component quantity and combines like components — the foundation for all complex arithmetic — while keeping the model meaning attached."
 },
 {
  "id": "S8-3",
  "set": 8,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder on division by $x - a$ is $P(a)$)",
  "html": "<p>The profit from a school carnival game booth, in hundreds of dollars, is modeled by $P(x) = 2x^3 - 3x^2 - 8x + 12$, where $x$ is the ticket price in dollars. (a) Use the Remainder Theorem to evaluate $P(2)$ without long division. (b) Based on your result, is $(x - 2)$ a factor of $P(x)$? Explain. (c) Interpret $P(2)$ in the context of the carnival.</p>",
  "evidence": "The statement that the remainder on dividing by $x - 2$ equals $P(2)$, the evaluation $P(2) = 0$, the factor conclusion, and the interpretation that a $\\$2$ ticket price is a break-even point",
  "reveals": "Whether the student can use the theorem as a shortcut with understanding — linking evaluation, remainder, and factor status — rather than performing division mechanically."
 },
 {
  "id": "S8-4",
  "set": 8,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Multiplying rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Multiplying rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>A cooking app chains two scaling factors when converting a recipe. The combined scaling is modeled by the product $\\dfrac{x^2 - 9}{x + 4} \\cdot \\dfrac{x + 4}{x - 3}$, where $x$ is a batch-size parameter. (a) Multiply the rational expressions and simplify the result. (b) State all values of $x$ that must be excluded from the domain of the original product, including any that disappear during simplification.</p>",
  "evidence": "Factoring $x^2 - 9$ as a difference of squares, canceling common factors, the simplified result $x + 3$, and exclusions $x \\neq -4$ and $x \\neq 3$",
  "reveals": "Whether the student simplifies by factoring first and remembers that canceled factors still restrict the domain of the original expression."
 },
 {
  "id": "S8-5",
  "set": 8,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Polynomial identities extended to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Polynomial identities extended to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers, e.g., factor a sum of squares)",
  "html": "<p>An engineering class analyzing a square garden planter&#x27;s support frame encounters the expression $x^2 + 25$, which never equals zero for any real number $x$. (a) Factor $x^2 + 25$ over the complex numbers. (b) Find all complex solutions of $x^2 + 25 = 0$. (c) Explain why the graph of $y = x^2 + 25$ has no $x$-intercepts, connecting the algebra to the graph.</p>",
  "evidence": "The factorization $(x + 5i)(x - 5i)$, the solutions $x = \\pm 5i$, and an explanation that the parabola's minimum value is $25 > 0$, so it never crosses the $x$-axis",
  "reveals": "Whether the student can extend the difference-of-squares identity to a sum of squares using $i$, and reconcile \"no real roots\" with a complete pair of complex roots."
 },
 {
  "id": "S8-6",
  "set": 8,
  "n": 6,
  "strand": "Functions",
  "topic": "Evaluating functions; creating and solving equations",
  "standards": [
   "NC.M3.F-IF.2",
   "NC.M3.A-CED.1"
  ],
  "standardsDetail": "Evaluating functions; creating and solving equations — NC.M3.F-IF.2 (evaluate functions for inputs in their domains; interpret statements that use function notation in context), NC.M3.A-CED.1 (create and solve equations in one variable arising from a linear function)",
  "html": "<p>A school concession stand models its profit by $P(x) = 2.5x - 180$, where $x$ is the number of hot dogs sold and $P$ is profit in dollars. (a) Find $P(120)$ and interpret the statement in context. (b) Create and solve an equation to find how many hot dogs the stand must sell to make a profit of $\\$270$. (c) In one sentence, explain what the $-180$ represents in this situation.</p>",
  "evidence": "The evaluation $P(120) = 120$ with an interpretation, the equation $2.5x - 180 = 270$ solved to $x = 180$, and the fixed-cost interpretation of $-180$",
  "reveals": "Whether the student moves fluently in both directions — input to output by evaluation, output to input by building and solving an equation — and reads the model's parameters as real costs."
 },
 {
  "id": "S8-7",
  "set": 8,
  "n": 7,
  "strand": "Functions",
  "topic": "Building a function from a context using an explicit expression",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building a function from a context using an explicit expression — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities, determining an explicit expression or a recursive process from a context)",
  "html": "<p>For a school awards ceremony in the auditorium, the first row has $12$ seats, and each row after the first has $2$ more seats than the row before it. (a) Write an explicit expression for the number of seats $a(n)$ in row $n$. (b) How many seats are in row $15$? (c) Which row has exactly $34$ seats?</p>",
  "evidence": "The explicit formula $a(n) = 12 + 2(n - 1) = 2n + 10$, evaluation $a(15) = 40$, and solving $2n + 10 = 34$ to get row $12$",
  "reveals": "Whether the student can translate a \"starts at, grows by\" pattern into an explicit formula with the correct first-term adjustment, then use it in both directions."
 },
 {
  "id": "S8-8",
  "set": 8,
  "n": 8,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when suitable factorizations are available and showing end behavior)",
  "html": "<p>At a STEM fair, a student uses the function $f(x) = (x + 2)(x - 1)(x - 4)$ as the profile of a model roller-coaster track, where $x$ is horizontal distance in meters and $f(x)$ is height in meters. (a) Identify the zeros of $f$ and explain what they mean for the track. (b) Find the $y$-intercept. (c) Describe the end behavior of the graph. (d) Sketch the graph, using the zeros, the $y$-intercept, and the end behavior.</p>",
  "evidence": "Zeros $-2$, $1$, $4$ interpreted as ground-level crossings, $y$-intercept $8$, end behavior (left end down, right end up for an odd-degree positive-leading-coefficient cubic), and a sketch consistent with all features",
  "reveals": "Whether the student assembles a polynomial's graph from its factored structure — roots, intercept, and end behavior — instead of plotting random points."
 },
 {
  "id": "S8-9",
  "set": 8,
  "n": 9,
  "strand": "Functions",
  "topic": "Reading values of an inverse function from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading values of an inverse function from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>A cafeteria baker uses a function $f$ that gives the baking time in minutes for $x$ dozen cookies:</p>\n<table>\n<tr><th>$x$ (dozen cookies)</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>\n<tr><td>$f(x)$ (minutes)</td><td>18</td><td>24</td><td>30</td><td>36</td></tr>\n</table>\n<p>(a) Find $f(2)$ and interpret it. (b) Find $f^{-1}(30)$ and interpret it in context. (c) Explain in one sentence what the inverse function $f^{-1}$ takes as input and gives as output.</p>",
  "evidence": "$f(2) = 24$ minutes for $2$ dozen cookies, $f^{-1}(30) = 3$ interpreted as $30$ minutes corresponding to $3$ dozen cookies, and a statement that $f^{-1}$ reverses minutes to dozens",
  "reveals": "Whether the student understands inverse notation as a lookup in the opposite direction through the same table, with the units swapping roles."
 },
 {
  "id": "S8-10",
  "set": 8,
  "n": 10,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm and evaluate using technology; solve exponential equations)",
  "html": "<p>A sourdough starter culture in the culinary classroom grows according to $N(t) = 800(1.35)^t$, where $N$ is the number of yeast cells (in thousands) and $t$ is hours since feeding. (a) Write the equation that must be solved to find when the culture reaches $10{,}000$ thousand cells. (b) Express the solution using a logarithm and evaluate it with a calculator, to the nearest hundredth of an hour. (c) Interpret the result in context.</p>",
  "evidence": "The equation $800(1.35)^t = 10{,}000$, isolation of $(1.35)^t = 12.5$, the logarithmic form $t = \\dfrac{\\log 12.5}{\\log 1.35}$, and $t \\approx 8.42$ hours with interpretation",
  "reveals": "Whether the student understands a logarithm as the tool that \"undoes\" an exponential to free a variable exponent, and can carry an applied growth question all the way to a usable time."
 },
 {
  "id": "S8-11",
  "set": 8,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed and circumscribed circles of a triangle",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed and circumscribed circles of a triangle — NC.M3.G-C.3 (construct and justify inscribed and circumscribed circles of a triangle; find angle measures in inscribed quadrilaterals)",
  "html": "<p>At a school festival, three food stands are located at the vertices of a triangle on the festival map: $A(0, 0)$, $B(6, 0)$, and $C(2, 4)$, with coordinates in meters. The festival committee wants to place a water station at a point equidistant from all three stands. (a) Explain why the perpendicular bisectors of the triangle&#x27;s sides all pass through the point the committee wants, and why that point is the center of the circle passing through $A$, $B$, and $C$. (b) Find the coordinates of the water station and the radius of that circumscribed circle.</p>",
  "evidence": "A justification that any point on a perpendicular bisector is equidistant from the segment's endpoints, so the intersection of two bisectors is equidistant from all three vertices (the circumcenter), plus the computation giving center $(3, 1)$ and radius $\\sqrt{10} \\approx 3.16$ m",
  "reveals": "Whether the student can justify the circumcenter construction from the perpendicular-bisector property and then carry out the coordinate computation it guarantees."
 },
 {
  "id": "S8-12",
  "set": 8,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>A swinging pirate-ship ride at the school carnival swings back and forth like a pendulum. The ship&#x27;s angle from vertical, in degrees, $t$ seconds after it passes the vertical position moving forward is modeled by $\\theta(t) = 36\\sin\\left(\\dfrac{\\pi}{5}t\\right)$. (a) Identify the amplitude, midline, and period of the model, and interpret each for the ride. (b) What is the greatest angle from vertical the ship reaches? (c) At what time does the ship first reach $18^\\circ$ from vertical? (d) How many complete back-and-forth swings does the ship make in $50$ seconds?</p>",
  "evidence": "Amplitude and midline interpreted as physical quantities, the period computed from the coefficient of $t$, a sine equation solved for the first $18^\\circ$ crossing, and a swing count from the period",
  "reveals": "Whether the student reads a sine model as physical swinging motion — maximum displacement, rest position, and cycle time — and uses the model to locate events within the cycle."
 },
 {
  "id": "S8-13",
  "set": 8,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>For a science-fair solar cooker, a student builds a parabolic dish whose receiver (where the cooking pot sits) is at the focus $(0, 2)$ and whose directrix is the line $y = -2$, with all measurements in inches and the vertex at the origin. (a) Derive the equation of the parabola from the focus and directrix. (b) How wide is the dish at the height of the focus (the latus rectum)? (c) The dish is $18$ inches wide at its rim. How deep is the dish?</p>",
  "evidence": "The derivation setting distance-to-focus equal to distance-to-directrix, giving $x^2 = 8y$; width at the focus of $8$ inches; depth found by substituting the rim half-width $x = 9$ into the equation",
  "reveals": "Whether the student can build a conic's equation from its geometric definition and then use the equation to answer design questions about width and depth."
 },
 {
  "id": "S8-14",
  "set": 8,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area using radian measure",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area using radian measure — NC.M3.G-C.5 (derive, using similarity, the fact that the length of the arc intercepted by an angle is proportional to the radius; define radian measure; derive and use the sector-area formula $A = \\frac{1}{2}r^2\\theta$)",
  "html": "<p>A pizza with a diameter of $12$ inches is cut so that one slice has a central angle of $50^\\circ$. (a) Convert $50^\\circ$ to radian measure. (b) Find the area of the slice (the sector), exactly in terms of $\\pi$ and approximately to the nearest tenth of a square inch. (c) Find the length of the slice&#x27;s crust (the arc), to the nearest tenth of an inch.</p>",
  "evidence": "Conversion to $\\tfrac{5\\pi}{18}$ radians, sector area $5\\pi \\approx 15.7\\ \\text{in}^2$ from $A = \\tfrac12 r^2\\theta$ with $r = 6$, and arc length $\\tfrac{5\\pi}{3} \\approx 5.2$ in from $s = r\\theta$",
  "reveals": "Whether the student works fluently in radians — halving the diameter correctly and applying both the arc-length and sector-area formulas to the same slice."
 },
 {
  "id": "S8-15",
  "set": 8,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that the diagonals of a parallelogram bisect each other and its converse)",
  "html": "<p><strong>Proof.</strong> Let $ABCD$ be a parallelogram with vertices in order, and let its diagonals $\\overline{AC}$ and $\\overline{BD}$ intersect at point $E$. Prove that the diagonals bisect each other, that is, $AE = EC$ and $BE = ED$. Your proof should use congruent triangles, with the parallel sides of the parallelogram providing alternate interior angles.</p>",
  "evidence": "A structured proof showing $\\triangle AEB \\cong \\triangle CED$ (ASA: alternate interior angles at $A$/$C$ and $B$/$D$, and opposite sides $AB = CD$), concluding $AE = EC$ and $BE = ED$ by CPCTC",
  "reveals": "Whether the student can convert a geometric claim into a congruent-triangle argument, choosing the angle and side facts that a parallelogram actually provides."
 },
 {
  "id": "S8-16",
  "set": 8,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with composite geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with composite geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A school garden plot is shaped like a rectangle $10$ m long by $6$ m wide with a semicircle attached to one of the $6$-m ends (the semicircle&#x27;s diameter is the $6$-m end, and it extends outward). (a) Find the total area of the plot. (b) Mulch is sold in bags that each cover $8\\ \\text{m}^2$. How many bags must the garden club buy to cover the whole plot?</p>",
  "evidence": "Rectangle area $60\\ \\text{m}^2$ plus semicircle area $\\tfrac{1}{2}\\pi(3)^2 = 4.5\\pi \\approx 14.14\\ \\text{m}^2$ for a total of about $74.1\\ \\text{m}^2$, and rounding $74.1 \\div 8 \\approx 9.27$ up to $10$ bags",
  "reveals": "Whether the student decomposes a real shape into standard pieces, identifies the semicircle's radius from the shared side, and rounds a purchase quantity up rather than to the nearest integer."
 },
 {
  "id": "S8-17",
  "set": 8,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Randomization in surveys and experiments",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Randomization in surveys and experiments — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A school district is studying two questions. <strong>Study A:</strong> To learn how students rate the cafeteria food, the district randomly selects $60$ students from the enrollment list and surveys them. <strong>Study B:</strong> To learn whether a new lunch menu improves satisfaction, the district randomly assigns $60$ student volunteers to eat either the new menu or the current menu for two weeks, then compares the two groups&#x27; satisfaction ratings. (a) Which study uses random selection, and which uses random assignment? (b) Which study&#x27;s results can be generalized to all students in the district, and why? (c) Which study can support a conclusion that the new menu <em>causes</em> higher satisfaction, and why?</p>",
  "evidence": "Study A identified with random selection and Study B with random assignment; generalization tied to A's random selection from the population; causal conclusion tied to B's random assignment balancing the groups",
  "reveals": "Whether the student keeps the two roles of randomization separate — selection for generalizing, assignment for causing — instead of treating \"random\" as one interchangeable idea."
 },
 {
  "id": "S8-18",
  "set": 8,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>At the school fair, a snow-cone cup is a cone with radius $3$ cm and height $12$ cm. (a) Find the exact volume of the cup and an approximation to the nearest tenth of a cubic centimeter. (b) The vendor fills the cup level with shaved ice. How many milliliters of ice does one serving use ($1\\ \\text{cm}^3 = 1\\ \\text{mL}$)? (c) How many full servings can the vendor make from a $10$-liter block of ice, assuming no waste?</p>",
  "evidence": "Volume $36\\pi \\approx 113.1\\ \\text{cm}^3$ from $V = \\tfrac{1}{3}\\pi r^2 h$, the direct conversion to $113.1$ mL, and $10{,}000 \\div 113.1 \\approx 88.4$, so $88$ full servings",
  "reveals": "Whether the student applies the cone formula (including the $\\tfrac13$) accurately and converts a volume into a practical count of servings, rounding down for \"full\" servings."
 },
 {
  "id": "S8-19",
  "set": 8,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments in a randomized experiment using simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments in a randomized experiment using simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>For a school bake-off, $40$ volunteer judges were randomly assigned to taste-test one of two frostings: $20$ judged the new recipe and $20$ judged the original. Mean liking scores (out of $10$) were $7.8$ for the new recipe and $7.3$ for the original, a difference of $0.5$ points in favor of the new recipe. To test whether this difference is meaningful, the organizer ran a simulation: in $500$ random reassignments of the scores to two groups of $20$, a difference of $0.5$ or more in either direction occurred in $105$ of the trials. (a) State the observed difference and what the simulation was designed to model. (b) Using the simulation results, decide whether the difference is statistically significant at the $5\\%$ level. (c) State the conclusion the bake-off organizer should draw about the two frostings.</p>",
  "evidence": "Observed difference $0.5$, recognition that the simulation models differences from random assignment alone (no real treatment effect), the proportion $\\tfrac{105}{500} = 21\\%$ exceeding $5\\%$, a \"not significant\" decision, and the conclusion that the data do not show the new frosting is preferred",
  "reveals": "Whether the student can judge an experimental difference against the variability that chance assignment alone produces — and accept a non-significant result rather than declaring a winner."
 },
 {
  "id": "S8-20",
  "set": 8,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Applying geometric methods to solve design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Applying geometric methods to solve design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including minimizing cost/materials under constraints)",
  "html": "<p>A school club is building a rectangular outdoor seating area for a festival, using an existing wall as one of the long sides, so fencing is needed on only three sides. Fencing costs $\\$10$ per meter, and the club&#x27;s budget for fencing is $\\$360$. (a) How many meters of fencing can the club buy? (b) Let $x$ be the length (in meters) of each of the two fenced sides perpendicular to the wall. Write the area of the seating area as a function of $x$. (c) Find the dimensions that maximize the area, and state the maximum area.</p>",
  "evidence": "$36$ m of fencing from the budget, the third side $36 - 2x$ and area $A(x) = x(36 - 2x) = -2x^2 + 36x$, the vertex at $x = 9$ giving sides $9$ m by $18$ m, and maximum area $162\\ \\text{m}^2$",
  "reveals": "Whether the student can translate a budget into a physical constraint, build a quadratic area model from it, and optimize using the vertex — the full modeling cycle in one design problem."
 },
 {
  "id": "S9-1",
  "set": 9,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Zeros and graphs of polynomials",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros and graphs of polynomials — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph; include end behavior)",
  "html": "<p>A town models the net inflow of water into a community reservoir, in thousands of gallons per day, by $P(t) = t^3 - 4t^2 - 11t + 30$, where $t$ is the number of days after a new intake valve is opened. (a) Factor $P(t)$ completely and identify all of its zeros. (b) Interpret the zeros that fall in the domain $t \\geq 0$. (c) Describe the end behavior of the graph and sketch a rough graph of $P$ for $t \\geq 0$, labeling the intercepts.</p>",
  "evidence": "A complete factorization, the three zeros, an interpretation of the nonnegative zeros in context, an end-behavior statement, and a labeled rough sketch",
  "reveals": "Whether the student can move fluidly between a polynomial's factored form, its zeros, and the shape of its graph — and judge which algebraic results are meaningful in the situation."
 },
 {
  "id": "S9-2",
  "set": 9,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Solving rational equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving rational equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>The members of a community garden association agree to share equally the $600 cost of a new compost system. (a) If $x$ members share the cost, write an expression for each member&#x27;s share. (b) The treasurer notes that if 5 more members join, each member&#x27;s share drops by exactly $10. Write a rational equation for this situation and solve it, showing how you handle any solution that does not make sense in context. (c) State the original number of members and each member&#x27;s original share.</p>",
  "evidence": "A rational equation, a cleared-denominator solution with both algebraic roots shown, an explicit rejection of the invalid root with a reason, and the final count and dollar share",
  "reveals": "Whether the student can build a rational equation from a sharing situation and understands that algebraic solutions must be screened against the domain and the context."
 },
 {
  "id": "S9-3",
  "set": 9,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Quotients of complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Quotients of complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; find conjugates and use them to find quotients of complex numbers)",
  "html": "<p>In the alternating-current circuit of a community solar microgrid, impedances are written as complex numbers. The voltage across one component is $V = 8 + 6i$ volts and the current through it is $I = 3 - i$ amperes, so the impedance is $Z = \\dfrac{V}{I}$. Find $Z$ in the form $a + bi$, and state the real and imaginary parts of the impedance in ohms.</p>",
  "evidence": "A computation that multiplies numerator and denominator by the conjugate of the denominator, simplifies using $i^2 = -1$, and reports $Z$ in $a + bi$ form with units",
  "reveals": "Whether the student understands why the conjugate produces a real denominator and can carry out complex division accurately."
 },
 {
  "id": "S9-4",
  "set": 9,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Dividing rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Dividing rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>A community orchard&#x27;s packing cooperative compares two cost models, and the comparison reduces to dividing one rational expression by another: $\\dfrac{2x^2 - 8}{x^2 - x - 6} \\div \\dfrac{x + 2}{x - 3}$, where $x$ is a production setting that must keep every denominator nonzero. Perform the division, simplify the result completely, and state all values of $x$ that must be excluded.</p>",
  "evidence": "A rewritten product (multiply by the reciprocal), complete factoring, cancellation of common factors, a simplified result, and the full list of excluded values gathered from every denominator that appears",
  "reveals": "Whether the student treats rational expressions with the same discipline as rational numbers — factoring before canceling and tracking restrictions from the original expressions, not just the final one."
 },
 {
  "id": "S9-5",
  "set": 9,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Interpreting expressions in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting expressions in context — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression such as terms, factors, and coefficients)",
  "html": "<p>A town&#x27;s tree-planting program has total cost, in dollars, modeled by $C(x) = 0.25x^2 + 18x + 250$, where $x$ is the number of trees planted. (a) Interpret each part of the expression in context: the constant term, the coefficient 18, and the term $0.25x^2$ — including what it means that the last term grows quadratically rather than linearly. (b) Find the total cost of planting 40 trees.</p>",
  "evidence": "A plain-language interpretation of each term with correct units, an explanation of the effect of the squared term, and a correct evaluation of $C(40)$",
  "reveals": "Whether the student reads an algebraic expression as a description of a real cost structure instead of a string of symbols."
 },
 {
  "id": "S9-6",
  "set": 9,
  "n": 6,
  "strand": "Functions",
  "topic": "Comparing functions in different representations",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing functions in different representations — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way — algebraically and in a table)",
  "html": "<p>Two rooftop solar arrays supply a community recreation center. Array A&#x27;s output, in kilowatt-hours per month, is modeled by $A(t) = 120 + 15t$, where $t$ is the number of months since installation. Array B&#x27;s actual output is recorded in the table.</p>\n<table>\n<tr><th>$t$ (months)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>\n<tr><td>$B(t)$ (kWh)</td><td>100</td><td>118</td><td>136</td><td>154</td><td>172</td></tr>\n</table>\n<p>(a) State each array&#x27;s initial output and average monthly increase. (b) Which array produces more energy in month 4, and by how much? (c) Assuming both trends continue, in which month does Array B first produce more than Array A? Justify your answer.</p>",
  "evidence": "Initial values and rates read from both representations, a month-4 comparison with a difference, and an inequality or table extension that pinpoints the first month B exceeds A",
  "reveals": "Whether the student can extract the same features (starting value, rate of change) from an equation and from a table and use them to make a prediction."
 },
 {
  "id": "S9-7",
  "set": 9,
  "n": 7,
  "strand": "Functions",
  "topic": "Verifying inverses by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverses by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A community weather station converts temperatures with $f(x) = \\frac{9}{5}x + 32$, which takes a temperature $x$ in degrees Celsius and returns degrees Fahrenheit. A volunteer claims the inverse conversion is $g(x) = \\frac{5}{9}(x - 32)$. Verify the claim by computing both $f(g(x))$ and $g(f(x))$, simplifying each completely, and explain what the results prove.</p>",
  "evidence": "Both compositions carried out and simplified to $x$, plus a sentence explaining why getting $x$ from both orders confirms the functions are inverses",
  "reveals": "Whether the student knows that inverse functions must undo each other in both directions, not just one, and can execute the algebra cleanly."
 },
 {
  "id": "S9-8",
  "set": 9,
  "n": 8,
  "strand": "Functions",
  "topic": "Key features of graphs and tables in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of graphs and tables in context — NC.M3.F-IF.4 (interpret intercepts, intervals of increase/decrease, and average rate of change in terms of the context)",
  "html": "<p>During a storm, the water depth in a community retention pond is monitored. The table gives the depth $D$, in feet, $t$ hours after monitoring begins.</p>\n<table>\n<tr><th>$t$ (hours)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr>\n<tr><td>$D(t)$ (feet)</td><td>2.0</td><td>3.4</td><td>4.6</td><td>5.2</td><td>5.2</td><td>4.8</td><td>4.0</td><td>3.2</td><td>2.6</td></tr>\n</table>\n<p>(a) What is the depth when monitoring begins, and what feature of the function does this represent? (b) Over what intervals is the depth increasing, constant, and decreasing? (c) What is the maximum depth, and during what period does it occur? (d) Find the average rate of change of the depth over the first 3 hours and interpret it in context.</p>",
  "evidence": "The initial value identified as the vertical intercept with its meaning, correct intervals for increasing/constant/decreasing, the maximum with its time window, and an average rate of change with units and an interpretation",
  "reveals": "Whether the student can read a function's behavior off data and translate each feature back into the physical situation."
 },
 {
  "id": "S9-9",
  "set": 9,
  "n": 9,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to build a function that models a context)",
  "html": "<p>A greenway&#x27;s planted area comes from two sections. The wildflower section covers $W(t) = 120 + 30t$ square meters $t$ years after planting, and the shrub section covers $S(t) = 2t^2 + 50$ square meters. (a) Build a function $T(t)$ for the total planted area by combining $W$ and $S$, and explain why addition is the correct operation here. (b) Find the total planted area after 4 years. (c) A grant requires the total area to reach at least 500 square meters. Using your function, determine whether the greenway qualifies after 5 years.</p>",
  "evidence": "A combined function $T(t) = W(t) + S(t)$ simplified into one expression, correct evaluations at $t = 4$ and $t = 5$ with units, and a yes/no grant conclusion tied to the numbers",
  "reveals": "Whether the student can assemble a model from component models and use the combined function to answer a decision question."
 },
 {
  "id": "S9-10",
  "set": 9,
  "n": 10,
  "strand": "Functions",
  "topic": "Exponential growth eventually exceeds polynomial growth",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Exponential growth eventually exceeds polynomial growth — NC.M3.F-LE.3 (observe using graphs and tables that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial function)",
  "html": "<p>An invasive algae spreads across a community pond. Its coverage is modeled by $E(t) = 3 \\cdot 2^t$ square meters, where $t$ is weeks. A native plant restored by volunteers spreads more slowly, covering $P(t) = t^2 + 4t + 10$ square meters. (a) Build a table of both coverages for $t = 0, 1, 2, 3, 4, 5, 6$. (b) In which week does the algae&#x27;s coverage first exceed the native plant&#x27;s coverage? (c) Explain, using your table, why the exponential model was guaranteed to eventually overtake the polynomial model even though it started far behind.</p>",
  "evidence": "A correct two-row table, the first week the exponential value is larger, and an explanation referencing constant-ratio growth versus polynomial growth",
  "reveals": "Whether the student grasps the long-run dominance of exponential growth as a structural fact, supported by numerical evidence rather than assertion."
 },
 {
  "id": "S9-11",
  "set": 9,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "The unit circle and extending trigonometric functions",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "The unit circle and extending trigonometric functions — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise around the unit circle; explain signs and periodicity)",
  "html": "<p>A blade of a community wind turbine rotates counterclockwise, and a marker on the blade makes an angle $\\theta$ with the positive horizontal axis. (a) For $\\theta = \\frac{5\\pi}{6}$, find the exact values of $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$, state the quadrant in which the marker sits, and explain the signs of the values using the unit circle. (b) Repeat for $\\theta = \\frac{7\\pi}{4}$. (c) The blade keeps turning to $\\theta = \\frac{13\\pi}{6}$. Without a calculator, find $\\sin\\theta$ and explain which earlier result it must match and why.</p>",
  "evidence": "Exact values for both angles, quadrant identifications, sign explanations tied to the coordinates of the point on the unit circle, and a periodicity argument for part (c)",
  "reveals": "Whether the student understands trigonometric values as coordinates on the unit circle — including signs and full-turn periodicity — rather than as calculator outputs."
 },
 {
  "id": "S9-12",
  "set": 9,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and their intercepted arcs",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and their intercepted arcs — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>A circular community amphitheater has a stage whose endpoints are points $A$ and $B$ on the circle. A seat at point $P$ on the circle faces the stage, and the angle formed at the seat, $\\angle APB$, measures $38^\\circ$. (a) Find the measure of arc $AB$. (b) Find the measure of the central angle $\\angle AOB$, where $O$ is the center of the circle. (c) A second seat at point $Q$, on the same side arc as $P$, also faces the stage. Find $\\angle AQB$ and explain why it has that measure.</p>",
  "evidence": "The arc measure obtained by doubling the inscribed angle, the equal central angle, and the second inscribed angle with a justification based on both angles intercepting the same arc",
  "reveals": "Whether the student can coordinate the three linked quantities — inscribed angle, central angle, and arc — instead of memorizing a single formula."
 },
 {
  "id": "S9-13",
  "set": 9,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving the equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Deriving the equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem / distance formula; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A town&#x27;s emergency alert siren, mounted at the point $(2, -3)$ on a coordinate map (units in miles), is heard clearly out to a fixed radius. A farmhouse at $(6, 0)$ sits exactly on the boundary of the coverage region. (a) Use the distance formula to derive the equation of the circle that bounds the coverage region. (b) A second home is at $(-1, 1)$. Determine whether it lies inside, on, or outside the coverage boundary, showing the computation that decides it.</p>",
  "evidence": "A radius computed from the distance formula, the circle's equation in center–radius form, and a distance comparison that classifies the second home",
  "reveals": "Whether the student sees a circle's equation as a distance statement and can use it to make a location decision."
 },
 {
  "id": "S9-14",
  "set": 9,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena with trigonometric functions",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena with trigonometric functions — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>The water depth at a community pier, in feet, $t$ hours after midnight is modeled by $D(t) = 5 + 2.5\\cos\\left(\\frac{\\pi}{6}t\\right)$. (a) State the midline, amplitude, and period of the depth, and interpret each in context. (b) Find the maximum and minimum depths and the first time after midnight that the minimum occurs. (c) Find the depth at 3:00 AM and explain the computation.</p>",
  "evidence": "All three parameters named with contextual meanings, extreme values with times, and a correct evaluation at $t = 3$ tied to the value of the cosine",
  "reveals": "Whether the student can read a sinusoidal model as a physical cycle — center, swing, and repeat time — and evaluate it at a specific moment."
 },
 {
  "id": "S9-15",
  "set": 9,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the base angles of an isosceles triangle)",
  "html": "<p>The gable end of a community pavilion is an isosceles triangle. In the diagram, triangle $ABC$ has $AB \\cong AC$, with $A$ at the apex and $BC$ as the horizontal base. The builder draws the bisector of $\\angle A$ and labels its intersection with $BC$ as point $D$. Prove that the base angles are congruent: $\\angle B \\cong \\angle C$.</p>",
  "evidence": "A structured proof (two-column or paragraph) that establishes $\\triangle ABD \\cong \\triangle ACD$ with a named congruence criterion and concludes with CPCTC",
  "reveals": "Whether the student can construct a deductive argument — choosing an auxiliary segment, applying a congruence criterion, and finishing with CPCTC — rather than measuring or asserting."
 },
 {
  "id": "S9-16",
  "set": 9,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean with a simulation-based margin of error",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean with a simulation-based margin of error — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A town wants to estimate the average amount of recycling, in kilograms per week, produced by its households. A random sample of 40 households averaged 8.4 kg per week. To gauge the accuracy of this estimate, the town simulated 200 random samples of 40 households from a model population; the simulated sample means had a standard deviation of 0.6 kg, and about 95% of them fell between 7.2 kg and 9.6 kg. (a) Using the rule that the margin of error is about two standard deviations of the simulated sample means, compute the margin of error. (b) Give the interval of plausible values for the true mean recycling weight. (c) The town council wants to claim that households average more than 7 kg per week. Is that claim reasonable? Explain using your interval.</p>",
  "evidence": "A margin of error computed as roughly two simulation standard deviations, a correctly built interval around 8.4 kg, and a claim judgment based on whether the whole interval clears 7 kg",
  "reveals": "Whether the student understands margin of error as a measure of sampling variability — derived from simulation — and can use an interval, not a single number, to judge a claim."
 },
 {
  "id": "S9-17",
  "set": 9,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A town currently has 18,400 residents spread over 8.0 square miles. A proposed development would add 1,150 residents on 0.25 square miles of land at the town&#x27;s edge. (a) Find the town&#x27;s current population density. (b) Find the population density of the proposed development alone. (c) If the development is built, find the town&#x27;s new overall density (total population over total area). (d) A regional guideline says densities above 2,500 people per square mile can support frequent bus service. Based on your results, would the town qualify after the development? Comment on how the development&#x27;s own density compares with the town&#x27;s.</p>",
  "evidence": "Three density computations with units of people per square mile, a correct combined density from totals (not an average of the two densities), and a guideline conclusion with a comparison comment",
  "reveals": "Whether the student can apply density as a rate over area and recognizes that a combined density must be computed from total quantity over total area."
 },
 {
  "id": "S9-18",
  "set": 9,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A community emergency water tank is a cylinder with radius 3 meters and height 8 meters. (a) Find the exact volume of the tank and an approximation to the nearest cubic meter. (b) Convert the volume to liters (1 m³ = 1,000 L). (c) If 500 households each draw 40 liters per day from the tank during an outage, for how many full days can a full tank supply them? Show the computation.</p>",
  "evidence": "Correct use of $V = \\pi r^2 h$ with the radius (not diameter) substituted, a unit conversion to liters, and a division that yields a number of days with the remainder handled sensibly",
  "reveals": "Whether the student can run a volume formula through a multi-step chain — geometry, unit conversion, and a rate decision — without losing the units."
 },
 {
  "id": "S9-19",
  "set": 9,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Inference about a population from a random sample",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Inference about a population from a random sample — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population; recognize the purposes of sample surveys, experiments, and observational studies)",
  "html": "<p>A town of 9,600 residents is deciding whether to build a greenway. A random sample of 120 residents is surveyed, and 78 say they support the project. (a) What proportion of the sample supports the greenway? (b) Use the sample to estimate how many of the town&#x27;s 9,600 residents support the project, and explain why a random sample justifies generalizing to the whole town. (c) A supporter instead polls people already walking on an existing trail and finds 92% support. Explain why that result should not be used to estimate town-wide support.</p>",
  "evidence": "A sample proportion, a scaled population estimate, a justification invoking random selection, and an explanation of the bias in the trail poll",
  "reveals": "Whether the student understands that random sampling — not sample size or enthusiasm — is what licenses a conclusion about a population."
 },
 {
  "id": "S9-20",
  "set": 9,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects)",
  "html": "<p>A sculptor is carving a garden sculpture in the shape of a right circular cone and plans three straight cuts. Describe the shape of the cross section produced by each cut, and justify each answer: (a) a cut parallel to the base, not passing through the apex; (b) a cut passing through the apex and perpendicular to the base; (c) a slanted cut that is not parallel to the base, does not pass through the apex, and slices across all sides of the cone.</p>",
  "evidence": "Three named cross-section shapes, each with a brief justification based on how the plane meets the cone's surfaces",
  "reveals": "Whether the student can visualize how a plane slices a solid and predict the resulting two-dimensional shape in genuinely different orientations."
 },
 {
  "id": "S10-1",
  "set": 10,
  "n": 1,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of polynomial equations",
  "standards": [
   "NC.M3.N-CN.9",
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Complex solutions of polynomial equations — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations) and NC.M3.N-CN.8 (extend polynomial identities to the complex numbers, e.g., factor a sum of squares)",
  "html": "<p>A festival&#x27;s net revenue, in hundreds of dollars, is modeled by $P(x) = x^4 - 5x^2 - 36$, where $x$ is the attendance in thousands of people. (a) Find all complex solutions of $P(x) = 0$, factoring the polynomial completely over the complex numbers. (b) Explain how the Fundamental Theorem of Algebra predicts the number of solutions you found. (c) State which solution is meaningful for the festival and what it says.</p>",
  "evidence": "A substitution or factoring that reduces the quartic to quadratics, a complete factorization including an $(x - 2i)(x + 2i)$ pair from $x^2 + 4$, all four solutions, a degree-based count check, and a contextual interpretation of the meaningful root",
  "reveals": "Whether the student can hunt down every solution of a higher-degree equation — including the nonreal pair — and reconcile the full solution set with the one value the situation actually uses."
 },
 {
  "id": "S10-2",
  "set": 10,
  "n": 2,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms; write $a(x)/b(x)$ in the form $q(x) + r(x)/b(x)$ using polynomial division)",
  "html": "<p>A celebration committee&#x27;s cost model leads to the rational expression $\\dfrac{2x^2 + 3x - 5}{x + 2}$, where $x$ is the number of planning sessions held. Use polynomial long division to rewrite the expression in the form $q(x) + \\dfrac{r}{x + 2}$, showing each step of the division, and verify your answer by multiplying back.</p>",
  "evidence": "A complete long-division process, the quotient-and-remainder form, and a multiplication check that recovers the original numerator",
  "reveals": "Whether the student can restructure a rational expression with division and confirm the new form is genuinely equivalent, not just plausible."
 },
 {
  "id": "S10-3",
  "set": 10,
  "n": 3,
  "strand": "Number & Algebra",
  "topic": "Systems solved graphically; meaning of intersection points",
  "standards": [
   "NC.M3.A-REI.11",
   "NC.M3.A-CED.2"
  ],
  "standardsDetail": "Systems solved graphically; meaning of intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find approximate solutions graphically) and NC.M3.A-CED.2 (create equations in two or more variables to represent relationships between quantities and graph them)",
  "html": "<p>At a town fair, visitors choose between a wristband costing a flat $\\$28$ for unlimited rides and paying $\\$3.50$ per ride. Let $r$ be the number of rides and $C$ the total cost in dollars. (a) Write the cost equation for each option and graph both on the same axes. (b) Find the intersection point of the two graphs. (c) Explain why the $r$-coordinate of the intersection point is the solution of the equation $28 = 3.5r$, and state which option is cheaper for a visitor taking 5 rides and for a visitor taking 12 rides.</p>",
  "evidence": "Two cost equations with a shared graph, the intersection point with units, an explanation connecting the intersection to the equation $f(r) = g(r)$, and correct cheaper-option calls on both sides of the break-even point",
  "reveals": "Whether the student understands an intersection as the point where two models agree — a break-even decision — and can argue why the graph and the equation have the same solution."
 },
 {
  "id": "S10-4",
  "set": 10,
  "n": 4,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>A print shop filling a festival program order combines two printers&#x27; rates, and the combined rate (in jobs per hour, for a speed setting $x$) is modeled by $\\dfrac{x}{x^2 - 4} + \\dfrac{2}{x + 2}$. Add the expressions, simplify the result to a single rational expression in lowest terms, and state all excluded values of $x$.</p>",
  "evidence": "Factoring of $x^2 - 4$, a common-denominator rewrite of the second term, a combined and simplified numerator over $(x-2)(x+2)$, and both excluded values",
  "reveals": "Whether the student can build a common denominator from factored forms and simplify without canceling terms that are not factors."
 },
 {
  "id": "S10-5",
  "set": 10,
  "n": 5,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A conical sand sculpture at a beach festival has volume given by $V = \\frac{1}{3}\\pi r^2 h$, where $r$ is the radius and $h$ is the height, both in feet. (a) Rearrange the formula to solve for $h$. (b) The sculpture&#x27;s radius is 3 feet and its volume is $36\\pi$ cubic feet. Use your rearranged formula to find its height.</p>",
  "evidence": "A correctly isolated $h = \\dfrac{3V}{\\pi r^2}$ with the algebraic steps shown, followed by a substitution that produces the height in feet",
  "reveals": "Whether the student can treat a formula as an equation to be solved for a chosen variable — clearing a fraction and a squared factor — before ever touching numbers."
 },
 {
  "id": "S10-6",
  "set": 10,
  "n": 6,
  "strand": "Functions",
  "topic": "Transformations and even/odd functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations and even/odd functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$; recognize even and odd functions from graphs and algebraic expressions)",
  "html": "<p>A festival&#x27;s entrance arch is modeled by transforming the parent function $p(x) = x^2$. The arch&#x27;s profile is $y = -2(x - 3)^2 + 5$. (a) Describe every transformation that maps the graph of $p$ to the graph of the arch, and give the arch&#x27;s vertex. (b) A designer also uses $h(x) = x^3 - 4x$ and $k(x) = x^2 + 6$ for decorative curves. Determine whether each is even, odd, or neither, showing the substitution $x \\to -x$ for each, and state what your conclusion means about each graph&#x27;s symmetry.</p>",
  "evidence": "A complete transformation list (reflection, vertical stretch, shifts) with the vertex, both $-x$ substitutions carried out, correct even/odd classifications, and the matching symmetry statements",
  "reveals": "Whether the student reads a transformed equation as a set of geometric moves and can prove symmetry properties algebraically rather than guessing from a picture."
 },
 {
  "id": "S10-7",
  "set": 10,
  "n": 7,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm and evaluate using technology; solve exponential equations)",
  "html": "<p>A community festival&#x27;s livestream audience is growing according to $V(t) = 200(1.8)^t$, where $V$ is the number of viewers $t$ hours after the stream starts. (a) Express, as a logarithm, the exact time at which the audience reaches 10,000 viewers. (b) Evaluate that time to the nearest tenth of an hour, and check your answer by substituting it back into $V(t)$. (c) Interpret the answer in context.</p>",
  "evidence": "Isolation of the exponential, the solution written as a logarithm (or ratio of logarithms), a decimal evaluation, a back-substitution check, and a contextual statement of the time",
  "reveals": "Whether the student understands a logarithm as the inverse operation that unwraps an exponential — and verifies the result instead of trusting the calculator blindly."
 },
 {
  "id": "S10-8",
  "set": 10,
  "n": 8,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined (step) functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined (step) functions — NC.M3.F-IF.7b (graph piecewise-defined functions, including step and absolute value functions)",
  "html": "<p>Parking for a community celebration costs $\\$5$ for the first hour or any part of it, plus $\\$3$ for each additional hour or part of an hour, for up to 4 hours. Let $P(t)$ be the cost in dollars for parking $t$ hours. (a) Write $P$ as a piecewise-defined function. (b) Sketch the graph of $P$ for $0 &lt; t \\leq 4$, showing open and closed endpoints correctly. (c) Find $P(0.5)$, $P(2.5)$, and $P(3.2)$, and explain in one sentence why the graph has jumps.</p>",
  "evidence": "A four-piece definition with correct interval endpoints, a step graph with correctly placed open/closed circles, three correct evaluations, and an explanation linking the jumps to the \"or part of an hour\" pricing rule",
  "reveals": "Whether the student can translate a real pricing rule into a discontinuous function and handle the endpoint details that make the model honest."
 },
 {
  "id": "S10-9",
  "set": 10,
  "n": 9,
  "strand": "Functions",
  "topic": "Reading values of an inverse function from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading values of an inverse function from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>Volunteers inflate balloons for a celebration. The function $f$ gives the total number of balloons inflated after $x$ minutes, with values shown in the table.</p>\n<table>\n<tr><th>$x$ (minutes)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>\n<tr><td>$f(x)$ (balloons)</td><td>0</td><td>12</td><td>30</td><td>55</td><td>90</td></tr>\n</table>\n<p>(a) State $f(3)$ and interpret it in context. (b) Find $f^{-1}(30)$ and interpret it in context. (c) The team needs 90 balloons ready. Use the inverse function to state how long that takes, writing your answer in inverse-function notation first.</p>",
  "evidence": "A correct forward reading ($f(3)$), a correct reverse reading written as $f^{-1}(30)$ with its time interpretation, and the 90-balloon time obtained by reading the table backward",
  "reveals": "Whether the student truly grasps that an inverse swaps the roles of input and output — reading the same table in the opposite direction with the meaning flipped."
 },
 {
  "id": "S10-10",
  "set": 10,
  "n": 10,
  "strand": "Functions",
  "topic": "Function notation; domain and range from a graph",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Function notation; domain and range from a graph — NC.M3.F-IF.1 (understand function notation; determine domain and range from a graph and relate them to the context)",
  "html": "<p>A drone in a community light show follows a path whose height over time is graphed as follows: the graph starts at $(0, 0)$, rises in a straight line to $(10, 120)$, stays level until $(25, 120)$, then descends in a straight line to $(40, 0)$, where time is in seconds and height is in feet. (a) State the domain and range of the height function, with units. (b) Write the height at 10 seconds in function notation and interpret it. (c) During what time interval is the drone&#x27;s height constant, and what is the drone doing then?</p>",
  "evidence": "Domain and range given as intervals with units, a correct $f(10)$ statement with interpretation, and the constant interval identified with its physical meaning",
  "reveals": "Whether the student can extract a function's domain and range from a described graph and keep them tied to the real quantities they measure."
 },
 {
  "id": "S10-11",
  "set": 10,
  "n": 11,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena with trigonometric functions",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena with trigonometric functions — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline)",
  "html": "<p>In a North Carolina town, the number of daylight hours on day $t$ of the year is modeled by $D(t) = 12 + 2.8\\sin\\left(\\frac{2\\pi}{365}(t - 80)\\right)$, where $t = 1$ is January 1. (a) State the midline, amplitude, and period, and interpret each in context. (b) Find the model&#x27;s maximum number of daylight hours, and the day of the year on which it occurs (to the nearest day). (c) Compute $D(80)$ and explain what is special about that day in the model.</p>",
  "evidence": "All three parameters with contextual meanings, a maximum value with its day found by setting the sine equal to 1, and an evaluation at $t = 80$ connected to the phase shift",
  "reveals": "Whether the student can decode a shifted sinusoid — center, swing, cycle length, and phase — into a believable annual daylight story."
 },
 {
  "id": "S10-12",
  "set": 10,
  "n": 12,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving and using the sector-area formula",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Deriving and using the sector-area formula — NC.M3.G-C.5 (derive, using similarity, the fact that the length of the arc intercepted by an angle is proportional to the radius; define radian measure; derive and use the sector-area formula $A = \\frac{1}{2}r^2\\theta$)",
  "html": "<p>A wedge-shaped section of a circular celebration plaza is reserved for a stage. (a) Using similarity, derive the formula for the area of a sector with radius $r$ and central angle $\\theta$ (in radians): explain why the sector&#x27;s area is the fraction $\\frac{\\theta}{2\\pi}$ of the full circle&#x27;s area, and conclude that $A = \\frac{1}{2}r^2\\theta$. (b) Apply the formula: the plaza has radius 10 meters and the stage wedge has central angle 1.2 radians. Find the area of the wedge and the length of its outer arc.</p>",
  "evidence": "A derivation that scales from the full circle by the fraction $\\theta/(2\\pi)$, the concluded formula, and correct numerical area and arc length with units",
  "reveals": "Whether the student understands the sector formula as a proportionality statement about circles — derivable on demand — rather than a memorized string of symbols."
 },
 {
  "id": "S10-13",
  "set": 10,
  "n": 13,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving the equation of a parabola",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Deriving the equation of a parabola — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A parabolic satellite dish displayed at a community science festival has its receiver at the focus $(0, 3)$ and its directrix along the line $y = -3$ (units in feet, with the vertex at the origin). (a) Derive the equation of the parabola by setting the distance from a general point $(x, y)$ on the dish to the focus equal to its distance to the directrix, and simplifying. (b) How far above the vertex is the dish&#x27;s rim at a point where $x = 6$ feet?</p>",
  "evidence": "A distance-equality equation, squaring and simplification that yields $x^2 = 12y$, and a correct rim height from substituting $x = 6$",
  "reveals": "Whether the student can turn the focus–directrix definition of a parabola into an equation from scratch, which is the definition doing real work."
 },
 {
  "id": "S10-14",
  "set": 10,
  "n": 14,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Relationships among chords and inscribed angles",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Relationships among chords and inscribed angles — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords, including the angle formed by two intersecting chords and the inscribed angle theorem)",
  "html": "<p>A circular medallion is set into a celebration plaza floor. Two chords, $AC$ and $BD$, cross at a point $E$ inside the circle. The measure of arc $AB$ is $80^\\circ$ and the measure of arc $CD$ is $100^\\circ$. (a) Find the measure of $\\angle AEB$, the angle formed where the chords cross. (b) A point $P$ on the circle, on the major arc $AB$, looks across the medallion so that $\\angle APB$ intercepts arc $AB$. Find $\\angle APB$. (c) Explain in one or two sentences why the two answers differ even though both involve angles and arcs of the same circle.</p>",
  "evidence": "The interior angle computed as half the sum of its intercepted arcs, the inscribed angle computed as half its intercepted arc, and an explanation distinguishing an interior chord angle from an inscribed angle",
  "reveals": "Whether the student can select the right circle theorem for where the angle's vertex sits — inside the circle versus on it — instead of applying one formula everywhere."
 },
 {
  "id": "S10-15",
  "set": 10,
  "n": 15,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including properties of rectangles such as congruent diagonals)",
  "html": "<p>A builder framing a rectangular festival stage platform wants to justify her quality check: she claims that in any true rectangle, the two diagonals must be the same length, so unequal diagonal measurements mean the frame is out of square. Prove her claim: in rectangle $ABCD$, with diagonals $AC$ and $BD$, prove that $AC \\cong BD$.</p>",
  "evidence": "A structured proof (two-column or paragraph) that establishes a pair of congruent right triangles containing the two diagonals (e.g., $\\triangle DAB \\cong \\triangle CBA$ by SAS) and concludes with CPCTC",
  "reveals": "Whether the student can assemble a proof from a rectangle's defining properties — opposite sides congruent, all angles right — and a shared side, ending in a conclusion that justifies a real construction practice."
 },
 {
  "id": "S10-16",
  "set": 10,
  "n": 16,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems solved with geometric methods",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems solved with geometric methods — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including optimizing area under constraints)",
  "html": "<p>A community garden for a neighborhood celebration will be built against an existing straight wall, so fencing is needed on only three sides. The garden club has 120 meters of fencing. Let $x$ be the length, in meters, of each side perpendicular to the wall. (a) Write the garden&#x27;s area $A$ as a function of $x$. (b) Find the value of $x$ that maximizes the area without using calculus, and justify that it is a maximum. (c) State the garden&#x27;s final dimensions and its maximum area.</p>",
  "evidence": "An area function built from the fencing constraint, the vertex of the resulting downward parabola located and justified as the maximum, and dimensions with the maximum area in square meters",
  "reveals": "Whether the student can convert a design constraint into a single-variable model and optimize it with the structure of a quadratic rather than by trial and error."
 },
 {
  "id": "S10-17",
  "set": 10,
  "n": 17,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>A local news site publishes this report: &quot;Shoppers at the new farmers market eat more vegetables than people who don&#x27;t shop there, a survey of market shoppers found — proof that the market is making our town healthier.&quot; Write a critique of the report that addresses: (a) what type of study this is (survey, experiment, or observational study) and how the data were collected; (b) at least two specific reasons the data do not prove the market caused better eating — including who was surveyed and at least one confounding explanation; (c) what kind of study design could actually support a causal claim here.</p>",
  "evidence": "Correct classification of the study, identification of the biased sampling frame (only market shoppers), a named confounder such as pre-existing health consciousness, and a proposed design (e.g., randomized or comparison-based) that could support causation",
  "reveals": "Whether the student can interrogate a media claim — separating association from causation and spotting how the sampling method predetermines the headline."
 },
 {
  "id": "S10-18",
  "set": 10,
  "n": 18,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of composite solids (cylinder and hemisphere)",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of composite solids (cylinder and hemisphere) — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A festival pavilion is shaped like a cylinder with radius 6 feet and height 4 feet, topped by a hemispherical dome of the same radius. (a) Find the exact total volume enclosed by the pavilion. (b) Give the volume to the nearest cubic foot. (c) If a ventilation standard requires at least 15 cubic feet of air space per person, how many people can the pavilion hold under the standard? Show your reasoning.</p>",
  "evidence": "Separate cylinder and hemisphere volumes computed with the correct formulas (including the $\\frac{2}{3}\\pi r^3$ hemisphere), an exact total in terms of $\\pi$, a decimal approximation, and a capacity found by division with the result rounded down sensibly",
  "reveals": "Whether the student can decompose a composite solid, apply two volume formulas accurately, and carry the result into a real capacity decision."
 },
 {
  "id": "S10-19",
  "set": 10,
  "n": 19,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing treatments in a randomized experiment using simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing treatments in a randomized experiment using simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>Organizers of a community cleanup celebration want to know whether door-hanger invitations draw more households than emailed invitations. They randomly assign 80 households to two groups of 40: one group receives door hangers, the other receives emails. In the door-hanger group, 26 of 40 households participate (65%); in the email group, 18 of 40 participate (45%). The organizers then run a simulation: assuming the invitation type makes no difference, they randomly reassign the 80 outcomes to two groups of 40 a total of 500 times. In only 18 of the 500 simulations is the difference in participation rates (door-hanger minus email) at least as large as the observed difference. (a) Compute the observed difference in participation rates. (b) What proportion of the simulations produced a difference at least as large as the observed one? (c) Using a 5% significance threshold, decide whether the experiment gives convincing evidence that door hangers outperform emails, and explain what the simulation proportion means.</p>",
  "evidence": "The observed difference of 0.20, the simulation proportion 18/500 = 0.036, a comparison against the 5% threshold, and an interpretation of the proportion as how often chance alone would produce such a gap",
  "reveals": "Whether the student understands statistical significance operationally — an observed difference is convincing only if random assignment alone would rarely produce one that large."
 },
 {
  "id": "S10-20",
  "set": 10,
  "n": 20,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling objects with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling objects with geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A paper lantern for a festival is made from a cylinder open at the bottom, with radius 3 cm and height 10 cm, topped by a cone with the same radius and a height of 4 cm. Assume the pieces meet exactly with no overlap and ignore seams. (a) Find the slant height of the cone. (b) Compute the total amount of paper needed, in square centimeters, as an exact value in terms of $\\pi$ and as an approximation to the nearest tenth. (State clearly which surfaces you are counting.)</p>",
  "evidence": "A slant height from the Pythagorean theorem, lateral areas for the cylinder ($2\\pi r h$) and cone ($\\pi r l$) with an explicit statement that the open bottom and the joined faces are excluded, and exact plus approximate totals",
  "reveals": "Whether the student can model a real object as a composite of geometric pieces and make — and declare — sensible decisions about which surfaces count."
 }
];
