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
  "id": "S1-21",
  "set": 1,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of a quadratic equation",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of a quadratic equation — NC.M3.N-CN.9 (solve quadratic equations with real coefficients that have complex solutions)",
  "html": "<p>A student in the rocketry club models a model rocket&#x27;s flight and wants the times when the rocket reaches a target height marked on the launch-field backdrop. Substituting the target height into the model produces the equation $x^2 - 6x + 13 = 0$, where $x$ is the time in seconds after launch. Find all solutions of the equation, and explain what the solutions tell the club about the rocket and the target height.</p>",
  "evidence": "The quadratic formula applied with a negative discriminant, both complex solutions written in $a + bi$ form, and a conclusion about whether the rocket reaches the target height",
  "reveals": "Whether the student can carry a quadratic through to complex solutions and read non-real solutions as information about the situation — the event never happens — rather than as a dead end."
 },
 {
  "id": "S1-22",
  "set": 1,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Polynomial identities extended to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Polynomial identities extended to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers; factor a sum of squares as $(x + bi)(x - bi)$)",
  "html": "<p>For a math team factoring challenge, a student must factor expressions completely over the complex numbers. (a) Factor $x^2 + 16$ completely, and verify your answer by multiplying the factors back together. (b) Factor $2x^2 + 32$ completely over the complex numbers.</p>",
  "evidence": "Both factorizations using imaginary units, a multiplication check that recovers the original expression, and the common factor handled in part (b)",
  "reveals": "Whether the student sees a sum of squares as factorable once $i$ is available, instead of declaring it \"not factorable\" from real-number habit."
 },
 {
  "id": "S1-23",
  "set": 1,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Zeros of a polynomial and graph behavior",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros of a polynomial and graph behavior — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available and use the zeros to analyze the function)",
  "html": "<p>In shop class, a student cuts square corners of side $x$ inches from a 20-inch by 14-inch sheet of cardboard and folds up the sides to make an open-top box. The volume is modeled by $V(x) = x(20 - 2x)(14 - 2x)$. (a) Find all zeros of $V$. (b) Which zeros make sense for the box, and what domain of $x$ is physically possible? Explain using the dimensions. (c) Find the volume when the cut is 2 inches, with units.</p>",
  "evidence": "All three zeros from the factored form, a domain restriction justified by both length and width staying positive, and a volume computation in cubic inches",
  "reveals": "Whether the student connects each factor to a physical dimension and rejects zeros that are algebraically valid but impossible for the box."
 },
 {
  "id": "S1-24",
  "set": 1,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite $\\frac{A(x)}{B(x)}$ in the form $q(x) + \\frac{r(x)}{B(x)}$ using polynomial division)",
  "html": "<p>The yearbook staff prints souvenir banners for senior night. The total printing cost, in dollars, for a run of $x + 5$ banners is modeled by $x^2 + 9x + 20$. (a) Use polynomial division to rewrite the average cost per banner, $\\dfrac{x^2 + 9x + 20}{x + 5}$, as a single polynomial, and state any restriction on $x$. (b) Use your answer to find the average cost per banner when $x = 6$, and check it against the total cost divided by the number of banners.</p>",
  "evidence": "A complete division with zero remainder, the restriction from the denominator, and an average cost in dollars per banner confirmed by a total-cost check",
  "reveals": "Whether the student can use division to turn a total into a per-unit rate and verify a quotient by reversing it."
 },
 {
  "id": "S1-25",
  "set": 1,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Multiplying rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Multiplying rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>The robotics club models the overall gear ratio of a two-stage gear train as the product of two rational expressions in a design parameter $x$: $\\dfrac{x^2 + 6x + 9}{x^2 - 1} \\cdot \\dfrac{x - 1}{x + 3}$. Write the product as a single rational expression in lowest terms, and state all values of $x$ that must be excluded.</p>",
  "evidence": "Factoring of all numerators and denominators, cancellation of common factors, the simplified expression, and every excluded value from the original denominators",
  "reveals": "Whether the student factors before canceling and tracks excluded values from the original expression, not the simplified one."
 },
 {
  "id": "S1-26",
  "set": 1,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable, including equations with extraneous solutions)",
  "html": "<p>At field day, a student drops a water balloon from the bleachers and solves a physics model for the fall time. The model reduces to the equation $\\sqrt{2x + 7} = x + 2$, where $x$ is the time in seconds. Solve the equation, and check every candidate solution in the original equation. Explain what happens to any solution that fails the check and why it appeared.</p>",
  "evidence": "Isolation of the radical, squaring with the resulting quadratic solved, both candidates checked in the original equation, and the rejected solution identified as extraneous with a reason",
  "reveals": "Whether the student treats squaring as a step that can introduce false solutions and verifies candidates instead of reporting both roots."
 },
 {
  "id": "S1-27",
  "set": 1,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Solutions of $f(x) = g(x)$ as intersection points",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Solutions of $f(x) = g(x)$ as intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$)",
  "html": "<p>In a slow-motion video model for PE class, the height in feet of a kicked soccer ball is $h_1(t) = -4t^2 + 16t$ and the height of a second ball tossed from a platform is $h_2(t) = 6t + 6$, where $t$ is seconds after both are released. (a) Find all times when the two balls are at the same height, and find that height at each time. (b) Explain how your answers appear on a graph of the two height functions.</p>",
  "evidence": "The equation $h_1(t) = h_2(t)$ solved completely, both times with matching heights in feet, and an interpretation of the solutions as intersection points of the two graphs",
  "reveals": "Whether the student connects an algebraic \"when are they equal\" question to the geometry of intersecting graphs."
 },
 {
  "id": "S1-28",
  "set": 1,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Interpreting parts of an expression in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting parts of an expression in context — NC.M3.A-SSE.1 (interpret complicated expressions by viewing one or more of their parts as a single entity)",
  "html": "<p>A shot put thrown by a member of the track team follows the height model $h(t) = -5t^2 + 14t + 2$, where $h$ is the height in meters and $t$ is the time in seconds after release. (a) Interpret the meaning of each number in the model — the $-5$, the $14$, and the $2$ — in terms of the throw. (b) What is $h(0)$, and what does it describe?</p>",
  "evidence": "A plain-language interpretation of all three coefficients tied to gravity's effect, initial upward speed, and release height, plus the value and meaning of the initial height",
  "reveals": "Whether the student reads a quadratic model as a story about a throw rather than as three disconnected numbers."
 },
 {
  "id": "S1-29",
  "set": 1,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>The art department is making a trapezoidal pep-rally banner. Its area is given by $A = \\dfrac{h}{2}(b_1 + b_2)$, where $b_1$ and $b_2$ are the lengths of the two parallel sides and $h$ is the distance between them. (a) Rearrange the formula to solve for $h$. (b) The banner must have an area of 48 square feet, with parallel sides of 10 feet and 6 feet. Find $h$, with units.</p>",
  "evidence": "A step-by-step isolation of $h$ that undoes both the sum and the fraction, then a substitution giving the banner's height in feet",
  "reveals": "Whether the student can rearrange a formula containing a grouped sum — dividing by the whole group, not by one term at a time."
 },
 {
  "id": "S1-30",
  "set": 1,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Multiplying complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Multiplying complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$ and the distributive property)",
  "html": "<p>The school radio station runs its microphone signal through two amplifier stages. In the station&#x27;s engineering model, the first stage multiplies the signal by $2 + i$ and the second stage multiplies the result by $3 - 2i$, where the expressions are complex gains. (a) Find the combined gain $(2 + i)(3 - 2i)$ in $a + bi$ form. (b) A third stage multiplies by $1 - 2i$ the conjugate-style factor $1 + 2i$ in a test: compute $(1 + 2i)(1 - 2i)$ and state what is special about the result.</p>\n<p>## Functions (Problems 31–40)</p>",
  "evidence": "Both products expanded with $i^2 = -1$ applied and results written in $a + bi$ form, plus a statement that the second product is a real number (a conjugate product)",
  "reveals": "Whether the student distributes over complex numbers accurately and recognizes the conjugate product as the sum-of-squares pattern."
 },
 {
  "id": "S1-31",
  "set": 1,
  "n": 31,
  "strand": "Functions",
  "topic": "Arithmetic sequences, recursive and explicit",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Arithmetic sequences, recursive and explicit — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities, including arithmetic sequences given recursively and explicitly)",
  "html": "<p>The home bleachers at the football field are built so that the first row has 12 seats and each row after the first has 2 more seats than the row before it. Let $a_n$ be the number of seats in row $n$. (a) Write a recursive definition for the sequence $a_n$. (b) Write an explicit formula for $a_n$. (c) How many seats are in row 15?</p>",
  "evidence": "A recursive definition with the starting value and the row-to-row rule, an explicit formula, and the seat count for row 15",
  "reveals": "Whether the student can express the same pattern two ways — building from the previous term and jumping straight to any term."
 },
 {
  "id": "S1-32",
  "set": 1,
  "n": 32,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (combine standard function types, e.g., a linear function and a quadratic function, to model a situation)",
  "html": "<p>For the school fair, the senior class earns money two ways: ticket revenue $T(x) = 12x$ dollars and concession profit $C(x) = 0.5x^2$ dollars, where $x$ is the number of attendees. (a) Write a function $P(x)$ for the total amount earned. (b) Find $P(40)$ and interpret it. (c) For what attendance does concession profit equal ticket revenue? (Ignore the trivial answer of zero attendees.)</p>",
  "evidence": "The combined function written as a single expression, a total in dollars for 40 attendees with interpretation, and the break-even attendance found by setting the two parts equal",
  "reveals": "Whether the student builds a model by adding component functions and can compare the components inside the model they built."
 },
 {
  "id": "S1-33",
  "set": 1,
  "n": 33,
  "strand": "Functions",
  "topic": "Key features and average rate of change",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features and average rate of change — NC.M3.F-IF.4 (calculate and interpret the average rate of change of a function over a specified interval)",
  "html": "<p>A swimmer on the school team records her distance during a 40-second practice swim:</p>\n<table>\n<tr><th>Time (s)</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th></tr>\n<tr><td>Distance (m)</td><td>0</td><td>16</td><td>40</td><td>57</td><td>80</td></tr>\n</table>\n<p>(a) Find her average rate of change between 10 seconds and 30 seconds, with units, and interpret it. (b) On which 10-second interval was she fastest? Justify with rates. (c) What was her average speed for the whole swim?</p>",
  "evidence": "Three rate computations in meters per second from the table, the fastest interval identified by comparing interval rates, and interpretations in swimming terms",
  "reveals": "Whether the student treats a table as a function and computes slope-like rates over chosen intervals rather than reading off single values."
 },
 {
  "id": "S1-34",
  "set": 1,
  "n": 34,
  "strand": "Functions",
  "topic": "Domain and range of a function",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Domain and range of a function — NC.M3.F-IF.1 (understand that the domain and range are the sets of possible inputs and outputs; determine them from a graph in context)",
  "html": "<p>A student&#x27;s paper airplane is launched in the gym. Its height over time is graphed as follows: the flight begins at a height of 1.5 meters at time 0, rises to a maximum height of 3.5 meters at 2 seconds, and then descends, landing on the floor (height 0) at 9 seconds. (a) State the domain of the height function, with units, and explain what it means for the flight. (b) State the range, with units, and explain what it means.</p>",
  "evidence": "The domain as an interval of times in seconds, the range as an interval of heights in meters, and a contextual explanation for each endpoint",
  "reveals": "Whether the student reads domain and range off a described graph as real-world limits — flight time and reachable heights — not as abstract intervals."
 },
 {
  "id": "S1-35",
  "set": 1,
  "n": 35,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros and end behavior)",
  "html": "<p>During a one-week sale, the school store models its daily profit, in tens of dollars, by $P(x) = (x - 1)(x - 4)(x + 1)$, where $x$ is the day number. (a) Find the zeros of $P$ and the $y$-intercept. (b) Describe the end behavior of the graph. (c) Sketch the graph, and interpret the zeros with $x \\ge 0$ in terms of the sale.</p>",
  "evidence": "All zeros and the intercept identified from the factored form, end behavior for a positive cubic, a sketch passing through the intercepts, and break-even days interpreted in context",
  "reveals": "Whether the student assembles zeros, intercept, and end behavior into one coherent graph of a cubic."
 },
 {
  "id": "S1-36",
  "set": 1,
  "n": 36,
  "strand": "Functions",
  "topic": "Graphing exponential functions; asymptotes",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing exponential functions; asymptotes — NC.M3.F-IF.7e (graph exponential functions, showing intercepts and end behavior)",
  "html": "<p>At the concession stand, a cup of hot chocolate is served at $180^\\circ$F and cools in the $70^\\circ$F gym lobby according to $T(t) = 70 + 110\\left(\\tfrac{1}{2}\\right)^{t/5}$, where $t$ is minutes after serving. (a) Find the temperature at $t = 0$, $t = 5$, and $t = 10$ minutes. (b) Identify the horizontal asymptote of the graph and explain what it means for the drink. (c) Describe the end behavior of $T$ in context.</p>",
  "evidence": "Three temperatures in degrees Fahrenheit, the asymptote identified as room temperature, and an end-behavior statement describing the drink approaching room temperature without going below it",
  "reveals": "Whether the student connects an exponential's asymptote to a physical equilibrium instead of treating it as a graphing technicality."
 },
 {
  "id": "S1-37",
  "set": 1,
  "n": 37,
  "strand": "Functions",
  "topic": "Comparing properties of two functions",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing properties of two functions — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way)",
  "html": "<p>Two runners on the cross-country team follow different 5K training plans for weekly long-run distance. Plan A is given by $M_A(t) = 2 + 1.5t$ miles in week $t$. Plan B is given by the table:</p>\n<table>\n<tr><th>Week $t$</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>\n<tr><td>Miles $M_B$</td><td>3</td><td>4.25</td><td>5.5</td><td>6.75</td></tr>\n</table>\n<p>(a) Which plan starts with the longer run, and by how much? (b) Which plan increases the weekly distance faster, and by how much per week? (c) In which week do the two plans call for the same distance, and what is that distance?</p>",
  "evidence": "Initial values compared from the equation and the table, weekly rates of change compared (with Plan B's rate computed from the table), and the week where the plans agree, found by equation or extension of the table",
  "reveals": "Whether the student can extract the same features — starting value and rate — from two different representations and compare them fairly."
 },
 {
  "id": "S1-38",
  "set": 1,
  "n": 38,
  "strand": "Functions",
  "topic": "Verifying inverses by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverses by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>In science class, students convert temperatures with $F(C) = \\tfrac{9}{5}C + 32$ (Celsius to Fahrenheit) and $C(F) = \\tfrac{5}{9}(F - 32)$ (Fahrenheit to Celsius). (a) Compute $F(C(F))$ and simplify completely. (b) Compute $C(F(C))$ and simplify completely. (c) Explain what your results prove about the two conversion functions, and verify with a specific temperature: convert $68^\\circ$F to Celsius and back.</p>",
  "evidence": "Both compositions carried out and simplifying to the input variable, a conclusion that the functions are inverses, and a numeric round-trip check with a temperature",
  "reveals": "Whether the student understands composition as the test for \"undoing,\" not just a symbolic exercise."
 },
 {
  "id": "S1-39",
  "set": 1,
  "n": 39,
  "strand": "Functions",
  "topic": "Reading inverse values from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>A distance runner&#x27;s coach records the runner&#x27;s distance during a steady workout:</p>\n<table>\n<tr><th>Time (min)</th><th>0</th><th>2</th><th>4</th><th>6</th><th>8</th></tr>\n<tr><td>Distance (m)</td><td>0</td><td>550</td><td>1050</td><td>1600</td><td>2100</td></tr>\n</table>\n<p>Let $d(t)$ be the distance in meters after $t$ minutes. (a) Find $d(4)$ and interpret it. (b) Find $d^{-1}(1600)$ and interpret it. (c) Explain in one sentence why $d^{-1}(1600)$ is a time and not a distance.</p>",
  "evidence": "A distance read directly from the table, an inverse value found by locating the output and reading back the input, and an explanation based on inputs and outputs swapping",
  "reveals": "Whether the student genuinely reads an inverse as reversing the table rather than computing a reciprocal."
 },
 {
  "id": "S1-40",
  "set": 1,
  "n": 40,
  "strand": "Functions",
  "topic": "Exponential growth eventually exceeds linear growth",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Exponential growth eventually exceeds linear growth — NC.M3.F-LE.3 (observe using graphs and tables that a quantity increasing exponentially eventually exceeds a quantity increasing linearly or polynomially)",
  "html": "<p>Two students design apps for a school coding showcase and track weekly users. App L grows linearly: $L(n) = 100 + 50n$ users after $n$ weeks. App E grows exponentially: $E(n) = 3 \\cdot 2^n$ users after $n$ weeks. (a) Build a table of both user counts for weeks 0 through 8. (b) For the first several weeks, which app has more users? (c) Show that the exponential app eventually overtakes the linear app, and give the first week it does so. (d) State the general principle this illustrates about exponential versus linear growth.</p>\n<p>## Trigonometry, Proof, Circles &amp; Coordinate Geometry (Problems 41–50)</p>",
  "evidence": "A two-column table of user counts for weeks 0–8, the early leader identified, the first week the exponential count is larger, and a statement of the eventual-exceeds principle",
  "reveals": "Whether the student can demonstrate a growth principle with computed evidence instead of asserting it."
 },
 {
  "id": "S1-41",
  "set": 1,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit circle and periodicity",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit circle and periodicity — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers; explain how periodicity and symmetry follow)",
  "html": "<p>A student animating a rotating windmill for a coding project places points on the unit circle. (a) Find the exact coordinates of the point on the unit circle at an angle of $120^\\circ$, and state the sine and cosine of $120^\\circ$. (b) Find the exact coordinates at $300^\\circ$, and state the signs of sine and cosine there. (c) Explain why $\\sin 480^\\circ = \\sin 120^\\circ$, and give its exact value.</p>",
  "evidence": "Exact coordinates using $\\tfrac{\\sqrt{3}}{2}$ and $\\tfrac{1}{2}$ for both angles, correct quadrant signs, and a coterminal-angle explanation for the periodicity claim",
  "reveals": "Whether the student locates angles on the unit circle beyond the first quadrant and uses periodicity deliberately rather than reaching for a calculator."
 },
 {
  "id": "S1-42",
  "set": 1,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena; interpret amplitude, period, and midline in context)",
  "html": "<p>A student practicing yo-yo tricks models the yo-yo&#x27;s height above the floor, in meters, $t$ seconds after a throw as $h(t) = 0.6 - 0.45\\cos(\\pi t)$. (a) Identify the amplitude, midline, and period, and interpret each for the yo-yo. (b) Find the maximum and minimum heights, and the first time the yo-yo reaches its maximum height. (c) Find the height at $t = 0.5$ seconds and interpret it in the cycle.</p>",
  "evidence": "The three parameters read from the given model and interpreted as swing size, average height, and cycle time; extreme heights with the first maximum time; and the midline height at the quarter-period time",
  "reveals": "Whether the student interprets a given trigonometric model — parameters, extremes, and timing — rather than only building models from scratch."
 },
 {
  "id": "S1-43",
  "set": 1,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Relationships among radii and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Relationships among radii and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; a radius perpendicular to a chord bisects the chord)",
  "html": "<p>The school&#x27;s circular garden has a straight walkway that forms a chord of the circle. The walkway is 16 meters long, and the shortest distance from the garden&#x27;s center to the walkway is 6 meters. Find the radius of the garden, and explain the geometric fact about a radius drawn to a chord that makes the solution work.</p>",
  "evidence": "A right triangle formed from the radius, the distance from the center, and half the chord; the radius found with the Pythagorean theorem in meters; and the perpendicular-bisects-chord fact stated",
  "reveals": "Whether the student can manufacture a right triangle inside a circle using the radius–chord relationship."
 },
 {
  "id": "S1-44",
  "set": 1,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed quadrilaterals",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed quadrilaterals — NC.M3.G-C.3 (construct and apply properties of inscribed figures in a circle; opposite angles of an inscribed quadrilateral are supplementary)",
  "html": "<p>Four benches sit at points $A$, $B$, $C$, $D$ on the edge of the school&#x27;s circular plaza, forming an inscribed quadrilateral $ABCD$ in order around the circle. The angle at bench $A$ measures $85^\\circ$ and the angle at bench $B$ measures $110^\\circ$. (a) Find the measures of the angles at benches $C$ and $D$. (b) Explain why opposite angles of an inscribed quadrilateral must be supplementary, using the arcs they intercept.</p>",
  "evidence": "Both missing angle measures in degrees and a justification based on each angle intercepting an arc, with the two arcs together making the full circle",
  "reveals": "Whether the student can justify the supplementary property from the inscribed angle theorem instead of memorizing it."
 },
 {
  "id": "S1-45",
  "set": 1,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive and use the fact that the length of an arc intercepted by an angle is proportional to the radius; find arc lengths and areas of sectors)",
  "html": "<p>For a class party, a pizza with a radius of 14 inches is cut into slices with a central angle of $60^\\circ$. (a) Find the area of one slice, in square inches, giving an exact answer and a decimal approximation. (b) Find the length of the crust (the arc) of one slice, in inches, exact and approximate. (c) What fraction of the whole pizza is one slice?</p>",
  "evidence": "The sector area and arc length each computed as the same fraction of the full circle's area and circumference, in square inches and inches, with the fraction of the pizza stated",
  "reveals": "Whether the student sees sector measures as proportional parts of the whole circle rather than as two unrelated formulas."
 },
 {
  "id": "S1-46",
  "set": 1,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Parabolas: focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Parabolas: focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix; identify focus and directrix from an equation)",
  "html": "<p>A parabolic reflector for the STEM fair solar oven is described by the equation $x^2 = 12y$ (units in inches), with the vertex at the origin and the dish opening upward. (a) Find the coordinates of the focus. (b) Write the equation of the directrix. (c) The oven&#x27;s cooking tube must sit at the focus. How far above the vertex should it be mounted, and why does the focus matter for a solar oven?</p>",
  "evidence": "The value of $p$ extracted from $4p = 12$, the focus as an ordered pair, the directrix as a horizontal line equation, and a mounting distance in inches with a reflection-based explanation",
  "reveals": "Whether the student connects the algebraic parameter $p$ to the physical point where reflected rays collect."
 },
 {
  "id": "S1-47",
  "set": 1,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle from center and radius",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle from center and radius — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean theorem)",
  "html": "<p>The library declares a circular &quot;quiet zone&quot; on the school map (coordinates in meters), centered at $(2, -3)$ with a radius of 5 meters. (a) Write the equation of the circle that bounds the quiet zone. (b) A study table sits at $(5, 1)$. Is it inside, on, or outside the boundary? Justify with a computation. (c) Is the point $(0, 0)$ inside, on, or outside? Justify.</p>",
  "evidence": "The standard-form equation with the center's signs handled correctly, and each test point classified by substituting into the equation (or comparing distance with the radius)",
  "reveals": "Whether the student builds a circle equation from its definition as a distance condition and uses it as a test, not just a formula to memorize."
 },
 {
  "id": "S1-48",
  "set": 1,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that opposite sides of a parallelogram are congruent)",
  "html": "<p><strong>Proof.</strong> A parallelogram-shaped quilt block $ABCD$ (vertices in order, with $AB \\parallel CD$ and $AD \\parallel BC$) is a design in the school&#x27;s art show. Prove that the opposite sides of the parallelogram are congruent: $AB \\cong CD$ and $AD \\cong BC$. Draw on the diagonal $AC$ as part of your proof, and write a structured proof with a reason for each statement.</p>",
  "evidence": "A two-column or paragraph proof that draws diagonal $AC$, uses alternate interior angles from the parallel sides, proves the two triangles congruent by ASA, and finishes with CPCTC for both pairs of opposite sides",
  "reveals": "Whether the student can use a diagonal to convert a quadrilateral claim into a triangle congruence — the standard engine of parallelogram proofs."
 },
 {
  "id": "S1-49",
  "set": 1,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the triangle midsegment theorem)",
  "html": "<p><strong>Proof (coordinate).</strong> A triangular pennant for the pep rally has vertices $A(0, 0)$, $B(8, 0)$, and $C(2, 6)$ on a coordinate grid (units in inches). Let $M$ be the midpoint of $AC$ and $N$ be the midpoint of $BC$. Use coordinates to prove that the segment $MN$ is parallel to $AB$ and half its length. Show the midpoint, slope, and distance computations that justify both claims.</p>",
  "evidence": "Both midpoints computed, slopes of $MN$ and $AB$ shown equal (parallel), lengths of $MN$ and $AB$ shown in a 1-to-2 ratio, and a conclusion tying the computations to the midsegment theorem",
  "reveals": "Whether the student can run a coordinate proof — choosing the right computations for \"parallel\" and \"half as long\" instead of asserting them from the picture."
 },
 {
  "id": "S1-50",
  "set": 1,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and coterminal angles",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and coterminal angles — NC.M3.F-TF.1 (understand radian measure of an angle; the arc length on a unit circle subtended by an angle is its radian measure)",
  "html": "<p>The auditorium&#x27;s moving spotlight rotates on its mount during the school play. (a) The light sweeps through $315^\\circ$ during one scene change. Express this angle in radians. (b) In another cue, the light sweeps an angle of $\\dfrac{5\\pi}{6}$ radians. How many degrees is that, and what arc length does the beam&#x27;s endpoint trace on a unit circle? (c) Find a positive coterminal angle for $-\\dfrac{\\pi}{3}$ radians, and explain what &quot;coterminal&quot; means for the spotlight&#x27;s final direction.</p>\n<p>## Volume, Geometric Modeling &amp; Statistics (Problems 51–60)</p>",
  "evidence": "A degree-to-radian conversion, a radian-to-degree conversion with the unit-circle arc length equal to the radian measure, and a coterminal angle found by adding a full turn, each tied to the spotlight's direction",
  "reveals": "Whether the student moves fluently between degrees and radians and understands radian measure as an arc length, including for negative angles."
 },
 {
  "id": "S1-51",
  "set": 1,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>The track team&#x27;s cylindrical water cooler has a radius of 15 centimeters and a height of 40 centimeters. (a) Find the volume of the cooler in cubic centimeters, giving an exact answer and a decimal approximation. (b) Convert the volume to liters (1 liter = 1,000 cm³) and round to the nearest tenth. (c) About how many 250-milliliter cups can be filled from a full cooler?</p>",
  "evidence": "The cylinder volume computed from the radius and height in cm³, a conversion to liters, and a cup count found by dividing by 0.25 liters",
  "reveals": "Whether the student chains a volume formula through two unit conversions to answer a practical serving question."
 },
 {
  "id": "S1-52",
  "set": 1,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone and scaling",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone and scaling — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>At the school fair, shaved ice is served in a cone-shaped paper cup with a radius of 5 centimeters and a height of 12 centimeters. (a) Find the volume of the cup in cubic centimeters, exact and approximate. (b) If the cup is filled only to half its height with a smaller, similar cone of ice, what fraction of the full volume does the ice occupy? Explain using similarity.</p>",
  "evidence": "The cone volume with the $\\tfrac{1}{3}$ factor in cm³, and the half-height volume fraction justified by the cube of the linear scale factor",
  "reveals": "Whether the student applies the cone formula correctly and understands that volume scales with the cube of the linear ratio."
 },
 {
  "id": "S1-53",
  "set": 1,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a pyramid and scaling",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a pyramid and scaling — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A glass pyramid display case in the school lobby has a square base with side length 10 inches and a height of 9 inches. (a) Find the volume of the case in cubic inches. (b) The case will be filled with sand for an art installation up to half its height. Explain whether the sand fills half the volume, and find the exact fraction of the volume it fills if the sand&#x27;s top surface is a square similar to the base. (Hint: think of the unfilled top as a smaller, similar pyramid.)</p>",
  "evidence": "The pyramid volume from base area and height in cubic inches, and a similar-pyramid argument showing the filled fraction is not one half, with the fraction computed from the cube of the scale factor",
  "reveals": "Whether the student combines the pyramid formula with similarity reasoning instead of assuming \"half height means half volume.\""
 },
 {
  "id": "S1-54",
  "set": 1,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Solids of rotation",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Solids of rotation — NC.M3.G-GMD.4 (identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>In art class, students spin flat shapes on a pottery wheel axis to imagine the solids they sweep out. (a) A rectangle 3 inches by 5 inches is rotated about its 5-inch side. Name the solid formed, give its radius and height, and find its volume. (b) A right triangle with legs 3 inches and 4 inches is rotated about the 4-inch leg. Name the solid formed, give its radius and height, and find its volume.</p>",
  "evidence": "Each solid named (cylinder, then cone) with the correct radius and height read from the rotating shape, and both volumes in cubic inches",
  "reveals": "Whether the student can track which dimension of the flat shape becomes the radius and which becomes the height under rotation."
 },
 {
  "id": "S1-55",
  "set": 1,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with composite geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with composite geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe objects)",
  "html": "<p>The environmental club is mulching a garden bed shaped like a rectangle 12 meters long and 8 meters wide, with a semicircular end of radius 4 meters attached to one of the 8-meter sides. (a) Find the total area of the bed in square meters, exact and approximate. (b) One bag of mulch covers 3 square meters. How many bags should the club buy?</p>",
  "evidence": "The rectangle and semicircle areas computed and added in square meters, and a bag count rounded up to a whole number of bags",
  "reveals": "Whether the student decomposes an irregular region into standard shapes and rounds a purchase quantity in the direction the situation demands."
 },
 {
  "id": "S1-56",
  "set": 1,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>The science department&#x27;s rectangular aquarium measures 100 cm long, 40 cm wide, and 50 cm tall. (a) Find the volume of the tank in liters (1 liter = 1,000 cm³). (b) An aquarium guideline says the total length of all fish should be at most 2 centimeters of fish per liter of water. What is the maximum total fish length the tank can support, in centimeters? (c) If the club stocks fish averaging 8 centimeters each, how many fish can the tank support under the guideline?</p>",
  "evidence": "The tank volume converted to liters, the guideline applied as a volume-based density to get a total fish length, and a whole-number fish count in fish",
  "reveals": "Whether the student can use a per-volume guideline as a constraint, converting units before applying it."
 },
 {
  "id": "S1-57",
  "set": 1,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Geometric design and optimization",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Geometric design and optimization — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including maximizing area under constraints)",
  "html": "<p>The gardening club will build a rectangular garden against the gym wall, so fencing is needed on only three sides. The club has 36 meters of fencing. Let $x$ be the length, in meters, of each side perpendicular to the wall. (a) Write the garden&#x27;s area $A(x)$ as a function of $x$. (b) Rewrite $A(x)$ in vertex form and find the dimensions that maximize the area. (c) What is the maximum area, in square meters?</p>",
  "evidence": "The area function built from the fencing constraint, vertex form obtained by completing the square or the vertex formula, and the maximizing dimensions with the maximum area in square meters",
  "reveals": "Whether the student turns a design constraint into a quadratic model and reads the optimum off its vertex."
 },
 {
  "id": "S1-58",
  "set": 1,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Statistical inference and random sampling",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Statistical inference and random sampling — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample; decide which type of study is appropriate)",
  "html": "<p>The principal wants to estimate the average number of minutes per night that all 900 students at the school spend on homework. (a) What is the population in this study? (b) A counselor selects 40 students at random from the school roster and finds a sample mean of 85 minutes. Explain why this sample mean is a reasonable estimate of the population mean, and what could still make it inaccurate. (c) Instead, another counselor surveys only students studying in the library after school and gets a mean of 130 minutes. Explain why this second estimate is not trustworthy for the whole school.</p>",
  "evidence": "The population named as all 900 students, a justification of the random sample based on every student having an equal chance of selection, and the library sample identified as biased toward heavy studiers",
  "reveals": "Whether the student distinguishes a random sample that supports generalization from a convenience sample that does not."
 },
 {
  "id": "S1-59",
  "set": 1,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Randomized experiments and significance",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Randomized experiments and significance — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A teacher wants to know whether listening to instrumental music while studying improves quiz scores. She randomly assigns 50 volunteers to two groups of 25: one studies with music, the other in silence. The music group&#x27;s mean quiz score is 82 and the silence group&#x27;s mean is 78, a difference of 4 points. To test whether the difference could be due to chance, she runs a simulation: the 50 scores are randomly reassigned to two groups of 25 a total of 200 times, and only 6 of the 200 simulations produce a difference in means of 4 points or more. (a) What percent of the simulations produced a difference at least as large as the observed one? (b) Is the observed difference statistically significant at the 5% level? (c) State the conclusion the teacher can draw, and explain why random assignment matters for that conclusion.</p>",
  "evidence": "The simulation proportion computed as a percent, a significance decision comparing it with 5%, and a cause-and-effect conclusion credited to random assignment balancing the groups",
  "reveals": "Whether the student uses a simulation distribution as the standard for \"could this be chance?\" and ties causal language to random assignment."
 },
 {
  "id": "S1-60",
  "set": 1,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data, including recognizing correlation versus causation and biased sampling)",
  "html": "<p>The school newspaper runs the headline &quot;Energy Drinks Boost GPA!&quot; The article is based on a survey taken outside a convenience store near school, in which students who said they drink energy drinks also reported higher GPAs than students who said they do not. (a) Is this an experiment or an observational study? How do you know? (b) Give two specific reasons the headline&#x27;s conclusion is not justified. (c) Rewrite the headline so it accurately describes what the data show.</p>",
  "evidence": "The study classified as observational because no treatment was assigned, two distinct flaws named (such as confounding variables and a non-representative store sample or self-reported GPAs), and a corrected headline that claims association only",
  "reveals": "Whether the student audits a media claim against study design instead of accepting a causal headline at face value."
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
  "id": "S2-21",
  "set": 2,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Arithmetic with complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Arithmetic with complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers)",
  "html": "<p>A weather station&#x27;s electronics combine two alternating signal readings modeled by the complex numbers $a = 3 + 2i$ and $b = 1 - 4i$ (in volts). (a) Find $a + b$ and interpret the result as a single combined reading. (b) Find $a - b$. (c) Find $a \\cdot b$, simplifying fully using $i^2 = -1$.</p>",
  "evidence": "All three results written in $a + bi$ form, with the multiplication shown distributing and using $i^2 = -1$",
  "reveals": "Whether the student treats $i$ as a number obeying the usual algebra rules — combining like terms and collapsing $i^2$ correctly."
 },
 {
  "id": "S2-22",
  "set": 2,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Interpreting parts of an expression",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting parts of an expression — NC.M3.A-SSE.1 (interpret parts of an expression, such as terms, factors, and coefficients, in terms of a context)",
  "html": "<p>A pond&#x27;s algae coverage, in square meters, $t$ weeks after a treatment is modeled by $A(t) = 240(0.85)^t + 30$. (a) Find the total coverage at the moment of treatment, $A(0)$. (b) Interpret the factor $0.85$ in context. (c) Interpret the constant $30$ in context. (d) Find the coverage after 2 weeks.</p>",
  "evidence": "The initial value computed from the expression, the decay factor described as a weekly percent change of the treatable portion, the constant described as a persistent background level, and the week-2 value in square meters",
  "reveals": "Whether the student reads an expression as a story about quantities — starting amount, rate of change, and floor — rather than as symbols to manipulate."
 },
 {
  "id": "S2-23",
  "set": 2,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "The Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "The Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder on division by $x - a$ is $P(a)$; use it to evaluate polynomials and test factors)",
  "html": "<p>A snowmelt runoff index for a mountain watershed is modeled by $P(x) = x^3 - 5x^2 + 8x - 4$, where $x$ is the number of days after the spring thaw begins. (a) Use the Remainder Theorem to find $P(5)$ without substituting into the full cubic directly. (b) Is $(x - 2)$ a factor of $P(x)$? Justify using the Remainder Theorem. (c) State what $P(5)$ means in context.</p>",
  "evidence": "A synthetic-division (or equivalent) computation giving the remainder at $x = 5$, the value $P(2)$ used to decide the factor question, and a contextual reading of the result",
  "reveals": "Whether the student connects division remainders to function values — and can turn that connection into a factor test."
 },
 {
  "id": "S2-24",
  "set": 2,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add and subtract rational expressions with unlike denominators and simplify)",
  "html": "<p>A hiker walks 4 miles from a trailhead to a lake at a steady rate of $x$ miles per hour, then walks the same 4 miles back at a rate 1 mile per hour slower, $(x - 1)$ miles per hour. (a) Write the total hiking time as a single rational expression in $x$. (b) Use your expression to find the total time if the hiker walks out at 4 mph, and confirm it by computing the two legs separately.</p>",
  "evidence": "The two leg times written as rational expressions, combined over a common denominator into one simplified expression, and the numeric total time in hours verified two ways",
  "reveals": "Whether the student can build a rational model from a rate situation and handle the unlike-denominator algebra cleanly."
 },
 {
  "id": "S2-25",
  "set": 2,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations — NC.M3.A-REI.2 (solve radical equations in one variable and identify extraneous solutions)",
  "html": "<p>Balancing two estimates of a stream&#x27;s depth leads a hydrologist to the equation $\\sqrt{x + 7} = x - 5$, where $x$ is a measured flow value. (a) Solve the equation algebraically. (b) Check every candidate solution in the original equation and identify any extraneous solution, explaining why it fails. (c) State the valid value of $x$.</p>",
  "evidence": "Squaring applied to isolate the solution set, both algebraic candidates listed, each candidate checked in the original equation, and the extraneous one rejected with a reason tied to the radical's sign requirements",
  "reveals": "Whether the student knows squaring can manufacture solutions — and verifies candidates instead of trusting the algebra blindly."
 },
 {
  "id": "S2-26",
  "set": 2,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange a formula to highlight a quantity of interest)",
  "html": "<p>The cross-section of a drainage swale is a trapezoid with area $A = \\dfrac{h}{2}(a + b)$, where $h$ is the depth, $a$ is the top width, and $b$ is the bottom width (all in feet). (a) Rearrange the formula to solve for the bottom width $b$. (b) A swale cross-section has area 18 square feet, depth 3 feet, and top width 7 feet. Find the bottom width.</p>",
  "evidence": "The formula solved for $b$ with the inverse operations shown, and the bottom width computed in feet from the given measurements",
  "reveals": "Whether the student can treat a formula as an equation to be restructured — isolating a design variable before numbers go in."
 },
 {
  "id": "S2-27",
  "set": 2,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of polynomial equations",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of polynomial equations — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>A wind study of a footbridge produces the vibration equation $x^4 + 3x^2 - 4 = 0$. (a) Find all solutions — real and complex. (b) State how the number of solutions relates to the Fundamental Theorem of Algebra. (c) Which solutions could represent physically observable vibration modes, and why?</p>",
  "evidence": "A substitution (such as $u = x^2$) reducing the equation to a factorable quadratic, all four solutions listed, the count matched to the degree, and the real solutions identified as the physical ones",
  "reveals": "Whether the student can recognize a quadratic in disguise inside a quartic — and again separates algebraic completeness from physical meaning."
 },
 {
  "id": "S2-28",
  "set": 2,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Zeros, multiplicity, and graph behavior",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros, multiplicity, and graph behavior — NC.M3.A-APR.3 (identify zeros of polynomials and use them to construct a rough graph, including the effect of multiplicity and end behavior)",
  "html": "<p>A survey drone&#x27;s height relative to a ridgeline, in hundreds of feet, $x$ minutes into a flight pattern is modeled by $P(x) = (x + 2)(x - 3)^2$. (a) Find all zeros of $P$ and state the multiplicity of each. (b) Describe the behavior of the graph at each zero — whether it crosses the $x$-axis or touches and turns around — and justify from the multiplicity. (c) Describe the end behavior of the graph, and find the $y$-intercept.</p>",
  "evidence": "Both zeros with multiplicities, cross-versus-touch behavior correctly tied to even/odd multiplicity, end behavior from the degree and leading coefficient, and the $y$-intercept computed from the factored form",
  "reveals": "Whether the student reads multiplicity as graph behavior — a repeated zero flattens the graph into a touch rather than a crossing."
 },
 {
  "id": "S2-29",
  "set": 2,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms using polynomial division, including division by a quadratic)",
  "html": "<p>A sediment-transport model requires rewriting $\\dfrac{2x^3 - 3x^2 + x - 5}{x^2 - x + 1}$ in the form $q(x) + \\dfrac{r(x)}{x^2 - x + 1}$. Carry out the division by the quadratic denominator and write the result, identifying the quotient and the remainder.</p>",
  "evidence": "A polynomial long division with the quadratic divisor, the quotient and the (lower-degree) remainder identified, and the final expression written in quotient-plus-remainder form",
  "reveals": "Whether the student can extend polynomial division beyond a linear divisor — tracking place value across two division steps."
 },
 {
  "id": "S2-30",
  "set": 2,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Systems solved approximately from tables",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Systems solved approximately from tables — NC.M3.A-REI.11 (explain why the $x$-coordinates of intersection points are the solutions of $f(x) = g(x)$; find approximate solutions using tables)",
  "html": "<p>Two models predict the number of algae cells (in thousands) in a pond sample $x$ hours after sunrise: an exponential model $f(x) = 2^x$ and a linear model $g(x) = 3x + 2$. A table gives: at $x = 0, 1, 2, 3, 4, 5$, $f$ takes values $1, 2, 4, 8, 16, 32$ and $g$ takes values $2, 5, 8, 11, 14, 17$. (a) Explain why the graphs of $y = f(x)$ and $y = g(x)$ must intersect at some $x$ between 3 and 4. (b) Give an approximate solution of $f(x) = g(x)$ in that interval, and state what it means for the two algae models.</p>\n<p>## Functions (Problems 31–40)</p>",
  "evidence": "A sign-change argument comparing $f$ and $g$ at $x = 3$ and $x = 4$, an approximate solution within the interval, and a contextual statement of what the crossing time means",
  "reveals": "Whether the student can locate a solution from tabular evidence — using a change in which model is larger as proof a crossing exists."
 },
 {
  "id": "S2-31",
  "set": 2,
  "n": 31,
  "strand": "Functions",
  "topic": "Graphing exponential functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing exponential functions — NC.M3.F-IF.7e (graph exponential functions, showing intercepts and end behavior)",
  "html": "<p>The light intensity below the surface of a lake, as a percent of the surface intensity, is modeled by $I(d) = 100(0.72)^d$, where $d$ is the depth in meters. (a) Describe the graph of $I$: its intercept, whether it increases or decreases, and its horizontal asymptote. (b) State the domain and range of $I$ in context. (c) Find the light intensity at a depth of 3 meters, to the nearest tenth of a percent.</p>",
  "evidence": "The intercept and decay behavior identified, the asymptote named, domain and range restricted to the context (nonnegative depth, intensity between 0 and 100 percent), and the depth-3 intensity in percent",
  "reveals": "Whether the student reads an exponential model's graph as physical behavior — full light at the surface fading toward zero with depth."
 },
 {
  "id": "S2-32",
  "set": 2,
  "n": 32,
  "strand": "Functions",
  "topic": "Finding an inverse function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding an inverse function — NC.M3.F-BF.4a (find inverse functions; solve $f(x) = c$ for a simple function and write its inverse)",
  "html": "<p>After spring rains, a reservoir refills at a steady rate. Its water level, in feet above a gauge mark, $t$ days after the rain is $L(t) = 2.5t + 38$. (a) Find the inverse function $L^{-1}$, showing the steps. (b) Use the inverse to find how many days it takes the reservoir to reach a level of 48 feet, and explain what the inverse&#x27;s input and output mean. (c) State the domain restriction on the inverse that comes from the context.</p>",
  "evidence": "The inverse derived by swapping and solving, the day count computed from the inverse with input/output meanings stated (level in, days out), and a domain restriction tied to the refill starting level",
  "reveals": "Whether the student can actually construct an inverse — not just read one — and interpret the swapped variables in context."
 },
 {
  "id": "S2-33",
  "set": 2,
  "n": 33,
  "strand": "Functions",
  "topic": "Transformations of functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations of functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$ and $f(x + k)$; describe transformations in context)",
  "html": "<p>A city&#x27;s daily high temperature is modeled by $f(t)$, where $t$ is hours after midnight. The model $f$ reaches a maximum of 78°F at $t = 15$ and has a midline of 65°F. A neighboring city is modeled by $g(t) = f(t - 2) + 5$. (a) Describe the transformations that produce $g$ from $f$. (b) State the maximum of $g$, the time it occurs, and $g$&#x27;s midline. (c) A third city is modeled by $m(t) = f(t + 3)$. State the time of its maximum, and describe the shift in words.</p>",
  "evidence": "Both shifts described with directions and amounts, the new maximum value and time carried through the shifts, the new midline, and the leftward shift for $m$ with its earlier maximum time",
  "reveals": "Whether the student tracks what horizontal and vertical shifts do to the features that matter — when the peak happens versus how hot it gets."
 },
 {
  "id": "S2-34",
  "set": 2,
  "n": 34,
  "strand": "Functions",
  "topic": "Piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Piecewise-defined functions — NC.M3.F-IF.7b (graph piecewise-defined functions and interpret their values in context)",
  "html": "<p>The water depth in a tidal creek, in feet, $t$ hours after low tide begins is modeled by the piecewise function<br>$$D(t) = \\begin{cases} 1 + 0.5t, &amp; 0 \\le t \\le 6 \\\\ 7 - 0.5t, &amp; 6 &lt; t \\le 12 \\end{cases}$$<br>(a) Describe the graph of $D$ over its domain, including the value at the joining point $t = 6$. (b) Find $D(3)$ and $D(9)$, and interpret each. (c) State the domain and range of $D$. (d) Find all times when the depth is exactly 3 feet.</p>",
  "evidence": "A description of two line segments meeting at the joining value, both requested depths computed from the correct piece and interpreted, domain and range stated, and both times at depth 3 feet found (one on each piece)",
  "reveals": "Whether the student chooses the correct rule for each input — and notices a rising-and-falling quantity hits the same depth twice."
 },
 {
  "id": "S2-35",
  "set": 2,
  "n": 35,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express the solution of $ab^{ct} = d$ as a logarithm and evaluate it)",
  "html": "<p>A biologist counts algae cells in a lake sample. The count is modeled by $A(t) = 120(1.4)^t$, where $t$ is days after sampling begins. (a) Write the equation whose solution gives the time when the count reaches 1,500 cells, and express its solution as a logarithm. (b) Evaluate the logarithm to find the time, to the nearest tenth of a day. (c) State one assumption behind using this model to predict that time.</p>",
  "evidence": "The equation set up with the target count, the solution isolated and written as a logarithm (change of base shown), the time in days, and a stated modeling assumption such as a constant growth rate",
  "reveals": "Whether the student sees a logarithm as the tool that undoes an exponential — and can land on a decimal answer from the exact log form."
 },
 {
  "id": "S2-36",
  "set": 2,
  "n": 36,
  "strand": "Functions",
  "topic": "Combining function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining function types — NC.M3.F-BF.1b (combine standard function types using arithmetic operations)",
  "html": "<p>A state park records visitors in two areas. Morning hikers in the trail area number $M(t) = 40t$, and visitors to the garden area number $G(t) = 5t^2 + 10t$, where $t$ is hours after the park opens at 8:00 AM. (a) Build the total-visitor function $T(t) = M(t) + G(t)$ and simplify it. (b) Find the total number of visitors at $t = 4$, and the contribution of each area at that time. (c) Which area has more visitors at $t = 4$? By how many?</p>",
  "evidence": "The sum function simplified into a single polynomial, the total and both separate contributions at $t = 4$ with units, and the comparison with the difference",
  "reveals": "Whether the student can assemble a model by adding two different function types — and keep the parts distinguishable inside the total."
 },
 {
  "id": "S2-37",
  "set": 2,
  "n": 37,
  "strand": "Functions",
  "topic": "Domain and range in context",
  "standards": [
   "NC.M3.F-IF.5"
  ],
  "standardsDetail": "Domain and range in context — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes)",
  "html": "<p>At an outdoor science day, a model rocket&#x27;s height in meters, $t$ seconds after launch, is $H(t) = -4.9t^2 + 29.4t + 2$. (a) Find the maximum height and the time it occurs. (b) Find how long the rocket is in the air (until it returns to the ground), to the nearest hundredth of a second. (c) State the domain and range of $H$ that make sense in this context, and explain how they differ from the mathematical domain and range of the quadratic.</p>",
  "evidence": "The vertex height and time, the positive root found as the flight time, context domain and range stated with units, and an explicit contrast with the unrestricted quadratic",
  "reveals": "Whether the student trims a mathematical model to the part of it that describes reality — flight starts at launch and ends at landing."
 },
 {
  "id": "S2-38",
  "set": 2,
  "n": 38,
  "strand": "Functions",
  "topic": "Functions, domain, and range from a graph description",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Functions, domain, and range from a graph description — NC.M3.F-IF.1 (understand function notation and that a function's graph is the set of ordered pairs satisfying its equation; identify domain and range)",
  "html": "<p>A ski area tracks snow depth $S(t)$, in inches, over one day ($t$ hours after midnight). The depth starts at 6 inches at midnight, rises steadily to 10 inches at $t = 8$ during a morning storm, then melts steadily down to 4 inches at $t = 20$, and stays constant until $t = 24$. (a) State the domain and range of $S$. (b) Find $S(8)$ and state what it means. (c) Find all times $t$ when the snow depth is exactly 6 inches, showing how you get them. (d) Is $S$ a function of $t$? Explain.</p>",
  "evidence": "Domain and range read from the described behavior, the peak value with its meaning, the times at depth 6 inches found from the rising start point and the melting segment's rate, and a function determination justified by one output per input",
  "reveals": "Whether the student can reconstruct a function's key values from a verbal graph description — including reading a value off a sloped segment."
 },
 {
  "id": "S2-39",
  "set": 2,
  "n": 39,
  "strand": "Functions",
  "topic": "Constraints as inequalities",
  "standards": [
   "NC.M3.A-CED.3"
  ],
  "standardsDetail": "Constraints as inequalities — NC.M3.A-CED.3 (represent constraints by inequalities and interpret solutions as viable or nonviable options in a modeling context)",
  "html": "<p>A community orchard committee plans to plant $x$ apple trees and $y$ peach trees. Apple trees cost $45 each and peach trees cost $30 each. The committee has $1,200 to spend, room for at most 30 trees, and wants at least 10 apple trees. (a) Write a system of inequalities representing these constraints (include $y \\ge 0$). (b) Determine whether planting 14 apple and 12 peach trees is feasible, checking every constraint. (c) Determine whether planting 20 apple and 15 peach trees is feasible, and name each constraint it violates.</p>",
  "evidence": "Four inequalities covering budget, capacity, the apple minimum, and nonnegativity, both proposals tested against all constraints with the arithmetic shown, and violations named explicitly",
  "reveals": "Whether the student translates a word problem's limits into a working system — and treats feasibility as satisfying every constraint at once."
 },
 {
  "id": "S2-40",
  "set": 2,
  "n": 40,
  "strand": "Functions",
  "topic": "Verifying inverses by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverses by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A weather station&#x27;s old gauge converts an actual wind speed $x$ (in mph) to a dial reading $f(x) = \\dfrac{x - 4}{3}$. A proposed correction formula is $g(x) = 3x + 4$. (a) Compute $f(g(x))$ and $g(f(x))$, simplifying each fully. (b) State what the two results prove about $f$ and $g$. (c) The dial reads 6. Use the appropriate function to find the actual wind speed, in mph.</p>\n<p>## Trigonometry, Proof, Circles &amp; Coordinate Geometry (Problems 41–50)</p>",
  "evidence": "Both compositions carried out and simplifying to $x$, the inverse conclusion stated, and the correction function applied to the dial reading to recover the actual speed",
  "reveals": "Whether the student knows an inverse must undo the function in both orders — and can run the verification, not just assert it."
 },
 {
  "id": "S2-41",
  "set": 2,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle; convert between degrees and radians)",
  "html": "<p>An anemometer has cups mounted on arms of radius 0.25 meters that spin in the wind. (a) Convert $240^\\circ$ to radians. (b) The cups rotate through $240^\\circ$ from a starting position. Find the distance, in meters, that one cup travels along its circular path. (c) Convert $\\dfrac{5\\pi}{6}$ radians to degrees. (d) Explain, using the unit circle, why the radian measure of an angle equals the length of the arc it cuts on the unit circle.</p>",
  "evidence": "Both conversions with the conversion factor shown, the cup's travel distance computed as radius times angle in meters, and a unit-circle explanation referencing radius 1",
  "reveals": "Whether the student sees radians as measured arc length — not just a conversion recipe."
 },
 {
  "id": "S2-42",
  "set": 2,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>A circular plaza has center $O$, with points $A$, $B$, and $C$ on the circle. The central angle $\\angle AOB$ measures $130^\\circ$. (a) Find the measure of the inscribed angle $\\angle ACB$ that intercepts arc $AB$, and name the theorem you used. (b) Find the measure of arc $AB$ and of the major arc $AB$. (c) A straight rope stretches across the plaza as chord $\\overline{PQ}$. The perpendicular distance from the center to the chord is 6 meters and the plaza&#x27;s radius is 10 meters. Find the length of the chord, justifying each step.</p>",
  "evidence": "The inscribed angle computed as half the central angle with the theorem named, both arc measures, and the chord length found by dropping a perpendicular from the center (which bisects the chord) and applying the Pythagorean theorem",
  "reveals": "Whether the student links center, arc, and rim angles into one system — and uses the radius-to-chord perpendicular as a right-triangle tool."
 },
 {
  "id": "S2-43",
  "set": 2,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed quadrilaterals and angles in a semicircle",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed quadrilaterals and angles in a semicircle — NC.M3.G-C.3 (construct and use inscribed figures in a circle; opposite angles of an inscribed quadrilateral are supplementary; an angle inscribed in a semicircle is a right angle)",
  "html": "<p>Four gates $A$, $B$, $C$, $D$, in order, stand on the circular wall of a round garden, forming an inscribed quadrilateral. The angle at gate $A$ is $(3x + 10)^\\circ$ and the angle at gate $C$ is $(5x - 30)^\\circ$. (a) Find $x$ and the measures of angles $A$ and $C$, naming the property you used. (b) The angle at gate $B$ is $(2x + 40)^\\circ$. Find the angle at gate $D$. (c) A straight path from gate $A$ to gate $C$ passes through the garden&#x27;s center. State, with its theorem name, the measure of the angle at gate $B$ in the triangle formed by the paths $AB$, $BC$, and $AC$ — and note whether it agrees with part (b).</p>",
  "evidence": "The supplementary relationship set up and solved for $x$, both angle measures, the remaining angle from the second supplementary pair, and the semicircle right-angle theorem stated and checked against part (b)",
  "reveals": "Whether the student recognizes a cyclic quadrilateral's opposite angles as supplementary — and cross-checks with the diameter theorem."
 },
 {
  "id": "S2-44",
  "set": 2,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>On a coordinate map (units in miles), the boundary of a circular wildlife preserve is the circle $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Write the equation in center–radius form, showing the completing-the-square steps, and state the center and radius. (b) A ranger station sits at $(7, 1)$. Determine whether it is inside, on, or outside the preserve boundary, with justification. (c) A trailhead sits at $(3, 4)$. Determine whether it is inside, on, or outside the boundary.</p>",
  "evidence": "The completed-square form with both square completions shown, center and radius stated, and each point classified by comparing its distance from the center with the radius",
  "reveals": "Whether the student can recover a circle's geometry from a general-form equation — and use distance-to-center as the inside/outside test."
 },
 {
  "id": "S2-45",
  "set": 2,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that the base angles of an isosceles triangle are congruent)",
  "html": "<p><strong>Proof.</strong> Figure: triangle $ABC$ is isosceles with $\\overline{AB} \\cong \\overline{AC}$, so $A$ is the vertex angle and $\\overline{BC}$ is the base. Point $D$ is the midpoint of $\\overline{BC}$, and segment $\\overline{AD}$ is drawn. Prove that the base angles are congruent: $\\angle B \\cong \\angle C$. Write a structured proof with a reason for each statement.</p>",
  "evidence": "A two-column or paragraph proof using the midpoint to get two congruent base segments, the shared side, SSS triangle congruence, and CPCTC, with a reason for every statement",
  "reveals": "Whether the student can draw one well-chosen segment to split a symmetric figure into two congruent triangles — the key auxiliary-line move."
 },
 {
  "id": "S2-46",
  "set": 2,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena; determine amplitude, midline, and period from a description)",
  "html": "<p>At a coastal weather station, the tide is at its highest, 8.2 feet, at $t = 0$ hours, falls to its lowest of 2.2 feet, and returns to high tide every 12 hours. (a) Build a cosine model $h(t)$ for the tide height, finding the midline, amplitude, and the coefficient of $t$. (b) Find the tide height at $t = 4$ hours. (c) At what time is the first low tide?</p>",
  "evidence": "The midline and amplitude computed from the high and low values, the period converted into the coefficient of $t$, the assembled cosine model, the height at 4 hours in feet, and the low-tide time at half a period",
  "reveals": "Whether the student can build a sinusoidal model from physical extremes — the reverse direction from reading a given model."
 },
 {
  "id": "S2-47",
  "set": 2,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit circle and extending trigonometric functions",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit circle and extending trigonometric functions — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers; explain signs and periodicity)",
  "html": "<p>The pointer of a wind vane sweeps around a circle of radius 13 inches centered at the origin. At one moment the pointer&#x27;s tip is at the point $(-5, 12)$, which is the terminal side of an angle $\\theta$ in standard position. (a) Find the corresponding point on the unit circle. (b) State $\\sin\\theta$ and $\\cos\\theta$, and the quadrant of $\\theta$. (c) Explain the sign of each value using the coordinates. (d) State $\\sin(\\theta + 2\\pi)$ and $\\cos(\\theta + 2\\pi)$, with a reason.</p>",
  "evidence": "The tip's coordinates scaled to radius 1, sine and cosine read from the unit-circle point, the quadrant identified, signs explained from the point's coordinates, and the $2\\pi$-shifted values with periodicity as the reason",
  "reveals": "Whether the student derives trig values from a position on a circle — scaling any radius down to the unit circle — rather than needing a memorized angle."
 },
 {
  "id": "S2-48",
  "set": 2,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive, using similarity, that arc length is proportional to the radius; use $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$)",
  "html": "<p>A curved section of a nature trail is an arc of a circle with central angle $\\dfrac{3\\pi}{4}$ radians and arc length $12\\pi$ meters. (a) Find the radius of the circle. (b) Find the area of the sector enclosed by the arc and two straight paths to the center, in square meters (exact and approximate). (c) Explain, using similarity, why doubling the radius (with the same central angle) would double the arc length but quadruple the sector area.</p>",
  "evidence": "The radius solved from the arc-length formula, the sector area computed from the radius and radian angle, and a scaling explanation distinguishing linear (arc) from quadratic (area) growth",
  "reveals": "Whether the student can run the radian formulas backward to a radius — and articulates the proportionality that defines radian measure."
 },
 {
  "id": "S2-49",
  "set": 2,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Tangents and radii",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Tangents and radii — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords, including the relationship between a radius and a tangent line)",
  "html": "<p>A circular hiking loop has center $O$ and radius 40 meters. A straight access path touches the loop at exactly one point $T$ (the path is tangent to the circle), and the trailhead $P$ lies on the path with $OP = 50$ meters. (a) Explain why the radius $\\overline{OT}$ is perpendicular to the path at $T$. (b) Find the distance from the trailhead to the touching point, $PT$. (c) A second straight path from the same trailhead $P$ touches the loop on the other side at a point $T&#x27;$. Find $PT&#x27;$ and justify your answer.</p>",
  "evidence": "The radius-to-tangent perpendicularity fact stated and used to form a right triangle, a Pythagorean computation of $PT$, and an equal-tangents justification for $PT'$",
  "reveals": "Whether the student can convert a tangency condition into right-triangle geometry and use tangent-segment congruence."
 },
 {
  "id": "S2-50",
  "set": 2,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that the diagonals of a parallelogram bisect each other)",
  "html": "<p><strong>Proof.</strong> Figure: quadrilateral $ABCD$ is a parallelogram with vertices in order. Its diagonals $\\overline{AC}$ and $\\overline{BD}$ intersect at point $E$. Prove that the diagonals bisect each other: $\\overline{AE} \\cong \\overline{CE}$ and $\\overline{BE} \\cong \\overline{DE}$. Write a structured proof with a reason for each statement. (You may use the fact that opposite sides of a parallelogram are congruent and parallel.)</p>\n<p>## Volume, Geometric Modeling &amp; Statistics (Problems 51–60)</p>",
  "evidence": "A two-column or paragraph proof using alternate interior angles from the parallel sides, a pair of congruent opposite sides, ASA triangle congruence on the triangles formed by the diagonals, and CPCTC, with a reason for every statement",
  "reveals": "Whether the student can prove a fact about the diagonals' meeting point by routing through the triangles the diagonals create."
 },
 {
  "id": "S2-51",
  "set": 2,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A spherical weather balloon has a radius of 6 feet when fully inflated. (a) Find the volume of helium it holds, in cubic feet (exact in terms of $\\pi$ and approximate). (b) A smaller spherical balloon has a radius of 3 feet. Find its volume, and state how many times more helium the larger balloon holds than the smaller one. Explain the ratio using the volume formula.</p>",
  "evidence": "Both sphere volumes computed (exact and approximate), and the ratio explained by the radius being cubed — doubling the radius multiplies volume by eight",
  "reveals": "Whether the student applies the sphere formula accurately and feels the cubic scaling that makes small radius changes matter."
 },
 {
  "id": "S2-52",
  "set": 2,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a pyramid",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a pyramid — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A pyramid-shaped greenhouse has a square base 10 feet by 10 feet and a height of 6 feet. (a) Find the volume of air inside the greenhouse, in cubic feet. (b) A rectangular-prism greenhouse with the same base and height would hold three times as much air. Verify that claim with the two volume formulas.</p>",
  "evidence": "The pyramid volume computed with the $\\frac{1}{3}$ factor and the base area, the prism volume for comparison, and the factor-of-three relationship confirmed numerically",
  "reveals": "Whether the student handles the pyramid's $\\frac{1}{3}$ factor as a comparison tool, not just a formula detail."
 },
 {
  "id": "S2-53",
  "set": 2,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross-sections and solids of rotation",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross-sections and solids of rotation — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross-sections of three-dimensional objects, and identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>A fallen log is a cylinder 12 feet long with radius 1 foot. (a) Describe the cross-section of the log cut by a plane parallel to its circular base, a plane containing its axis, and a plane tilted at an angle between the two. Give the shape and dimensions of each. (b) A rectangular garden border 3 feet by 5 feet is rotated about its 5-foot side to sweep out a solid. Identify the solid, give its radius and height, and find its volume in cubic feet (exact and approximate).</p>",
  "evidence": "Three cross-sections named with dimensions (circle, rectangle, ellipse), the rotated solid identified as a cylinder with the correct radius and height, and its volume computed",
  "reveals": "Whether the student can slice and spin shapes mentally — connecting 2D sections to 3D structure in both directions."
 },
 {
  "id": "S2-54",
  "set": 2,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>Biologists count 340 deer in a wildlife refuge that covers 12.5 square miles. (a) Find the population density of deer, in deer per square mile. (b) Assuming the deer are spread uniformly, estimate how many deer live in a 4-square-mile sector of the refuge. (c) State one reason the uniform-spread assumption might fail in a real refuge.</p>",
  "evidence": "The density computed with units, the sector estimate found by multiplying density by area and rounded sensibly for a count of animals, and a realistic critique of the uniformity assumption",
  "reveals": "Whether the student uses density as a rate that converts between population and area — and questions the assumption behind the conversion."
 },
 {
  "id": "S2-55",
  "set": 2,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling objects with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling objects with geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>An A-frame tent has the shape of a triangular prism. The triangular end is 6 feet wide at the base and 5 feet tall, and the tent is 8 feet long. (a) Model the tent as a prism and find the volume of space inside it, in cubic feet. (b) Find the area of the tent&#x27;s floor. (c) Describe the decomposition you used — which two measurements form the triangular end and which measurement extrudes it.</p>",
  "evidence": "The tent decomposed into a triangular prism, the volume computed as triangular-end area times length, the floor area as a rectangle, and the modeling choices stated",
  "reveals": "Whether the student sees a real object as a standard solid — cross-section first, then length — the core modeling move of this standard."
 },
 {
  "id": "S2-56",
  "set": 2,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Statistical inference from samples",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Statistical inference from samples — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample; decide which population inferences are valid)",
  "html": "<p>Biologists want to estimate the mean length of all adult trout in a lake. They randomly select 60 trout from locations spread across the lake, measure them, and find a sample mean length of 24.6 cm. (a) Identify the population and the sample. (b) Identify the parameter and the statistic in this study, with values where known. (c) To what population can the biologists reasonably generalize their estimate, and what makes the generalization defensible? (d) State one way the sampling method could still bias the estimate, despite the random selection.</p>",
  "evidence": "Population and sample correctly distinguished, parameter (unknown true mean) versus statistic (the 24.6 cm sample mean) identified, the generalization scoped to the lake's adult trout with randomness as the justification, and a plausible bias source named",
  "reveals": "Whether the student keeps the sample/population and statistic/parameter distinctions straight — the vocabulary of every valid inference."
 },
 {
  "id": "S2-57",
  "set": 2,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Study design and randomization",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Study design and randomization — NC.M3.S-IC.3 (recognize the purposes and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>Classify each study as a survey, an observational study, or an experiment, and identify where randomness enters each one. Study 1: Two hundred county residents are randomly selected and asked whether they visited a state park last year. Study 2: Researchers record algae levels in 20 lakes that already use a certain fertilizer nearby and 20 similar lakes that do not, without changing anything. Study 3: Thirty garden plots are randomly assigned to one of two mulch types, and soil moisture is measured after a month. Then: (d) explain the different purposes of random selection (Study 1) and random assignment (Study 3) — what does each one allow researchers to conclude?</p>",
  "evidence": "All three studies classified with the role of randomness named in each, and a comparison stating that random selection supports generalizing to a population while random assignment supports causal conclusions",
  "reveals": "Whether the student distinguishes the two jobs randomness does — representing a population versus balancing groups for a fair comparison."
 },
 {
  "id": "S2-58",
  "set": 2,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A hiking club wants to estimate the mean weight of all its members&#x27; backpacks on overnight trips. A random sample of 40 members&#x27; packs has a mean weight of 28.4 pounds. To build a margin of error, the club runs a simulation: 500 simulated random samples of size 40 produce sample means with a standard deviation of 1.3 pounds, and 95% of the simulated means fall between 25.9 and 30.9 pounds. (a) Use the simulation to give a margin of error for the estimate. (b) Give a plausible interval for the true mean pack weight of all members. (c) A club officer claims the true mean is definitely more than 30 pounds. Use your interval to evaluate that claim.</p>",
  "evidence": "The margin of error taken as about two simulation standard deviations, the interval centered at the sample mean in pounds, consistency with the simulation's 95% range noted, and the officer's claim rejected because the interval includes values at and below 30 pounds",
  "reveals": "Whether the student builds an interval for a mean (not just a proportion) from simulation spread — and uses the whole interval to judge a claim."
 },
 {
  "id": "S2-59",
  "set": 2,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Study design and randomization",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Study design and randomization — NC.M3.S-IC.3 (recognize the purposes and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A gardener wants to know whether a new ground cover keeps soil moister than the old one. Three study designs are proposed for the community garden&#x27;s 24 beds. <strong>Design 1:</strong> put the new cover on the beds nearest the water spigot and the old cover on the far beds, then compare soil moisture after a dry month. <strong>Design 2:</strong> let each volunteer gardener choose which cover to use on their own beds, then compare soil moisture. <strong>Design 3:</strong> randomly assign each of the 24 beds to one cover (12 beds each), then compare soil moisture. (a) Which design is a randomized experiment, and which are observational studies? (b) Explain why only one of the designs can support a conclusion that the new cover <em>causes</em> moister soil. (c) In Design 3, what does the random assignment accomplish, and to what collection of beds does the conclusion apply?</p>",
  "evidence": "Correct classification of all three designs, a confounding-based explanation for Designs 1 and 2, and a statement that random assignment balances other variables while the conclusion covers the beds in the study (not automatically all gardens)",
  "reveals": "Whether the student distinguishes random assignment (which supports cause-and-effect) from researcher or volunteer choice, and recognizes confounding and the limits of generalization."
 },
 {
  "id": "S2-60",
  "set": 2,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>An advertisement for TrailHead tents states: &quot;In a survey at TrailHead Outfitters stores, 9 out of 10 campers said they sleep better in a TrailHead tent!&quot; Write an evaluation of this claim: identify at least three distinct problems with the survey as evidence, and describe what a more trustworthy study of the claim would need.</p>",
  "evidence": "A written critique naming at least three issues — such as the sample being drawn from the brand's own stores (biased toward loyal customers), the tiny or undisclosed sample size behind \"9 out of 10,\" the undefined measure \"sleep better,\" the absence of a comparison group, or the sponsor's financial interest — plus features of a better study (random sample of campers, a comparison tent, a defined measure)",
  "reveals": "Whether the student interrogates who was asked, how many, and who paid — before accepting an advertising statistic."
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
  "id": "S3-21",
  "set": 3,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of quadratic equations",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of quadratic equations — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>A food truck owner is choosing a price for a new sandwich. Her break-even analysis produces the equation $x^2 - 4x + 29 = 0$, where $x$ is the price in dollars. (a) Find all solutions of the equation. (b) Explain what the solutions tell the owner about whether any real price breaks even under this model. (c) State how many solutions the equation has in total, and name the principle that guarantees that count.</p>",
  "evidence": "A quadratic-formula (or completing-the-square) computation that produces a negative discriminant and simplifies the square root of a negative number using $i$, both complex solutions written in $a + bi$ form, an interpretation tied to the absence of real roots, and a solution count matched to the degree",
  "reveals": "Whether the student can complete a complex-root computation cleanly and reads a nonreal solution set as information about the real-world model, not as a dead end."
 },
 {
  "id": "S3-22",
  "set": 3,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Extending polynomial identities to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Extending polynomial identities to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers; factor a quadratic over the complex numbers)",
  "html": "<p>An electronics repair shop works with impedances written as complex numbers. (a) Write $x^2 + 25$ as a product of two factors involving $i$, and check your factorization by expanding it. (b) A technician combines two components and computes $(3 + 4i)(3 - 4i)$. Evaluate the product, and explain why the result is a real number even though both factors are not.</p>",
  "evidence": "A factorization of the sum of squares using $\\pm 5i$ with an expansion check that recovers $x^2 + 25$ via $i^2 = -1$, a product computation in which the imaginary terms cancel, and an explanation naming the conjugate relationship between the factors",
  "reveals": "Whether the student sees conjugates as a structural tool — sums of squares factor, and conjugate products are real — rather than a memorized trick."
 },
 {
  "id": "S3-23",
  "set": 3,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "The Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "The Remainder Theorem — NC.M3.A-APR.2 (apply the Remainder Theorem: the remainder on division by $x - a$ is $f(a)$)",
  "html": "<p>A print shop&#x27;s monthly supply cost, in dollars, for completing $x$ print jobs (in tens) is modeled by $C(x) = x^3 - 4x^2 + 6x + 12$. The manager wants the cost when 30 jobs are completed, i.e., $C(3)$. (a) Use the Remainder Theorem: divide $C(x)$ by $(x - 3)$ using synthetic division and report the remainder. (b) State $C(3)$ and interpret it in context. (c) Is $(x - 3)$ a factor of $C(x)$? Justify your answer using part (a).</p>",
  "evidence": "A complete synthetic-division array with the remainder identified, the function value stated with dollar units and interpreted as the cost of 30 jobs, and a factor conclusion justified by whether the remainder is zero",
  "reveals": "Whether the student can use division as an evaluation tool and connects the remainder to both the function value and the factor question."
 },
 {
  "id": "S3-24",
  "set": 3,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Zeros and graphs of polynomial functions",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros and graphs of polynomial functions — NC.M3.A-APR.3 (identify zeros of polynomials from factored form and use them to construct a rough graph)",
  "html": "<p>A bakery tracks its weekly profit, in hundreds of dollars, during a relaunch. The model is $P(x) = (x - 1)(x - 2)(x - 3)$, where $x$ is the week number. (a) Find the zeros of $P$ and interpret each zero in context. (b) Find the $P$-intercept and interpret it. (c) Describe the end behavior of the graph and sketch the graph, marking the zeros and the intercept. (d) Using the sign of the graph, state the weeks during which the bakery was losing money in the first three weeks.</p>",
  "evidence": "Zeros read from the factors and interpreted as break-even weeks, the intercept computed and interpreted as the starting week's result, an end-behavior statement consistent with an odd-degree positive-leading-coefficient cubic, a sketch crossing the axis at each zero, and sign-based intervals for losses",
  "reveals": "Whether the student moves fluently between factored form, graph shape, and the business story the graph tells."
 },
 {
  "id": "S3-25",
  "set": 3,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite a rational expression as a quotient plus a remainder over the divisor)",
  "html": "<p>A catering cooperative&#x27;s total cost, in hundreds of dollars, for serving $x + 4$ events in a month is $C(x) = x^2 + 8x + 20$, so the average cost per event is $A(x) = \\dfrac{x^2 + 8x + 20}{x + 4}$ hundred dollars. (a) Rewrite $A(x)$ in the form $q(x) + \\dfrac{r}{x + 4}$ by polynomial division. (b) Use your rewritten form to find the average cost per event when $x = 6$ (that is, 10 events), and confirm it against the original expression. (c) Explain what happens to the term $\\dfrac{r}{x + 4}$ as the number of events grows, and what that means for the average cost.</p>",
  "evidence": "A polynomial long-division (or equivalent) computation producing the quotient and remainder form, an evaluation in both forms giving the same average cost with units, and a statement that the remainder term shrinks toward zero so the average cost approaches the quotient's value",
  "reveals": "Whether the student can restructure a rational expression to expose its long-run behavior, not just perform division mechanically."
 },
 {
  "id": "S3-26",
  "set": 3,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; rational expressions form a system analogous to the rational numbers)",
  "html": "<p>A cleaning service uses two concentrated products. Per job, the first product is used at a rate modeled by $\\dfrac{3}{x + 4}$ liters and the second at a rate modeled by $\\dfrac{5}{x - 4}$ liters, where $x$ is the number of rooms cleaned and $x &gt; 4$. (a) Write a single rational expression for the total amount used per job and simplify it completely. (b) State the values of $x$ excluded from the original expression, and explain why the restriction $x &gt; 4$ already rules out the problematic one in context.</p>",
  "evidence": "A common-denominator computation combining the two fractions into one simplified rational expression, the excluded values identified from the original denominators, and a contextual comment connecting the domain restriction to the excluded values",
  "reveals": "Whether the student can combine rational expressions over a common denominator while keeping the original domain in view."
 },
 {
  "id": "S3-27",
  "set": 3,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Rational equations in one variable",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Rational equations in one variable — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable)",
  "html": "<p>A copy shop has two printers for a large banner order. Printer A alone can finish the order in 6 hours. Working together, the two printers finish the order in 4 hours. (a) Let $x$ be the number of hours Printer B would need alone. Write an equation using the printers&#x27; hourly rates that models the combined work. (b) Solve the equation for $x$. (c) Check your solution, and explain why it makes sense that $x$ is larger than 4 even though B &quot;helps.&quot;</p>",
  "evidence": "A rate equation built from $\\frac{1}{6} + \\frac{1}{x} = \\frac{1}{4}$ reasoning, an algebraic solution obtained by clearing denominators or isolating the term, a substitution check, and an interpretation comparing the solo and combined times",
  "reveals": "Whether the student can translate a work situation into a rational equation and judge the solution's plausibility, instead of solving symbol strings."
 },
 {
  "id": "S3-28",
  "set": 3,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Solving systems graphically",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Solving systems graphically — NC.M3.A-REI.11 (explain why the $x$-coordinate of an intersection point is a solution of $f(x) = g(x)$; solve graphically)",
  "html": "<p>Two food businesses opened the same month. Business A&#x27;s total revenue after $x$ weeks is $R(x) = 50x$ dollars. Business B, which had a catering contract from day one, has total revenue $S(x) = 20x + 600$ dollars. A table of values is shown below.</p>\n<table>\n<tr><th>Weeks $x$</th><th>0</th><th>5</th><th>10</th><th>15</th><th>20</th><th>25</th></tr>\n<tr><td>$R(x)$</td><td>0</td><td>250</td><td>500</td><td>750</td><td>1000</td><td>1250</td></tr>\n<tr><td>$S(x)$</td><td>600</td><td>700</td><td>800</td><td>900</td><td>1000</td><td>1100</td></tr>\n</table>\n<p>(a) Use the table (as you would a graph) to find when the two businesses have earned the same total revenue, and state that amount. (b) Explain what the solution represents in terms of the two revenue graphs. (c) Which business is ahead before that week, which is ahead after, and what feature of the equations explains the eventual overtaking?</p>",
  "evidence": "The matching table value identified as the intersection, an explanation that the intersection's $x$-value makes both functions equal, a before/after comparison of the two businesses, and a reference to the steeper rate of change in $R$",
  "reveals": "Whether the student reads an intersection as a meaningful event — the moment one business catches another — rather than a point to plot."
 },
 {
  "id": "S3-29",
  "set": 3,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A bakery owner is saving for a new oven that will cost $\\$20{,}000$ in 5 years. Her savings account follows $A = P(1 + r)^t$, where $P$ is the amount she deposits today, $r$ is the annual interest rate, and $t$ is the time in years. (a) Rearrange the formula to solve for $P$. (b) If the account pays 4% annual interest, how much must she deposit today to reach $\\$20{,}000$ in 5 years? Round to the nearest cent. (c) Explain in one sentence why the deposit is less than $\\$20{,}000$.</p>",
  "evidence": "An isolation of $P$ that divides both sides by the growth factor $(1 + r)^t$, a substitution with the rate and time giving a present value in dollars, and a sentence attributing the smaller deposit to interest earned over the 5 years",
  "reveals": "Whether the student can solve a literal equation where the target variable is multiplied by a power, and interprets present value correctly."
 },
 {
  "id": "S3-30",
  "set": 3,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Adding and multiplying complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Adding and multiplying complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers)",
  "html": "<p>An electrician models the impedance of components in a stage-lighting rig with complex numbers, measured in ohms. (a) Two components wired in series have impedances $5 - 2i$ and $3 + 7i$. Impedances in series add. Find the total impedance in $a + bi$ form. (b) A signal passing through two amplifiers with complex gains $2 + 3i$ and $1 - 4i$ has an overall gain equal to the product of the gains. Find the overall gain in $a + bi$ form, showing how you handled the $i^2$ term.</p>",
  "evidence": "A sum combining real and imaginary parts separately, a product expanded term-by-term with $i^2$ replaced by $-1$ and the result simplified into $a + bi$ form",
  "reveals": "Whether the student operates with complex numbers as a number system — combining like parts and using $i^2 = -1$ fluently — in an applied setting."
 },
 {
  "id": "S3-31",
  "set": 3,
  "n": 31,
  "strand": "Functions",
  "topic": "Function notation in context",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Function notation in context — NC.M3.F-IF.2 (use function notation, evaluate functions, and interpret statements that use function notation in context)",
  "html": "<p>A print shop&#x27;s total charge for a banner order is modeled by $C(n) = 0.85n + 25$ dollars, where $n$ is the number of square feet of banner material. (a) Find $C(200)$ and write a sentence explaining what it means for a customer. (b) A customer&#x27;s receipt shows a total charge of $\\$110$. Write in words what question the equation $C(n) = 110$ asks, then solve it and interpret the answer. (c) Explain what $C(0) = 25$ means in this situation.</p>",
  "evidence": "An evaluation with dollar units and a plain-language interpretation, the equation read as \"what input gives an output of 110\" and solved with the input interpreted in square feet, and the constant identified as a fixed charge independent of size",
  "reveals": "Whether the student treats function notation as a two-way language — reading values off and posing the inverse question — anchored in the situation."
 },
 {
  "id": "S3-32",
  "set": 3,
  "n": 32,
  "strand": "Functions",
  "topic": "Key features of graphs in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of graphs in context — NC.M3.F-IF.4 (interpret key features of graphs — intercepts, intervals of increase/decrease, maxima, average rate of change — in context)",
  "html": "<p>The graph of a food truck&#x27;s daily revenue $R(h)$, in dollars, $h$ hours after opening, is described as follows: it starts at $(0, 0)$, rises steadily to $(3, 900)$, decreases steadily to $(6, 500)$, rises to $(8, 1100)$, and then falls to $(10, 0)$ at closing. (a) State the $h$-intercept and explain its meaning. (b) During which intervals is revenue increasing, and what is likely happening at the truck during the first increase? (c) What is the maximum revenue, and at what time does it occur? (d) Find the average rate of change of revenue from $h = 0$ to $h = 3$, with units, and interpret it.</p>",
  "evidence": "The intercept identified and interpreted, increasing intervals read from the described graph with a lunch-rush interpretation, the maximum value with its time, and an average-rate computation with units of dollars per hour",
  "reveals": "Whether the student can extract a full story — opening, rush, lull, peak — from a graph's features rather than reading isolated points."
 },
 {
  "id": "S3-33",
  "set": 3,
  "n": 33,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph square root, cube root, and piecewise-defined functions, including step functions)",
  "html": "<p>A shipping service charges for a package of weight $w$ pounds according to $S(w) = 6$ dollars for $0 &lt; w \\le 2$; $S(w) = 10$ dollars for $2 &lt; w \\le 5$; and $S(w) = 10 + 2(w - 5)$ dollars for $w &gt; 5$. (a) Sketch the graph of $S$, carefully showing open and closed endpoints at $w = 2$ and $w = 5$. (b) Find $S(2)$, $S(5)$, and $S(8)$. (c) A customer is surprised that adding a fraction of a pound past 2 lb raises the price by $\\$4$. Use the graph to explain why.</p>",
  "evidence": "A graph with horizontal segments, a closed point at $(2, 6)$ and open point at $(2, 10)$ (and similarly at $w = 5$), the three values computed from the correct pieces, and an explanation naming the jump discontinuity at $w = 2$",
  "reveals": "Whether the student understands a step function as one function with tiered rules — including exactly which tier owns each boundary weight."
 },
 {
  "id": "S3-34",
  "set": 3,
  "n": 34,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros from factored form and showing end behavior)",
  "html": "<p>A start-up snack company&#x27;s weekly profit, in hundreds of dollars, $x$ weeks after launch is modeled by $P(x) = (x - 1)(x - 3)(x - 5)$. (a) Find the zeros of $P$ and interpret them in context. (b) Find the $P$-intercept and interpret it. (c) Describe the end behavior and sketch the graph. (d) Between which weeks does the model show the company making a profit (positive $P$)? Use the graph&#x27;s sign pattern to answer.</p>",
  "evidence": "Zeros read from the factors and interpreted as break-even weeks, the intercept computed by evaluating at zero and interpreted as a launch-period loss, end behavior for an odd-degree cubic with positive leading coefficient, a sketch consistent with the zeros, and sign-based intervals where profit is positive",
  "reveals": "Whether the student assembles zeros, intercept, end behavior, and sign into one coherent picture of a young company's finances."
 },
 {
  "id": "S3-35",
  "set": 3,
  "n": 35,
  "strand": "Functions",
  "topic": "Building functions from a context",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building functions from a context — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities; determine an explicit expression or recursive process from a context)",
  "html": "<p>A barista opens a savings account with $\\$400$ and deposits $\\$85$ at the end of every week. Let $A(n)$ be the account balance after $n$ weeks of deposits. (a) Write a recursive rule for $A(n)$, including the starting value. (b) Write an explicit rule for $A(n)$. (c) How many weeks until the balance first reaches at least $\\$2{,}000$? Show how your explicit rule answers this, and interpret the result.</p>",
  "evidence": "A recursive rule with initial value and constant increment, an explicit linear rule equivalent to it, an inequality or equation solved for the week count, and a whole-week interpretation rounding up to the first week the goal is met",
  "reveals": "Whether the student can build both descriptions of a steady-growth process and use the explicit form to answer a planning question."
 },
 {
  "id": "S3-36",
  "set": 3,
  "n": 36,
  "strand": "Functions",
  "topic": "Transformations of functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations of functions — NC.M3.F-BF.3 (describe the effect on the graph of replacing $f(x)$ with $f(x) + k$, $kf(x)$, and $f(x + k)$; recognize even and odd functions)",
  "html": "<p>A café models its customer count with $f(x)$, where $x$ is hours after 8:00 AM. A second café across town uses the same model with adjustments. Describe in context what each function represents relative to $f$: (a) $g(x) = f(x - 3)$; (b) $g(x) = f(x) + 20$; (c) $g(x) = \\tfrac{1}{2}f(x)$; (d) The graph of $f$ is symmetric about its lunch peak at $x = 5$. A student claims $f$ must be an even function. Explain why the claim is wrong, stating what symmetry an even function actually requires.</p>",
  "evidence": "Three contextual descriptions — a 3-hour later schedule shift, 20 more customers at every time, and half the customers at every time — and a correction explaining that even functions are symmetric about the vertical axis ($x = 0$), not about $x = 5$",
  "reveals": "Whether the student reads transformation notation as operational changes to a business day, and distinguishes symmetry about a peak from the definition of an even function."
 },
 {
  "id": "S3-37",
  "set": 3,
  "n": 37,
  "strand": "Functions",
  "topic": "Finding inverse functions",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding inverse functions — NC.M3.F-BF.4a (solve an equation of the form $f(x) = c$ for a simple function to produce the inverse; find the inverse of a function)",
  "html": "<p>A clothing store prices items with a 20% discount during a sale, so the sale price is $S(p) = 0.8p$, where $p$ is the original price in dollars. (a) Find a formula for the inverse function $S^{-1}$ and state what its input and output mean. (b) A jacket&#x27;s sale price is $\\$64$. Use the inverse to find its original price. (c) State a reasonable domain for $S^{-1}$ in this context and justify it.</p>",
  "evidence": "An inverse formula obtained by solving for the original price, correct input/output meanings (sale price in, original price out), an evaluation recovering the pre-sale price, and a nonnegative domain justified by the meaning of price",
  "reveals": "Whether the student understands an inverse as answering the reverse business question — \"what did it cost before the discount?\" — with units and roles swapped correctly."
 },
 {
  "id": "S3-38",
  "set": 3,
  "n": 38,
  "strand": "Functions",
  "topic": "Reading inverse values from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>An airport currency-exchange booth converts U.S. dollars to euros using the function $E(u)$ shown in the table (fees ignored).</p>\n<table>\n<tr><th>U.S. dollars $u$</th><th>0</th><th>50</th><th>100</th><th>150</th><th>200</th></tr>\n<tr><td>Euros $E(u)$</td><td>0</td><td>46</td><td>92</td><td>138</td><td>184</td></tr>\n</table>\n<p>(a) Find $E(150)$ and interpret it. (b) Find $E^{-1}(92)$ and interpret it in words a traveler would understand. (c) A traveler returns with 184 euros and converts them back at the same rate. How many dollars does she receive? Answer using inverse-function notation.</p>",
  "evidence": "A table lookup for the forward value with an interpretation, the inverse value found by reading the table backward (output 92 paired with input 100) with a traveler-friendly interpretation, and the return conversion written as an inverse evaluation",
  "reveals": "Whether the student grasps that an inverse swaps the roles of the columns — the core idea behind reading $f^{-1}$ from a table."
 },
 {
  "id": "S3-39",
  "set": 3,
  "n": 39,
  "strand": "Functions",
  "topic": "Comparing growth of function types",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Comparing growth of function types — NC.M3.F-LE.3 (observe that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial)",
  "html": "<p>Two ways of growing $\\$1{,}000$ are compared. Option A is an investment account: $A(t) = 1000(1.08)^t$ dollars after $t$ years. Option B is a side business whose value is modeled by the quadratic $B(t) = 1000 + 150t + 5t^2$ dollars.</p>\n<table>\n<tr><th>Years $t$</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th><th>50</th></tr>\n<tr><td>$A(t)$</td><td>1000</td><td>2158.93</td><td>4660.96</td><td>10062.66</td><td>21724.52</td><td>46901.61</td></tr>\n<tr><td>$B(t)$</td><td>1000</td><td>3000</td><td>6000</td><td>10000</td><td>15000</td><td>21000</td></tr>\n</table>\n<p>(a) Which option is worth more after 10 years, and by how much? (b) Between which two table times does Option A overtake Option B? (c) Explain, in terms of how each function grows, why Option A eventually pulls ahead permanently even though Option B led early.</p>",
  "evidence": "A comparison at $t = 10$ with the difference computed, the overtaking bracket located between two table rows, and an explanation contrasting constant percent growth (multiplicative) with polynomial growth whose percent increase shrinks over time",
  "reveals": "Whether the student internalizes the long-run dominance of exponential growth from evidence, not just as a slogan."
 },
 {
  "id": "S3-40",
  "set": 3,
  "n": 40,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express the solution to $ab^{ct} = d$ as a logarithm and evaluate it)",
  "html": "<p>A food business is valued at $V(t) = 25000(1.12)^t$ dollars, $t$ years after it opens. The owner wants to know when the business will be worth $\\$100{,}000$. (a) Write the equation that answers the question and express its solution as a logarithm. (b) Evaluate the logarithm (calculator) to the nearest tenth of a year. (c) Interpret the answer in context, including whether the goal is reached during the 12th or 13th year.</p>",
  "evidence": "The exponential equation set up with the target value, the solution isolated and written in logarithmic form before evaluation, a decimal value to the nearest tenth, and a contextual interpretation placing the milestone within a specific year",
  "reveals": "Whether the student uses a logarithm as the genuine inverse operation for an unknown exponent, and reports a decimal answer as a real planning horizon."
 },
 {
  "id": "S3-41",
  "set": 3,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "The unit circle in trigonometry",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "The unit circle in trigonometry — NC.M3.F-TF.2 (explain how the unit circle extends trigonometric functions to all real numbers; use it to find values and explain sign and periodicity)",
  "html": "<p>A rotating display sign is modeled on a unit circle centered at the sign&#x27;s motor. A point $P$ on the rim corresponds to the angle $\\theta = \\dfrac{5\\pi}{6}$. (a) Find the coordinates of $P$. (b) The sign keeps rotating; after one additional full turn the same point is described by $\\theta = \\dfrac{5\\pi}{6} + 2\\pi$. Explain, using the unit circle, why the coordinates of $P$ are unchanged. (c) Find $\\sin\\left(-\\dfrac{\\pi}{6}\\right)$ and $\\cos\\left(-\\dfrac{\\pi}{6}\\right)$, and name the quadrant of the corresponding point. (d) Explain why $\\sin\\left(\\dfrac{7\\pi}{6}\\right)$ is negative, and give its exact value.</p>",
  "evidence": "Coordinates given as cosine and sine of the angle with exact values, a periodicity explanation based on returning to the same point on the circle, exact values for the negative angle with Quadrant IV named, and a sign argument based on the point's $y$-coordinate in Quadrant III with the exact value stated",
  "reveals": "Whether the student reasons about trigonometric values geometrically — position on the circle — instead of reaching for memorized charts."
 },
 {
  "id": "S3-42",
  "set": 3,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, period, and midline in context)",
  "html": "<p>An ice-cream shop&#x27;s monthly revenue, in thousands of dollars, is modeled by $R(t) = 20 + 8\\cos\\left(\\dfrac{\\pi}{6}(t - 6)\\right)$, where $t$ is the month number ($t = 1$ is January). (a) Identify the midline, amplitude, and period, and interpret each for the shop. (b) In which month is revenue highest, and what is the revenue? In which month is it lowest, and what is it? (c) Find March&#x27;s revenue, $R(3)$, exactly and interpret it relative to the midline.</p>",
  "evidence": "Midline, amplitude, and period read from the model and interpreted as average revenue, seasonal swing, and a 12-month cycle, maximum and minimum located by the cosine's phase with dollar values, and an exact evaluation at $t = 3$ compared with the average",
  "reveals": "Whether the student can decode a shifted cosine model into a seasonal business story — peak season, slow season, and an exactly-average month."
 },
 {
  "id": "S3-43",
  "set": 3,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and central angles",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and central angles — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the inscribed angle theorem)",
  "html": "<p>A round café logo has points $A$, $B$, and $C$ on its circular border, with $B$ on the minor arc side. The measure of arc $AC$ (the arc not containing $B$) is $130^\\circ$. (a) Find the measure of the inscribed angle $\\angle ABC$. (b) A second design places $A$ and $C$ at opposite ends of a diameter. What is the measure of $\\angle ABC$ in that design, and what theorem justifies it? (c) A central angle intercepts the same $130^\\circ$ arc. Find its measure and state how it compares with the inscribed angle in part (a).</p>",
  "evidence": "The inscribed angle computed as half the intercepted arc, a right-angle conclusion for the angle in a semicircle with the theorem named, and the central angle equal to its arc with the factor-of-two relationship stated",
  "reveals": "Whether the student commands the inscribed/central angle relationship in both directions and recognizes the diameter case as a corollary."
 },
 {
  "id": "S3-44",
  "set": 3,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive the radian measure relationship for arc length; find arc lengths and areas of sectors)",
  "html": "<p>A pizzeria cuts a specialty slice from a round pizza of radius 9 inches. The slice is a sector with central angle $80^\\circ$. (a) Convert $80^\\circ$ to radians. (b) Find the length of the crust edge (the arc) of the slice, exactly and to the nearest hundredth of an inch. (c) Find the area of the slice, exactly and to the nearest hundredth of a square inch. (d) Explain how the sector area can be seen as a fraction of the whole pizza&#x27;s area, and verify your part (c) answer using that fraction.</p>",
  "evidence": "A degree-to-radian conversion, an arc length computed with $s = r\\theta$ using the radian measure, a sector area computed exactly in terms of $\\pi$ with a decimal approximation, and a fraction-of-the-circle verification that agrees with the formula result",
  "reveals": "Whether the student understands sector measures as proportional parts of a circle governed by radian measure, rather than as two unrelated formulas."
 },
 {
  "id": "S3-45",
  "set": 3,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Completing the square for a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Completing the square for a circle — NC.M3.G-GPE.1 (complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A delivery company&#x27;s service zone is described by the equation $x^2 + y^2 - 6x + 4y - 12 = 0$, where coordinates are in miles on the company map. (a) Rewrite the equation in standard form by completing the square, and state the center and radius of the zone. (b) A customer at $(3, 3)$ requests delivery. Is the customer on the boundary, inside, or outside the zone? Justify with the equation. (c) Answer the same question for a customer at $(7, 2)$.</p>",
  "evidence": "Grouping of terms and completion of both squares producing standard form, center and radius stated with units, and substitution tests of both points compared against the radius squared with boundary/inside/outside conclusions",
  "reveals": "Whether the student can convert a general-form circle into usable geometric information and apply it to location decisions."
 },
 {
  "id": "S3-46",
  "set": 3,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A parabolic solar cooker at a food stall concentrates sunlight at its focus. Its cross-section is a parabola with focus at $(0, 2)$ and directrix the line $y = -2$ (units in feet, vertex at the origin). (a) Use the definition of a parabola — the set of points equidistant from the focus and the directrix — to derive the equation of the cross-section. (b) How wide is the cooker at a height of 2 feet above the vertex (the height of the focus)? (c) If the cooker is built 8 feet deep, how wide is its opening?</p>",
  "evidence": "A derivation setting the distance to $(0, 2)$ equal to the distance to the line $y = -2$ and simplifying to standard form, widths found by solving for $x$ at the given heights and doubling, with units throughout",
  "reveals": "Whether the student can build the parabola's equation from its defining property and then read physical dimensions off it."
 },
 {
  "id": "S3-47",
  "set": 3,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that base angles of an isosceles triangle are congruent)",
  "html": "<p>A triangular steel bracket for a shop sign has two equal sides: in $\\triangle ABC$, side $AB$ equals side $AC$, with $A$ at the top and $BC$ as the base. Let $D$ be the midpoint of $BC$. (a) Write a two-column proof that $\\angle B$ and $\\angle C$ (the base angles) are congruent, using $D$ and the two triangles $ABD$ and $ACD$. (b) If the vertex angle at $A$ measures $40^\\circ$, use your result to find the measures of the base angles.</p>",
  "evidence": "A structured proof: givens and midpoint facts stated, three pairs of congruent sides established (given, midpoint definition, reflexive), triangle congruence by SSS, and base angles congruent by CPCTC, followed by an angle-sum computation using the proven equality",
  "reveals": "Whether the student can construct a warranted proof chain for a new theorem — choosing the auxiliary segment and congruence criterion — rather than reciting a memorized one."
 },
 {
  "id": "S3-48",
  "set": 3,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that a quadrilateral with both pairs of opposite sides congruent is a parallelogram)",
  "html": "<p>A folding display frame forms quadrilateral $WXYZ$ with both pairs of opposite sides congruent: $WX = ZY$ and $XY = WZ$. The diagonal $WY$ is drawn across the frame. Write a two-column proof that $WXYZ$ is a parallelogram. Your proof should first establish that $\\triangle WXY$ and $\\triangle YZW$ are congruent, and then use angle relationships to show that both pairs of opposite sides are parallel.</p>",
  "evidence": "A structured proof: SSS congruence of the two triangles formed by the diagonal, two pairs of alternate interior angles shown congruent by CPCTC, both pairs of opposite sides declared parallel by the converse of the alternate interior angles theorem, and the parallelogram conclusion drawn by definition",
  "reveals": "Whether the student can drive a proof through a diagonal — converting side information into angle information into parallelism — the standard engine for quadrilateral proofs."
 },
 {
  "id": "S3-49",
  "set": 3,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Circumscribed circles of triangles",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Circumscribed circles of triangles — NC.M3.G-C.3 (construct the circumscribed circle of a triangle; the circumcenter is equidistant from the vertices)",
  "html": "<p>Three food kiosks at a fairground stand at $A(0, 0)$, $B(8, 0)$, and $C(2, 6)$ on a coordinate map (units in tens of feet). The fair will place a Wi-Fi hotspot on a circular plaza so that it is the same distance from all three kiosks. (a) Explain why the hotspot&#x27;s location must lie on the perpendicular bisector of each side of $\\triangle ABC$, and name the point being constructed. (b) Find the hotspot&#x27;s coordinates by intersecting two perpendicular bisectors. (c) Find the distance from the hotspot to each kiosk, and state the minimum range the hotspot needs to reach all three.</p>",
  "evidence": "A justification that points on a perpendicular bisector are equidistant from the segment's endpoints, identifying the circumcenter as the common point, equations of two perpendicular bisectors solved simultaneously for the center, and a distance computation giving the common radius as the required range",
  "reveals": "Whether the student connects the circumcenter construction to its equidistance property and can locate it with coordinates."
 },
 {
  "id": "S3-50",
  "set": 3,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle; apply $s = r\\theta$)",
  "html": "<p>A rotating display sign at a jewelry counter is a disk of radius 3 feet. A sticker on the rim starts at the rightmost point of the disk and the sign rotates the sticker through $150^\\circ$. (a) Convert $150^\\circ$ to radians. (b) Find the exact distance the sticker travels along its circular path, and give a decimal approximation in feet. (c) Explain why, on a unit circle, the same rotation would produce an arc length numerically equal to the angle in radians.</p>",
  "evidence": "A conversion using the $\\pi$ radians $= 180^\\circ$ relationship, an arc length computed with $s = r\\theta$ in exact and approximate form, and an explanation that radius 1 makes arc length and radian measure the same number by definition",
  "reveals": "Whether the student can carry radian measure off the unit circle to a real radius, understanding $s = r\\theta$ as the definition scaled."
 },
 {
  "id": "S3-51",
  "set": 3,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>An ice-cream shop serves cones with radius 3 cm and height 12 cm. (a) Find the volume of ice cream in one completely filled cone, exactly and to the nearest tenth of a cubic centimeter. (b) The shop opens a 2-liter tub of ice cream (1 liter $= 1000$ cm³). How many completely filled cones can be served from the tub? Justify your rounding.</p>",
  "evidence": "A cone volume computation with cubic units in exact ($\\pi$) and approximate form, a division of the tub's volume by the cone's volume, and a rounding-down justification because a partial cone cannot be served as a full one",
  "reveals": "Whether the student applies the cone formula accurately and interprets a quotient as a count of physical servings with sensible rounding."
 },
 {
  "id": "S3-52",
  "set": 3,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A car wash stores water in a spherical tank of radius 3 feet. (a) Find the volume of the tank, exactly and to the nearest tenth of a cubic foot. (b) Using $1\\ \\text{ft}^3 \\approx 7.48$ gallons, find how many gallons the full tank holds, to the nearest gallon. (c) The tank is currently half full by volume. How many gallons are in it?</p>",
  "evidence": "A sphere volume computation with the radius cubed correctly, a unit conversion using the given rate, and a halving of the full volume for the partial amount, with units carried throughout",
  "reveals": "Whether the student handles the sphere formula and chained unit reasoning — cubic feet to gallons to a partial fill — without losing track of what each number measures."
 },
 {
  "id": "S3-53",
  "set": 3,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects)",
  "html": "<p>A delicatessen slices products for display. (a) A cylindrical cheese wheel is sliced by a plane parallel to its base, then by a plane through its axis perpendicular to the base. Name the shape of each cross section. (b) A cone-shaped salami is sliced by a plane parallel to its base, and then by a vertical plane through its apex. Name each cross section. (c) A spherical orange at the juice bar is sliced by a plane that does not pass through its center. Name the cross section and compare its size with the largest possible cross section of the orange.</p>",
  "evidence": "Correct shape names for all five slices (circle and rectangle; circle and triangle; circle), and a comparison stating the off-center slice is a smaller circle than the great circle through the center",
  "reveals": "Whether the student can visualize how a cutting plane meets a solid — the spatial reasoning behind cross sections — across three different solids."
 },
 {
  "id": "S3-54",
  "set": 3,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe objects; model a composite object)",
  "html": "<p>A bakery supplier stores flour in a silo shaped like a cylinder of radius 4 feet and height 12 feet, topped by a hemisphere of the same radius. (a) Identify the two solids that model the silo and explain the modeling choice in one sentence. (b) Find the total volume of flour the silo can hold, exactly and to the nearest cubic foot. (c) The supplier paints the outside of the silo, not counting the flat bottom. Find the area to be painted (the cylinder&#x27;s side plus the hemisphere&#x27;s curved surface), exactly and to the nearest square foot.</p>",
  "evidence": "The silo decomposed into a cylinder and a hemisphere with matching radii, a volume computed as the sum of the two solids' volumes, and a surface computation using lateral area for the cylinder and half the sphere's surface area, excluding the base",
  "reveals": "Whether the student can decompose a real object into standard solids and keep volume and surface-area questions distinct."
 },
 {
  "id": "S3-55",
  "set": 3,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A café&#x27;s dining room measures 12 meters by 9 meters. The fire code allows a maximum density of 1 person per 1.5 square meters of floor space. (a) On a busy Saturday, 90 people are in the dining room. Find the current density in people per square meter. (b) Find the maximum number of people allowed in the room. (c) How many people must leave before the café complies with the code?</p>",
  "evidence": "The room's area computed first, a density formed as people divided by area with units, the code limit converted into a maximum headcount by dividing area by the per-person allowance, and the difference reported as the number who must leave",
  "reveals": "Whether the student treats density as a rate that can be applied in either direction — checking a crowd and computing a capacity."
 },
 {
  "id": "S3-56",
  "set": 3,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Applying geometry to design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Applying geometry to design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including optimizing area under a constraint)",
  "html": "<p>A café is building a rectangular patio against the back wall of its building. The wall forms the entire long side of the patio, so fencing is needed only on the other three sides. The café has 60 feet of fencing. Let $w$ be the length, in feet, of each fenced side perpendicular to the wall. (a) Write the patio&#x27;s area $A$ as a function of $w$, and state the possible values of $w$. (b) Find the dimensions that maximize the patio&#x27;s area, and the maximum area. Justify your answer (for example, with a table of values or the vertex of a parabola). (c) The café needs at least 400 square feet of patio. Is $w = 10$ feet a viable design? Justify.</p>",
  "evidence": "The parallel side expressed as $60 - 2w$ and the area written as a quadratic in $w$ with a sensible domain, an optimization justified by values or the vertex giving the best dimensions and area, and a viability check evaluating the proposed design against the requirement",
  "reveals": "Whether the student can set up and optimize a constrained design — the full modeling cycle of variables, constraint, objective, and check."
 },
 {
  "id": "S3-57",
  "set": 3,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Purposes of study types and randomization",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Purposes of study types and randomization — NC.M3.S-IC.3 (recognize the purposes and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A coffee chain wants to know whether a new store layout causes customers to spend more. The regional manager proposes comparing one renovated store with one unrenovated store over the same month and comparing average spending. (a) Explain why the manager&#x27;s plan is an observational study rather than an experiment, and name a confounding variable it cannot rule out. (b) Design an experiment the chain could run instead, and explain the role of random assignment in your design. (c) State the difference between random selection and random assignment, and say which one the chain needs in order to claim the layout <em>causes</em> higher spending.</p>",
  "evidence": "The proposal classified as observational because nothing is assigned, a plausible confounder tied to the stores' differences, an experimental design using random assignment of the layout, and a crisp distinction — selection is about who is studied and generalizing, assignment is about how treatments are given and causal conclusions",
  "reveals": "Whether the student understands what kind of evidence each study type can produce, and that causation is bought with random assignment, not with bigger samples."
 },
 {
  "id": "S3-58",
  "set": 3,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population proportion with margin of error via simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population proportion with margin of error via simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A bakery chain wants to estimate the proportion of all its customers who prefer its new muffin recipe. A random sample of 200 customers finds that 84 prefer the new recipe. To build a margin of error, the chain runs a simulation: 300 random samples of size 200 are drawn from a model population, and the resulting sample proportions have a standard deviation of 0.035. (a) Find the sample proportion $\\hat{p}$. (b) Using a margin of error of about two standard deviations of the simulated proportions, give the interval of plausible values for the true proportion. (c) A manager claims, &quot;A majority of our customers prefer the new recipe.&quot; Based on your interval, is that claim plausible? Explain. (d) State one change to the sampling plan that would produce a smaller margin of error.</p>",
  "evidence": "The sample proportion computed from the counts, a margin of error built from the simulation's standard deviation, an interval centered at $\\hat{p}$, a majority judgment based on where the whole interval sits relative to 50%, and a larger sample size named as the way to shrink the margin of error",
  "reveals": "Whether the student can run the full inference routine for a proportion — estimate, margin of error, interval, claim check — and knows what controls precision."
 },
 {
  "id": "S3-59",
  "set": 3,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Using simulation to test an experimental difference",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Using simulation to test an experimental difference — NC.M3.S-IC.5 (decide if a specified model is consistent with results from a given data-generating process, e.g., using simulation)",
  "html": "<p>A gift shop randomly assigned 80 customers to see one of two checkout displays. The 40 customers who saw the new display spent a mean of $\\$23.40$; the 40 who saw the old display spent a mean of $\\$21.10$, an observed difference of $\\$2.30$ in favor of the new display. To test whether the difference could be due to chance alone, the owner simulated random assignment: she pooled the 80 spending amounts, randomly reassigned them to two groups of 40, and computed the difference in means, repeating this 200 times. Only 4 of the 200 simulations produced a difference of $\\$2.30$ or more. (a) What proportion of the simulations produced a difference at least as large as the observed one? (b) Using a 5% significance standard, is the observed difference statistically significant? (c) Explain what the simulation represents, and state the owner&#x27;s justified conclusion about the new display.</p>",
  "evidence": "The proportion computed as 4 out of 200 and expressed as a percent, a comparison against the 5% standard with a significance conclusion, an explanation that the simulation shows differences arising from random assignment alone if the display had no effect, and a causal conclusion credited to the randomized design",
  "reveals": "Whether the student understands significance as \"too unusual to be chance\" measured against a simulated chance distribution — the logic of inference for experiments."
 },
 {
  "id": "S3-60",
  "set": 3,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data; recognize confounding and unjustified causal claims)",
  "html": "<p>A local news site runs the headline &quot;Energy Drink Doubles Café Sales!&quot; The article reports that a café began selling a new energy drink in June, and its total June sales were double its total sales from the previous June. The article also mentions that in the same month the café extended its evening hours, hosted a street-festival weekend, and offered a buy-one-get-one promotion on all drinks. The café owner concludes the energy drink caused the increase and plans to order a large stock. (a) Identify the study type behind the article&#x27;s claim. (b) Give two confounding variables from the article and explain how each could account for some or all of the sales increase. (c) Explain why the owner&#x27;s causal conclusion is not justified, and describe one piece of additional evidence or one design change that would better test the drink&#x27;s effect.</p>",
  "evidence": "The report classified as observational (no comparison group or assignment), two confounders drawn from the article's own details each tied to a mechanism for higher sales, a statement that association in a single before/after comparison cannot establish causation, and a concrete improvement such as a comparison café or a controlled trial period",
  "reveals": "Whether the student reads media claims the way a statistician does — hunting for confounders and demanding a design that can support the headline."
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
  "id": "S4-21",
  "set": 4,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Solving quadratic equations with complex solutions",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Solving quadratic equations with complex solutions — NC.M3.N-CN.9 (solve quadratic equations with real coefficients that have complex solutions; know the Fundamental Theorem of Algebra)",
  "html": "<p>A pharmacology model for the concentration of a compounded medication produces the equation $x^2 - 4x + 29 = 0$, where $x$ is a scaled dose variable. (a) Solve the equation, giving all solutions in $a + bi$ form. (b) Verify each solution by substitution or by using the sum and product of the roots. (c) Explain what the absence of real solutions tells you about the graph of $y = x^2 - 4x + 29$.</p>",
  "evidence": "A quadratic-formula computation with a negative discriminant handled via $i$, both solutions in $a + bi$ form, a verification (substitution or sum/product of roots), and a graphical interpretation of \"no real solutions\"",
  "reveals": "Whether the student treats a negative discriminant as a doorway to complex roots rather than a dead end, and connects those roots to the graph's behavior."
 },
 {
  "id": "S4-22",
  "set": 4,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Interpreting parts of an expression in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting parts of an expression in context — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression, such as terms, factors, and coefficients)",
  "html": "<p>A county health department models the total cost, in dollars, of running a one-day vaccination drive that administers $x$ doses as $C(x) = 850 + 14x + 0.05x^2$. (a) Interpret the meaning of each of the three terms — $850$, $14x$, and $0.05x^2$ — in the context of the drive. (b) Explain why the $0.05x^2$ term might grow faster than the organizers expect as the drive gets very large, and give a plausible real-world reason a quadratic term belongs in the model. (c) State the units of each term.</p>",
  "evidence": "A contextual meaning assigned to the constant, linear, and quadratic terms separately, a discussion of the quadratic term's growth with a plausible cause (e.g., overtime, crowd management), and correct units for each term",
  "reveals": "Whether the student reads an algebraic expression as a story about a real operation — fixed costs, per-person costs, and strain-at-scale costs — instead of as three unrelated symbols."
 },
 {
  "id": "S4-23",
  "set": 4,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "The Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "The Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: for a polynomial $p(x)$ and a number $a$, the remainder on division by $x - a$ is $p(a)$)",
  "html": "<p>A rehabilitation clinic models the cumulative number of therapy sessions it will have delivered $x$ months after opening a new wing as $P(x) = 2x^3 - 5x^2 + 3x + 40$. The clinic&#x27;s board wants to know the projected cumulative total at month 4, and a staff member suggests &quot;just plug in 4 — or use the Remainder Theorem.&quot; (a) Use synthetic division by $(x - 4)$ to find $P(4)$, showing the full synthetic array. (b) State the quotient polynomial and the remainder from your division. (c) Explain why the remainder from division by $(x - 4)$ must equal $P(4)$, and interpret the answer in context.</p>",
  "evidence": "A correct synthetic-division array, the quotient and remainder identified separately, an explanation of why the remainder equals the function value, and a contextual interpretation with units",
  "reveals": "Whether the student sees synthetic division and function evaluation as the same computation viewed two ways, which is the conceptual content of the Remainder Theorem."
 },
 {
  "id": "S4-24",
  "set": 4,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (understand that rational expressions form a system analogous to the rational numbers; add, subtract, multiply, and divide rational expressions)",
  "html": "<p>Two infusion pumps deliver medication into the same IV line. A dosing model combines two concentration adjustments as $\\dfrac{x}{x - 3} + \\dfrac{2}{x + 1}$, where $x$ is a flow-rate setting. (a) Combine the expression into a single rational expression in lowest terms. (b) State all values of $x$ that must be excluded from the domain, and explain where each exclusion comes from. (c) Explain why the combined expression cannot be simplified further by canceling.</p>",
  "evidence": "A common-denominator computation producing one simplified rational expression, both excluded values identified from the original denominators, and an explanation that only common *factors* — not terms — can be canceled",
  "reveals": "Whether the student's rational-expression arithmetic is structural (common denominators, factors vs. terms, inherited restrictions) rather than a collection of canceling habits."
 },
 {
  "id": "S4-25",
  "set": 4,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations and identifying extraneous solutions",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations and identifying extraneous solutions — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable, and give examples showing how extraneous solutions may arise)",
  "html": "<p>A sleep clinic uses the model $\\sqrt{x + 7} = x - 5$ to solve for a scaled medication-timing variable $x$. (a) Solve the equation algebraically, showing each step. (b) Check every candidate solution in the original equation, and identify any extraneous solution. (c) Explain, using the graphs or the squaring step, exactly where the extraneous solution came from.</p>",
  "evidence": "An isolation-and-squaring solution process producing two candidates, a substitution check of both candidates in the original equation, rejection of the extraneous one with justification, and an explanation tying the extraneous root to the squaring step (or to the sign requirement on the right side)",
  "reveals": "Whether the student understands that squaring is not a reversible step and that \"solutions\" of a radical equation are only candidates until checked."
 },
 {
  "id": "S4-26",
  "set": 4,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas for a quantity of interest",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas for a quantity of interest — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A clinic computes body mass index using the formula $B = \\dfrac{703W}{H^2}$, where $B$ is BMI, $W$ is weight in pounds, and $H$ is height in inches. A patient who is 68 inches tall wants to know what weight corresponds to a BMI of 24, but the clinic&#x27;s software only accepts the formula solved for $W$. (a) Rearrange the formula to solve for $W$, showing your steps. (b) Use your rearranged formula to find the weight, to the nearest tenth of a pound, that gives this patient a BMI of 24. (c) Explain why rearranging first is more efficient than substituting and solving if the clinic must do this computation for many patients.</p>",
  "evidence": "A step-by-step rearrangement isolating $W$ (with $H^2$ and 703 handled correctly), a substitution and evaluation with units, and a reasoned comment on the efficiency of literal rearrangement",
  "reveals": "Whether the student can manipulate a formula symbolically — including a squared variable in a denominator — before numbers enter, the skill that separates formula use from formula understanding."
 },
 {
  "id": "S4-27",
  "set": 4,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Dividing complex numbers using conjugates",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Dividing complex numbers using conjugates — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$ to simplify; find quotients of complex numbers using conjugates)",
  "html": "<p>The electrical impedance of a component in a portable heart monitor is modeled using complex numbers. One stage of the circuit analysis requires computing the quotient $\\dfrac{5 + 3i}{2 - i}$. (a) Compute the quotient in $a + bi$ form, showing how the conjugate is used. (b) Verify your answer by multiplying it by the original divisor. (c) Explain why multiplying numerator and denominator by the conjugate of the denominator produces a real denominator.</p>",
  "evidence": "A conjugate multiplication in numerator and denominator, simplification using $i^2 = -1$ to an $a + bi$ result, a verification product recovering the original numerator, and an explanation referencing $(a + bi)(a - bi) = a^2 + b^2$",
  "reveals": "Whether the student understands the conjugate as a tool with a purpose — making denominators real — rather than a memorized ritual."
 },
 {
  "id": "S4-28",
  "set": 4,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Using zeros and multiplicities to construct a polynomial",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Using zeros and multiplicities to construct a polynomial — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available and use the zeros to construct a rough graph of the function defined by the polynomial)",
  "html": "<p>A hospital tracks a &quot;recovery index&quot; $R$ over the weeks after a new discharge protocol begins. A graph of $R$ against week $x$ (described here in words) rises from its starting value, crosses the horizontal axis at $x = -3$ on the extended model, touches the axis and turns around at $x = 2$, and falls as $x$ grows large on the left while rising on the right. A modeler proposes a cubic polynomial for the underlying trend function $P$. (a) Using the axis behaviors described, write a possible factored form for $P(x)$ with leading coefficient 1, and state the multiplicity of each zero. (b) Find the $y$-intercept of your $P$. (c) Explain how the touching behavior at $x = 2$ forced the multiplicity you chose, and what the graph would do instead if that zero had multiplicity 1 or 3.</p>",
  "evidence": "A factored cubic consistent with a crossing at one zero and a touch at the other, multiplicities stated and matched to the described behaviors, a computed $y$-intercept, and a comparison of touch/cross behavior across multiplicities 1, 2, and 3",
  "reveals": "Whether the student can run the zeros-to-graph relationship in reverse — reading graph behavior as multiplicity information and building the polynomial from it."
 },
 {
  "id": "S4-29",
  "set": 4,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Solving $f(x) = g(x)$ approximately using tables and graphs",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Solving $f(x) = g(x)$ approximately using tables and graphs — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find the solutions approximately, e.g., using technology or tables)",
  "html": "<p>A health system compares two ways patients book appointments. Telehealth bookings, in hundreds per month, are modeled by $A(t) = 50(2)^t$, and phone bookings, in hundreds per month, by $B(t) = 90t + 80$, where $t$ is months from now. (a) Build a table of both functions for $t = 0, 1, 2, 3, 4$. (b) Between which two consecutive months do the graphs of $A$ and $B$ intersect? Justify from your table. (c) Using technology or finer table values, approximate the intersection&#x27;s $t$-value to the nearest tenth, and interpret both coordinates of the intersection point in context.</p>",
  "evidence": "A two-function table over the given range, a sign-change/bracketing argument locating the intersection between consecutive months, a refined approximation to the nearest tenth, and a two-coordinate contextual interpretation",
  "reveals": "Whether the student can solve an equation that algebra alone cannot finish — an exponential equal to a line — by bracketing and refining, and can say what the crossing means."
 },
 {
  "id": "S4-30",
  "set": 4,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Factoring polynomials with complex zeros",
  "standards": [
   "NC.M3.N-CN.8",
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Factoring polynomials with complex zeros — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers) with NC.M3.N-CN.9 (complex solutions of quadratics)",
  "html": "<p>A signal-processing model in an ultrasound machine involves the polynomial $x^2 + 20x + 164$. (a) Use the quadratic formula to find its zeros, expressing them in $a + bi$ form. (b) Write $x^2 + 20x + 164$ as a product of two linear factors using those zeros. (c) Verify your factorization by expanding, and state the sum and product of the two zeros, relating them to the coefficients of the original polynomial.</p>",
  "evidence": "A quadratic-formula computation producing a conjugate pair of zeros, a factorization built from the zeros, an expansion check recovering the original polynomial, and sum/product values matched to the coefficients",
  "reveals": "Whether the student can factor a quadratic whose zeros are non-real and non-purely-imaginary — the general case, where the linear term does not vanish."
 },
 {
  "id": "S4-31",
  "set": 4,
  "n": 31,
  "strand": "Functions",
  "topic": "Domain and range of a function in context",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Domain and range of a function in context — NC.M3.F-IF.1 (understand that a function assigns to each input exactly one output; use function notation and interpret graphs as sets of ordered pairs)",
  "html": "<p>During a cardiac stress test, a patient&#x27;s heart rate is recorded on a graph (described here in words): the graph begins at the point $(0, 72)$, rises steadily to $(6, 150)$, stays level until $(8, 150)$, then falls steadily to $(12, 96)$, where the test ends. Time is in minutes and heart rate in beats per minute. (a) State the domain and range of the heart-rate function, with units. (b) Is heart rate a function of time here? Justify your answer using the description. (c) Describe, in words, what is happening physiologically during each of the three segments of the graph.</p>",
  "evidence": "A domain and range stated as intervals with units, a function determination justified by the \"exactly one output per input\" definition, and a physiological reading of the rising, level, and falling segments",
  "reveals": "Whether domain and range are, for the student, descriptions of a real process with units — not just the $x$'s and $y$'s of an abstract graph."
 },
 {
  "id": "S4-32",
  "set": 4,
  "n": 32,
  "strand": "Functions",
  "topic": "Key features of a function from a table",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of a function from a table — NC.M3.F-IF.4 (interpret key features of graphs and tables in terms of the quantities, including intercepts, intervals of increase/decrease, and extrema)",
  "html": "<p>A nurse records a post-surgical patient&#x27;s pain level (0–10 scale) every hour after a dose of pain medication:</p>\n<table>\n<tr><th>Hours since dose</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>\n<tr><td>Pain level</td><td>8</td><td>7</td><td>5</td><td>3</td><td>3</td><td>4</td><td>6</td></tr>\n</table>\n<p>(a) On which intervals is the pain level decreasing, constant, and increasing? (b) What is the minimum pain level in the table, and over what time interval does it occur? (c) Compute the average rate of change of pain level over the full 6 hours, with units, and explain in one sentence why that single number does not tell the whole story of the medication&#x27;s effect.</p>",
  "evidence": "Correct increasing/decreasing/constant intervals read from the table, the minimum value with its time interval, an average-rate computation with units, and a critique noting the rate hides the decrease-then-increase pattern",
  "reveals": "Whether the student can interrogate a table for a function's behavior — shape first, single summary number second — and recognizes what an average rate conceals."
 },
 {
  "id": "S4-33",
  "set": 4,
  "n": 33,
  "strand": "Functions",
  "topic": "Domain constraints from context",
  "standards": [
   "NC.M3.F-IF.5",
   "NC.M3.A-CED.3"
  ],
  "standardsDetail": "Domain constraints from context — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes) and NC.M3.A-CED.3 (represent constraints by equations or inequalities)",
  "html": "<p>A school-based health clinic plans a flu-shot day. Let $x$ be the number of students vaccinated during the day. The clinic&#x27;s constraints are: at most 240 doses are in stock; the nursing staff can vaccinate at most 30 students per hour and the clinic is open for vaccinations for 5 hours; and the clinic will only run the event if at least 60 students are vaccinated. (a) Write each constraint as an inequality in $x$. (b) Combine the constraints to state the domain of $x$ that makes sense for this event, remembering what kind of quantity $x$ counts. (c) A neighboring school proposes vaccinating 200 students under the same staffing. Use your inequalities to explain whether that is feasible, and which constraint it violates.</p>",
  "evidence": "Three inequalities (supply, staffing-rate-times-hours, minimum turnout), a combined domain stated with whole-number values, and a feasibility judgment for 200 students tied to the specific violated constraint",
  "reveals": "Whether the student builds domains from the situation's actual limits — including the discreteness of counting people — rather than defaulting to \"all real numbers.\""
 },
 {
  "id": "S4-34",
  "set": 4,
  "n": 34,
  "strand": "Functions",
  "topic": "Piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Piecewise-defined functions — NC.M3.F-IF.7b (graph square root, cube root, and piecewise-defined functions, including step functions and absolute value functions)",
  "html": "<p>A physical therapy clinic bills an exercise session by the function $f(t) = \\begin{cases} 40, &amp; 0 &lt; t \\le 30 \\\\ 40 + 1.2(t - 30), &amp; 30 &lt; t \\le 90 \\end{cases}$, where $t$ is the session length in minutes and $f(t)$ is the charge in dollars. (a) Graph $f$ over its domain, showing what happens at $t = 30$ on both pieces. (b) Find the charge for a 75-minute session, showing which piece you used and why. (c) A patient&#x27;s bill is $\\$58$. Find the session length, and explain how you know which piece of the function to use.</p>",
  "evidence": "A graph with a horizontal segment joined continuously to a rising segment at $t = 30$, an evaluation using the correct piece with justification, and an inverse use of the function (bill to length) with the piece chosen by comparing the bill to the flat-rate value",
  "reveals": "Whether the student treats a piecewise function as one function with a rule book — choosing the right piece deliberately in both directions — rather than as two unrelated formulas."
 },
 {
  "id": "S4-35",
  "set": 4,
  "n": 35,
  "strand": "Functions",
  "topic": "Graphing logarithmic functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing logarithmic functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts and end behavior)",
  "html": "<p>An audiologist explains that each doubling of sound intensity adds the same step on a hearing scale, modeled by $D(x) = \\log_2 x$, where $x$ is the intensity of a sound relative to a reference sound and $D(x)$ is the number of doublings. (a) Graph $D$ for $0 &lt; x \\le 32$, showing the vertical asymptote, the $x$-intercept, and at least four exact points. (b) State the domain and range of $D$ as modeled on this interval, and describe its end behavior at the left edge. (c) A sound has 32 times the reference intensity. How many doublings is that, and which feature of your graph gives the answer?</p>",
  "evidence": "A logarithmic graph with asymptote, intercept, and exact points at powers of 2, domain and range stated for the modeled interval, a left-edge end-behavior description, and an evaluation tied to a point on the graph",
  "reveals": "Whether the student can produce a logarithm's graph from its inverse relationship with doubling — slow growth, asymptote at zero — rather than sketching a generic curve."
 },
 {
  "id": "S4-36",
  "set": 4,
  "n": 36,
  "strand": "Functions",
  "topic": "Comparing functions in different representations",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing functions in different representations — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way — algebraically, graphically, numerically in tables, or by verbal descriptions)",
  "html": "<p>Two clinics report their average patient wait time, in minutes, $t$ hours after opening. Clinic A&#x27;s wait is modeled by $W_A(t) = 12 + 2t$. Clinic B does not publish a formula, but reports: at $t = 0$, 20 minutes; $t = 1$, 21; $t = 2$, 22; $t = 3$, 23; $t = 4$, 24. (a) Which clinic has the shorter wait at opening, and by how much? (b) Which clinic&#x27;s wait is growing faster, and how can you tell from each representation? (c) At $t = 3$, which clinic has the shorter wait, and by how much? (d) If both trends continued unchanged, the waits would eventually be equal. Find when, and explain why this does or does not contradict the pattern in Clinic B&#x27;s table.</p>",
  "evidence": "Initial values compared across equation and table, growth rates compared across representations, a same-time comparison with a difference, and an equality time found by extending both patterns with a comment on extrapolation beyond the table",
  "reveals": "Whether the student can extract the same two facts — starting value and rate — from an equation and from a table and hold them side by side fairly."
 },
 {
  "id": "S4-37",
  "set": 4,
  "n": 37,
  "strand": "Functions",
  "topic": "Building functions from recursive processes",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building functions from recursive processes — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities; determine an explicit expression, a recursive process, or steps for calculation from a context)",
  "html": "<p>A patient begins a medication with a first dose of 200 mg. Each day, the body eliminates half of whatever medication is in the patient&#x27;s system, and then the patient takes another 200 mg dose. Let $A_n$ be the amount of medication in the system, in milligrams, immediately after the $n$-th dose, with $A_1 = 200$. (a) Write a recursive formula for $A_n$. (b) Compute $A_2$, $A_3$, and $A_4$. (c) The amounts approach a limiting &quot;steady state&quot; value. Guess that value from the pattern of your computations, and justify your guess by describing what must be true about the amount eliminated each day at steady state.</p>",
  "evidence": "A recursive formula combining halving and a new dose in the correct order, three computed amounts showing growth that slows, and a steady-state value justified by the balance \"amount eliminated each day equals amount added\"",
  "reveals": "Whether the student can translate a repeated real process — eliminate, then dose — into recursion, and can reason about long-run behavior without a closed-form formula."
 },
 {
  "id": "S4-38",
  "set": 4,
  "n": 38,
  "strand": "Functions",
  "topic": "Combining function types to build a model",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining function types to build a model — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to build functions that model real-world phenomena)",
  "html": "<p>A wellness center sells guided meditation packages. Experience shows that if the price is set too high, fewer packages sell; the center models the price per package when $x$ packages are sold per week as $p(x) = 120 - 2x$ dollars. (a) Build a function $R(x)$ for the weekly revenue. (b) State the domain of $R$ that makes sense in context, and explain both endpoints. (c) Find the number of packages and the price that maximize weekly revenue, and the maximum revenue. Show a method (vertex, symmetry, or completing the square) rather than guessing.</p>",
  "evidence": "A revenue function built as quantity times a linear price function (a quadratic), a context domain with both endpoints explained (nonnegative sales; price must stay positive), and a vertex-based optimization reporting packages, price, and revenue with units",
  "reveals": "Whether the student can *manufacture* a quadratic by combining simpler functions — the modeling move behind most optimization problems — and keep its domain honest."
 },
 {
  "id": "S4-39",
  "set": 4,
  "n": 39,
  "strand": "Functions",
  "topic": "Verifying inverse functions by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverse functions by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>North Carolina clinics record temperatures in both scales. The conversion functions are $F(C) = \\dfrac{9}{5}C + 32$ and $G(F) = \\dfrac{5}{9}(F - 32)$. A nurse claims $G$ is the inverse of $F$. (a) Verify the claim by computing $F(G(F))$ symbolically and simplifying to a single variable. (b) Verify it the other way by computing $G(F(C))$. (c) A patient&#x27;s temperature is $104^\\circ$F. Use the appropriate function to convert it to Celsius, and then convert your answer back as a numerical check.</p>",
  "evidence": "Two symbolic compositions, each simplifying to the input variable, a conclusion that the functions are inverses, and a numerical round-trip conversion that returns the starting temperature",
  "reveals": "Whether the student knows that \"inverse\" is a claim that must be *proved* by composition in both directions — and that a numeric round trip is a check, not a proof."
 },
 {
  "id": "S4-40",
  "set": 4,
  "n": 40,
  "strand": "Functions",
  "topic": "Reading inverse values from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or table, given that the function has an inverse)",
  "html": "<p>A lab measures the blood concentration of a vitamin supplement, in nanograms per milliliter, at several doses:</p>\n<table>\n<tr><th>Dose (mg)</th><th>50</th><th>100</th><th>150</th><th>200</th><th>250</th></tr>\n<tr><td>Concentration (ng/mL)</td><td>12</td><td>21</td><td>29</td><td>36</td><td>42</td></tr>\n</table>\n<p>Let $C(d)$ be the concentration at dose $d$. (a) Find $C(150)$ and interpret it. (b) A researcher needs a concentration of exactly 36 ng/mL. Using inverse-function thinking, state the dose required, and write your answer using inverse notation. (c) Explain why this table can define an inverse relationship at all — what property of the concentration values makes $C^{-1}$ meaningful here?</p>",
  "evidence": "A table lookup with a contextual interpretation, an inverse value read by reversing the table and written in $C^{-1}$ notation, and a justification based on each concentration appearing exactly once (the function being one-to-one on the data)",
  "reveals": "Whether the student can run a function backward through a table and understands the one-to-one condition that makes running backward legitimate."
 },
 {
  "id": "S4-41",
  "set": 4,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure as arc length on the unit circle",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure as arc length on the unit circle — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle)",
  "html": "<p>A rotating gantry on a radiation-therapy machine is positioned by angles measured in radians. (a) An angle of $\\dfrac{5\\pi}{6}$ radians is programmed for one treatment. Convert this angle to degrees, and find the length of the arc traced on the unit circle by this angle. (b) A second treatment uses an angle of $200^\\circ$. Convert it to radians in exact form. (c) Explain, in one or two sentences, what makes a radian the &quot;natural&quot; unit here: what does the radian measure of an angle directly tell you on the unit circle?</p>",
  "evidence": "A degree conversion, an arc length equal to the radian measure on the unit circle with the reasoning stated, an exact degree-to-radian conversion, and an explanation identifying radian measure with intercepted arc length",
  "reveals": "Whether the student understands a radian as a length — the definition itself — rather than as a conversion factor to memorize."
 },
 {
  "id": "S4-42",
  "set": 4,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving parallelogram properties",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving parallelogram properties — NC.M3.G-CO.11 (prove theorems about parallelograms: opposite sides are congruent, opposite angles are congruent, the diagonals bisect each other, and conversely)",
  "html": "<p>An ambulance stretcher is raised by a scissor lift whose frame forms a parallelogram $ABCD$, with $A$ at the lower left, $B$ at the lower right, $C$ at the upper right, and $D$ at the upper left. The two diagonals of the parallelogram, $AC$ and $BD$, cross at point $E$, which is the lift&#x27;s central pivot. <strong>Prove that the diagonals bisect each other</strong> — that is, prove $AE = EC$ and $BE = ED$ — so the pivot stays centered as the lift moves. Describe the figure in your givens, and give a structured proof with a reason for each statement.</p>",
  "evidence": "A structured proof using parallel sides to produce alternate interior angles, the opposite-sides property of a parallelogram, an ASA triangle congruence, and CPCTC to conclude both bisection statements",
  "reveals": "Whether the student can assemble a genuine proof chain — parallels to angles to congruent triangles to segment conclusions — rather than asserting the theorem being proved."
 },
 {
  "id": "S4-43",
  "set": 4,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed quadrilaterals and supplementary opposite angles",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed quadrilaterals and supplementary opposite angles — NC.M3.G-C.3 (construct and apply properties of inscribed figures; opposite angles of a cyclic quadrilateral are supplementary)",
  "html": "<p>Four benches are placed on the edge of a circular courtyard at a wellness center, forming an inscribed quadrilateral $PQRS$ in that order around the circle. The measure of $\\angle P$ is $(3x + 10)^\\circ$ and the measure of its opposite angle, $\\angle R$, is $(5x - 30)^\\circ$. (a) Find the value of $x$. (b) Find the measures of $\\angle P$ and $\\angle R$. (c) State the theorem you used, and explain in one sentence <em>why</em> opposite angles of an inscribed quadrilateral behave this way, referring to the arcs the angles intercept.</p>",
  "evidence": "An equation setting the sum of the opposite angles to $180^\\circ$, a solved $x$, both angle measures, and a justification referencing the two intercepted arcs together making the full circle",
  "reveals": "Whether the student knows the cyclic-quadrilateral theorem as a consequence of the inscribed-angle theorem and the full $360^\\circ$ of arcs, not as an isolated fact."
 },
 {
  "id": "S4-44",
  "set": 4,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving a parabola's equation from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Deriving a parabola's equation from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A parabolic reflector in an ultraviolet sterilizer concentrates UV light at its focus. The reflector&#x27;s cross-section is a parabola with focus at $(0, 3)$ and directrix the line $y = -3$, in centimeters. (a) Derive the equation of the parabola from the focus and directrix, using the definition of a parabola as the set of points equidistant from the focus and the directrix. (b) The reflector is mounted so its cross-section is used from $y = 0$ to $y = 6$. Find the width of the reflector at its top edge ($y = 6$), in exact form and as a decimal. (c) Explain why the sterilizer&#x27;s UV source is placed at the focus rather than at the vertex.</p>",
  "evidence": "A distance-equality setup (point-to-focus equals point-to-directrix) simplified to the parabola's equation, a substitution at the top edge giving both $x$-values and the total width, and a purpose explanation for the focus placement",
  "reveals": "Whether the student can *derive* a conic equation from its geometric definition — the distance condition does the work — instead of pattern-matching a memorized form."
 },
 {
  "id": "S4-45",
  "set": 4,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Intersecting chords inside a circle",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Intersecting chords inside a circle — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords, including the intersecting-chords product relationship)",
  "html": "<p>A circular plaza in front of a hospital entrance has two straight walkways that cross inside the circle: walkway chords $AB$ and $CD$ intersect at point $E$ inside the plaza. Measurements along one walkway give $AE = 4$ m and $EB = 6$ m; along the other, $CE = 3$ m. (a) Find $ED$, showing the theorem you use. (b) A landscaper claims the crossing point $E$ must be the center of the circle because the chords cross. Refute or support the claim: if $E$ were the center, what would have to be true of the four measurements? (c) State the general relationship among the four segment lengths that your computation used.</p>",
  "evidence": "A product-of-segments computation giving the unknown length, a test of the center claim (equal halves would be required), and a general statement of the intersecting-chords relationship",
  "reveals": "Whether the student can use chord relationships quantitatively and can test a plausible-sounding geometric claim against what the measurements would force."
 },
 {
  "id": "S4-46",
  "set": 4,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit-circle values, reference angles, and coterminal angles",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit-circle values, reference angles, and coterminal angles — NC.M3.F-TF.2 (explain how the unit circle enables the extension of trigonometric functions to all real numbers; use reference angles and signs by quadrant)",
  "html": "<p>A respiratory therapist calibrates a ventilator dial whose positions are marked in radians. One setting corresponds to the angle $\\dfrac{5\\pi}{6}$. (a) Using the unit circle, find the exact values of $\\sin\\left(\\dfrac{5\\pi}{6}\\right)$ and $\\cos\\left(\\dfrac{5\\pi}{6}\\right)$, and name the quadrant of the terminal side. (b) Identify the reference angle for $\\dfrac{5\\pi}{6}$ and explain how it produces the exact values, including their signs. (c) Find one positive angle coterminal with $\\dfrac{5\\pi}{6}$ and the exact sine of that angle, explaining the connection.</p>",
  "evidence": "Coordinates read from the unit circle for the given angle, a reference angle identified with sign reasoning by quadrant, and a coterminal angle with its sine justified by identical terminal side/coordinates",
  "reveals": "Whether exact trig values are, for the student, coordinates of a point on a circle — with signs coming from position — rather than entries in a memorized table."
 },
 {
  "id": "S4-47",
  "set": 4,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena with a phase shift",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena with a phase shift — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline; interpret phase shift in context)",
  "html": "<p>Core body temperature follows a daily cycle modeled by $C(t) = 98.4 + 0.6\\sin\\left(\\dfrac{\\pi}{12}(t - 9)\\right)$, where $t$ is hours after midnight and $C(t)$ is temperature in degrees Fahrenheit. (a) Find the maximum temperature the model predicts and the time of day it occurs, showing how the sine function&#x27;s behavior gives both. (b) Find the minimum predicted temperature and when it occurs. (c) Compute $C(21)$ and interpret it in a sentence a nurse could use.</p>",
  "evidence": "Maximum and minimum values from midline ± amplitude with the times found by setting the sine equal to its extreme values, an evaluation at a specific time with units, and plain-language interpretations of the phase shift's effect",
  "reveals": "Whether the student can run a sinusoidal model in both directions — values to times and times to values — including the horizontal shift that anchors the cycle to the clock."
 },
 {
  "id": "S4-48",
  "set": 4,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and radian measure",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and radian measure — NC.M3.G-C.5 (derive, using similarity, that arc length is proportional to the radius; define the radian measure of an angle; use $s = r\\theta$)",
  "html": "<p>A continuous passive motion (CPM) machine slowly bends a patient&#x27;s knee after surgery. The patient&#x27;s lower leg, of length 0.9 m measured from the knee joint, sweeps through an angle of 2.1 radians during one full bend. (a) Find the distance traveled by the patient&#x27;s foot along its arc, in meters. (b) Show the computation a second way, by first finding what fraction of a full circle 2.1 radians represents and using the full circumference. (c) Explain why the arc-length computation $s = r\\theta$ requires the angle in radians.</p>",
  "evidence": "An arc-length computation with units, an independent fraction-of-circumference check agreeing with it, and an explanation connecting radians to the proportionality between angle and arc",
  "reveals": "Whether the student sees arc length and radian measure as one idea — the angle *is* the arc count in radius units — usable in a rehabilitation setting."
 },
 {
  "id": "S4-49",
  "set": 4,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Writing and using the equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Writing and using the equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean theorem; use the equation to test points)",
  "html": "<p>A hospital&#x27;s emergency-call coverage zone is a circle centered at $(-2, 3)$ on a coordinate map (units in miles) with radius 5 miles. (a) Write the equation of the circle. (b) A call comes from the point $(1, -1)$. Determine whether the caller is on the boundary of the coverage zone, inside it, or outside it, justifying your answer with a computation. (c) A second call comes from $(0, 0)$. Determine its status the same way. (d) Explain what &quot;on the boundary&quot; means in terms of distance from the hospital at $(-2, 3)$.</p>",
  "evidence": "A standard-form circle equation built from center and radius, substitution tests for both call points compared against the radius squared, correct inside/on/outside classifications, and a distance-based meaning for the boundary",
  "reveals": "Whether the student understands a circle's equation as a distance test — every point's status decided by comparing its distance to the radius — not just a formula to recite."
 },
 {
  "id": "S4-50",
  "set": 4,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving the exterior angle theorem for triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving the exterior angle theorem for triangles — NC.M3.G-CO.10 (prove theorems about triangles: measures of interior angles of a triangle sum to $180^\\circ$; exterior angle relationships)",
  "html": "<p>An adjustable exam table has a triangular support brace $ABC$ in which sides $AB$ and $AC$ are equal in length (the brace is isosceles with $A$ at the top hinge). Side $BC$ is extended beyond $C$ to a point $D$, forming an exterior angle at $C$. <strong>Prove that the measure of the exterior angle $\\angle ACD$ equals the sum of the measures of the two non-adjacent interior angles, $\\angle A$ and $\\angle B$.</strong> Describe the figure in your givens and give a structured proof with a reason for each statement. Then, in one sentence, state what extra conclusion the isosceles condition ($AB = AC$) lets you draw about $\\angle ACD$ and $\\angle B$.</p>",
  "evidence": "A structured proof combining the triangle angle sum with the supplementary (linear pair) relationship at $C$ to equate the exterior angle with the sum of the remote interior angles, plus a closing observation using the base-angles fact for the isosceles brace",
  "reveals": "Whether the student can chain two foundational facts — angle sum and linear pairs — into a theorem proof, the core proving move in triangle geometry."
 },
 {
  "id": "S4-51",
  "set": 4,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone and similarity scaling",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone and similarity scaling — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A specimen-collection cup is shaped like a right circular cone with radius 4 cm and height 9 cm. (a) Find the volume of the cup in exact form and as a decimal approximation, with units. (b) The cup is filled to half its height with a sample. A technician assumes this means half the volume. Using similarity, find the actual fraction of the cup&#x27;s volume that is filled, and the filled volume. (c) State the general principle your part (b) computation illustrates about volume and linear scale.</p>",
  "evidence": "A cone volume computation in exact and decimal form, a similarity argument giving the filled fraction as the cube of the linear ratio, the filled volume, and a statement of the cubic scaling principle",
  "reveals": "Whether the student knows that volume scales with the cube of linear dimensions — the reason \"half as tall\" is nowhere near \"half as much\" for a cone."
 },
 {
  "id": "S4-52",
  "set": 4,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere with unit conversion",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere with unit conversion — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A spherical exercise ball used in physical therapy has a radius of 33 cm. (a) Find the volume of air in the fully inflated ball, in exact form and as a decimal approximation in cubic centimeters. (b) Convert your volume to liters (1 L = 1,000 cm³), to the nearest tenth. (c) A pump delivers air at 2.5 liters per minute. How long, to the nearest tenth of a minute, does it take to inflate the ball from empty, assuming the rate stays constant?</p>",
  "evidence": "A sphere volume computation in exact and decimal form, a cubic-centimeter-to-liter conversion, and a rate division interpreted as inflation time with units",
  "reveals": "Whether the student can carry a volume through a unit conversion into a rate-and-time decision without losing track of units."
 },
 {
  "id": "S4-53",
  "set": 4,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross-sections of three-dimensional figures",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross-sections of three-dimensional figures — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross-sections of three-dimensional objects, and identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>For rehabilitation planning, a clinic models (i) a patient&#x27;s forearm as a right cylinder of radius 4 cm and length 28 cm, and (ii) a therapy ball as a sphere of radius 11 cm. (a) Describe the cross-section of the forearm model cut by a plane perpendicular to its length, and find that cross-section&#x27;s area. (b) Describe the cross-sections of the forearm model cut by a plane containing its central axis. (c) Describe the cross-sections of the therapy-ball model cut by any plane, state what determines their size, and find the largest possible cross-sectional area of the ball. (d) An MRI slice through the center of the ball and a slice 6 cm off-center produce two circular images; find the radius of the off-center slice&#x27;s circle.</p>",
  "evidence": "Correct shape identifications (circle; rectangle; circles of varying radius), area computations for the named cross-sections, the largest cross-section identified as the great circle through the center, and a Pythagorean computation for the off-center slice radius",
  "reveals": "Whether the student can visualize what slicing does to a solid — the spatial reasoning behind every medical image — and quantify it."
 },
 {
  "id": "S4-54",
  "set": 4,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling objects with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling objects with geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe and model objects)",
  "html": "<p>An IV fluid bag is labeled 500 mL. A biomedical technician approximates the filled bag as a rectangular prism measuring 15 cm by 10 cm by 3.5 cm. (a) Compute the volume of the prism model, in cubic centimeters, and state the equivalent volume in milliliters (1 cm³ = 1 mL). (b) Compare the model&#x27;s volume with the labeled 500 mL: find the difference and the percent by which the model over- or under-estimates the label. (c) Give two reasons, based on the bag&#x27;s real shape and contents, why the prism model does not match the label exactly.</p>",
  "evidence": "A prism volume computation with the cm³-to-mL equivalence used, a difference and percent comparison against the label, and two shape-based explanations for the mismatch (rounded/flexible walls, incomplete filling, wall thickness)",
  "reveals": "Whether the student treats a geometric model as an approximation to be evaluated against reality — computing the error and explaining it — rather than an exact description."
 },
 {
  "id": "S4-55",
  "set": 4,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A county plans mobile vaccination sites for two districts. District A has 96,000 residents spread over 240 square miles. District B has 78,000 residents spread over 390 square miles. (a) Find the population density of each district, in residents per square mile. (b) The county has 12 mobile sites and first considers splitting them evenly, 6 per district. Under that plan, how many residents would each site serve in each district? (c) Using your density results, argue which district is disadvantaged by the even split, and describe a fairer allocation principle in one or two sentences.</p>",
  "evidence": "Two density computations with units, a residents-per-site computation for the even split in both districts, and an equity argument grounded in the density and per-site numbers",
  "reveals": "Whether the student can use density as a planning tool — turning raw population and area figures into a defensible resource decision."
 },
 {
  "id": "S4-56",
  "set": 4,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems with geometric constraints",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems with geometric constraints — NC.M3.G-MG.3 (apply geometric methods to solve design problems, e.g., satisfying physical constraints or minimizing cost)",
  "html": "<p>A clinic needs cylindrical containers to store sterilized supplies. Each container must hold at least 2,000 cm³. Three candidate designs are available: Design A has radius 6 cm and height 18 cm; Design B has radius 8 cm and height 11 cm; Design C has radius 5 cm and height 26 cm. The clinic wants the design that uses the least material, where material is measured by total surface area (including both circular ends). (a) Compute the volume of each design and confirm which designs meet the requirement. (b) Compute the total surface area of each qualifying design. (c) Recommend a design, justifying your choice with your numbers, and state one practical factor other than material that could change the recommendation.</p>",
  "evidence": "Volume computations checked against the 2,000 cm³ constraint, surface-area computations (with both ends) for the qualifying designs, a recommendation justified by the smallest surface area, and a plausible practical caveat (shelf height, grip, lid cost)",
  "reveals": "Whether the student can optimize under a constraint by evaluating real candidates — filter by feasibility first, then minimize — the working form of most design problems."
 },
 {
  "id": "S4-57",
  "set": 4,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Statistical inference from a random sample",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Statistical inference from a random sample — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population)",
  "html": "<p>A health insurer wants to estimate the proportion of all its 40,000 adult members who had a flu shot this season. It surveys a random sample of 400 members and finds that 268 of them had a flu shot. (a) Compute the sample proportion. (b) Explain what population and what parameter the insurer is really interested in, and why the sample proportion is only an estimate of it. (c) The insurer&#x27;s first draft of the survey was handed out at a flu-shot clinic. Explain why that sampling method would have been biased, and in which direction.</p>",
  "evidence": "A sample proportion computed from the survey counts, the population and parameter named precisely, an explanation of sampling variability as the reason estimates differ from parameters, and a bias analysis of the clinic-based sample with its direction (overestimate)",
  "reveals": "Whether the student grasps the logic of inference — random sampling is what licenses generalizing from 400 people to 40,000 — and can spot a sampling plan that breaks it."
 },
 {
  "id": "S4-58",
  "set": 4,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a proportion with a margin of error from simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a proportion with a margin of error from simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A city health department wants to estimate the proportion of all city residents who support building a new public clinic. A random sample of 300 residents finds 174 in support. A simulation of random sampling (using the sample proportion as the assumed population proportion) produces sample proportions with a standard deviation of 0.028. (a) Compute the sample proportion. (b) Develop a margin of error from the simulation and give an interval of plausible values for the true proportion of all residents who support the clinic. (c) A council member claims, &quot;A majority of residents support the clinic.&quot; Using your interval, evaluate that claim.</p>",
  "evidence": "A sample proportion, a margin of error built as roughly two simulation standard deviations, a plausible-values interval, and a majority-claim evaluation based on whether the whole interval lies above 50%",
  "reveals": "Whether the student converts simulation output into an honest range for a population value and judges a public claim against the whole range, not the point estimate."
 },
 {
  "id": "S4-59",
  "set": 4,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing treatments in a randomized experiment",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing treatments in a randomized experiment — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A hospital compares two hand-hygiene training methods. Forty nurses are randomly assigned, 20 to Method A (video training) and 20 to Method B (in-person coaching). After training, the mean number of bacterial colonies found in hand samples is 24.6 for Method A and 25.4 for Method B, an observed difference of $-0.8$ colonies (A minus B). To judge whether the difference could be due to chance, staff run a simulation: they randomly reassign the 40 results to the two methods 200 times, recomputing the difference of means each time. In the simulation, a difference at least as extreme as $-0.8$ (that is, $\\le -0.8$) occurred in 38 of the 200 trials. (a) Estimate the probability of seeing a difference this large if the two methods were truly equally effective. (b) At the 5% significance level, is the observed difference statistically significant? (c) State the conclusion the hospital should draw, and explain what the simulation results suggest the hospital should do next if it still wants to know which method is better.</p>",
  "evidence": "A probability computed from the simulation count, a comparison against the 5% level leading to \"not significant,\" a conclusion that the data do not establish a real difference, and a sensible next step (larger sample / more data) tied to the simulation's message",
  "reveals": "Whether the student can accept a \"not significant\" verdict correctly — as \"this difference is consistent with chance,\" not \"the methods are proven equal\" — the mirror image of reading a significant result."
 },
 {
  "id": "S4-60",
  "set": 4,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data)",
  "html": "<p>A local news article reports: &quot;Energy drinks double your heart-attack risk, study finds!&quot; The article is based on an observational study that followed 60 adults who regularly drink energy drinks and 60 who do not, for one year. In the energy-drink group, 2 people had a heart attack; in the other group, 1 person did. The article also notes the energy-drink group contained more smokers and more people with high-stress jobs. (a) Compute the heart-attack rate in each group, and the absolute difference in rates. (b) Explain how the headline&#x27;s word &quot;double&quot; was obtained, and why it is misleading given your part (a) results. (c) Identify two reasons this study cannot support a cause-and-effect conclusion, referencing details of the study design. (d) Describe one change to the study design that would strengthen it, and say what the change would fix.</p>",
  "evidence": "Both group rates and their absolute difference computed, the relative-risk framing behind \"double\" identified and contrasted with the tiny absolute difference, two design-based obstacles to causation (observational design/confounding from smoking and stress; very small numbers of events), and a design improvement matched to a named weakness",
  "reveals": "Whether the student reads health headlines the way a statistician does — absolute vs. relative risk, confounding, and sample size — before accepting a causal claim."
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
  "id": "S5-21",
  "set": 5,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Operations with complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Operations with complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; find the conjugate of a complex number and use it to find quotients)",
  "html": "<p>In an aircraft&#x27;s navigation system, alternating-current signals are represented by complex numbers, measured in volts. Two signals are $z_1 = 4 + 3i$ and $z_2 = 2 - i$. (a) When the signals run in parallel, their combined signal is $z_1 + z_2$. Find it. (b) When one signal passes through an amplifier stage modeled by the other, the result is the product $z_1 z_2$. Find it. (c) A filter stage divides the signals, computing $\\dfrac{z_1}{z_2}$. Find the quotient, using the conjugate of the denominator.</p>",
  "evidence": "The sum, the product with $i^2 = -1$ applied, and the quotient computed by multiplying numerator and denominator by the conjugate of the denominator, each written in $a + bi$ form",
  "reveals": "Whether the student handles all three complex operations fluently, including the conjugate-based division that earlier addition/multiplication practice does not force."
 },
 {
  "id": "S5-22",
  "set": 5,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Solving rational equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving rational equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>A ground crew refuels a fuel truck using two hoses. Working alone, the second hose takes 2 hours longer than the first hose to fill the truck&#x27;s tank. Working together, the two hoses fill the tank in 2.4 hours. Let $x$ be the number of hours the first hose takes alone. (a) Write an equation in $x$ for the combined filling rate. (b) Solve the equation to find how long each hose takes alone. (c) Explain why one of the algebraic solutions must be discarded.</p>",
  "evidence": "A rate equation built from $\\frac{1}{x} + \\frac{1}{x+2}$, clearing of denominators to reach a quadratic, both roots, and a contextual rejection of the negative root",
  "reveals": "Whether the student can build a rational equation from work rates, solve it through a quadratic, and filter the roots through the physical situation."
 },
 {
  "id": "S5-23",
  "set": 5,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Extending polynomial identities to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Extending polynomial identities to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers, including factoring a sum of squares)",
  "html": "<p>A signal-processing filter in a train&#x27;s communication system is analyzed using polynomials with complex coefficients&#x27; roots. (a) Use the identity $(x + bi)(x - bi) = x^2 + b^2$ in reverse to factor $x^2 + 36$ over the complex numbers. (b) Solve the equation $2x^2 + 50 = 0$ over the complex numbers. (c) Show that $(3 + 4i)(3 - 4i)$ is a real number, and find its value.</p>",
  "evidence": "The factorization of the sum of squares into a conjugate pair of linear factors, the two imaginary solutions of the equation, and the conjugate product evaluated to a real number",
  "reveals": "Whether the student sees a sum of squares as factorable once $i$ is available, rather than declaring it \"not factorable\" from real-number habit."
 },
 {
  "id": "S5-24",
  "set": 5,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Zeros, multiplicity, and end behavior",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros, multiplicity, and end behavior — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, indicate multiplicity, and use the zeros to construct a rough graph)",
  "html": "<p>Engineers model the elevation deviation of a proposed light-rail track in a computer simulation by $P(x) = (x + 3)(x - 1)(x - 4)^2$, where $x$ is the distance in hundreds of meters from a reference point and $P(x)$ is the deviation in centimeters. (a) Find all zeros of $P$ and state the multiplicity of each. (b) For each zero, state whether the graph of $P$ crosses the $x$-axis or touches it and turns around there, and explain how the multiplicity decides this. (c) Describe the end behavior of the graph. (d) Find the $y$-intercept and interpret it in context. (e) Sketch a rough graph of $P$ consistent with (a)–(d).</p>",
  "evidence": "The three zeros with multiplicities, cross/touch behavior tied to odd vs. even multiplicity, end behavior from degree and leading coefficient, the $y$-intercept with a contextual sentence, and a labeled sketch",
  "reveals": "Whether the student reads a factored polynomial as a graph — especially the touch-and-turn behavior at an even-multiplicity zero."
 },
 {
  "id": "S5-25",
  "set": 5,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms; write $\\frac{a(x)}{b(x)}$ in the form $q(x) + \\frac{r(x)}{b(x)}$ using polynomial division)",
  "html": "<p>A regional airline divides its total daily ground-crew cost, $(2x^2 + 13x + 15)$ hundred dollars, equally among its $(x + 3)$ ground crews at a hub, where $x$ is the number of crews beyond a base staffing level. The cost per crew is $\\dfrac{2x^2 + 13x + 15}{x + 3}$ hundred dollars. (a) Rewrite this expression in the form $q(x) + \\dfrac{r}{x + 3}$, where $q$ is a polynomial and $r$ is a constant. (b) State the quotient and the remainder from the division. (c) As $x$ grows very large, the per-crew cost gets close to a simpler expression. Identify it and explain, using the remainder term, why the approximation improves.</p>",
  "evidence": "Polynomial long division carried out in full, the quotient-plus-remainder form, and an explanation that the remainder term shrinks toward zero as the denominator grows",
  "reveals": "Whether the student can restructure a rational expression through division and interpret the pieces — quotient as the trend, remainder term as the correction."
 },
 {
  "id": "S5-26",
  "set": 5,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>A driver makes a two-leg delivery trip. The first leg is 120 miles driven at an average speed of $x$ mph, and the second leg is 180 miles driven at an average speed of $(x + 10)$ mph. (a) Write the total travel time $T$ as a single rational expression in $x$. (b) Find the total time when $x = 50$, and interpret it. (c) State the values of $x$ that are excluded from the model&#x27;s domain and why they make no sense here.</p>",
  "evidence": "A common-denominator combination of $\\frac{120}{x}$ and $\\frac{180}{x+10}$ into one simplified rational expression, an evaluated trip time with units, and the excluded values identified",
  "reveals": "Whether the student adds rational expressions by building a common denominator rather than adding numerators and denominators, and connects the result back to hours on the road."
 },
 {
  "id": "S5-27",
  "set": 5,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Interpreting parts of an expression",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting parts of an expression — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression such as terms, factors, and coefficients)",
  "html": "<p>A rental car company prices a one-day rental with the expression $59.99 + 0.45(m - 100)$, where $m$ is the number of miles driven and the price applies for $m &gt; 100$. (a) Interpret the meaning of $59.99$ in context. (b) Interpret the meaning of $0.45$. (c) Interpret the meaning of the factor $(m - 100)$. (d) Find the cost of a one-day rental in which 260 miles are driven.</p>",
  "evidence": "A contextual interpretation of each of the three named parts (a flat charge, a per-mile rate, and the billable miles beyond an included allowance), plus the evaluated total cost",
  "reveals": "Whether the student reads an expression as a pricing story — base fee, rate, and counted quantity — rather than as symbols to evaluate mechanically."
 },
 {
  "id": "S5-28",
  "set": 5,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Solving equations graphically",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Solving equations graphically — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find the solutions)",
  "html": "<p>Two drone delivery services price a delivery of distance $d$ miles as follows: Service 1 charges $C_1(d) = 5 + 2d$ dollars, and Service 2 (running a promotion) charges $C_2(d) = 0.5d^2 - 2d + 11$ dollars. (a) Explain why the $d$-values where the two services cost the same are exactly the $d$-coordinates of the intersection points of the two graphs. (b) Find all distances at which the two services cost the same. (c) For distances strictly between your two answers in (b), which service is cheaper? Justify with a test value.</p>",
  "evidence": "An explanation linking equal charges to equal $y$-values at the same $d$, the equation $C_1(d) = C_2(d)$ reduced to a factorable quadratic with both solutions, and a mid-interval test value deciding which service is cheaper between them",
  "reveals": "Whether the student understands intersection points as solutions of an equation, and can move between the graphical and algebraic views of the same question."
 },
 {
  "id": "S5-29",
  "set": 5,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Fundamental Theorem of Algebra and complex roots",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Fundamental Theorem of Algebra and complex roots — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all complex solutions of polynomial equations)",
  "html": "<p>The vibration modes of a suspension bridge cable are modeled by the polynomial equation $x^4 - 5x^2 - 36 = 0$, where $x$ is a normalized frequency parameter. (a) Find all complex solutions of the equation. (Hint: the equation is quadratic in $x^2$.) (b) Explain how the Fundamental Theorem of Algebra confirms you have found all of them. (c) Which solutions could represent an actual vibration frequency of the cable, and why?</p>",
  "evidence": "A substitution reducing the quartic to a quadratic in $x^2$, both values of $x^2$, all four solutions (two real, two imaginary), a completeness statement based on degree, and identification of the real solutions as the physically meaningful ones",
  "reveals": "Whether the student recognizes quadratic structure inside a quartic and expects the full count of complex solutions, real and nonreal alike."
 },
 {
  "id": "S5-30",
  "set": 5,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A delivery drone drops a package, and the package&#x27;s fall is modeled by $s = \\tfrac{1}{2}at^2$, where $s$ is the distance fallen in feet, $a = 32$ ft/s² is the acceleration due to gravity, and air resistance is ignored. (a) Rearrange the formula to solve for $t$. (b) A package is released from a height of 256 ft. How long does it take to reach the ground? (c) Explain why the negative square root is not used in part (b).</p>",
  "evidence": "The formula solved for $t$ (with the square root introduced correctly), substitution of the height and acceleration, the fall time with units, and a reason for rejecting the negative root",
  "reveals": "Whether the student can undo a squared variable in a formula before substituting, and handles the $\\pm$ from a square root as a modeling decision rather than ignoring it."
 },
 {
  "id": "S5-31",
  "set": 5,
  "n": 31,
  "strand": "Functions",
  "topic": "Domain and range from a graph in context",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Domain and range from a graph in context — NC.M3.F-IF.1 (understand that a function assigns to each input exactly one output; use function notation and interpret domain and range)",
  "html": "<p>A ferry crosses a harbor. Its distance from the departure dock, in miles, as a function of time $t$ in minutes is graphed as follows: the graph starts at $(0, 0)$, rises in a straight line to $(30, 12)$ at the far dock, stays level until $(50, 12)$ while passengers load, then falls in a straight line to $(80, 0)$ back at the departure dock. (a) Is distance a function of time? How can you tell from the graph? (b) State the domain and range of the function. (c) What is the ferry doing during the flat portion of the graph, and between which times? (d) How far is the ferry from the departure dock at $t = 65$ minutes? Show how the graph gives this.</p>",
  "evidence": "A function determination based on one output per time, the domain and range as intervals with units, the loading stop identified from the level segment, and the return-leg value computed from the falling segment's rate",
  "reveals": "Whether the student reads a piecewise graph as a complete trip story — travel, dwell, return — and extracts domain, range, and values from its shape."
 },
 {
  "id": "S5-32",
  "set": 5,
  "n": 32,
  "strand": "Functions",
  "topic": "Interpreting function notation and equations",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Interpreting function notation and equations — NC.M3.F-IF.2 (use function notation, evaluate functions for inputs in their domains, and interpret statements that use function notation in terms of a context)",
  "html": "<p>During a test flight profile, an airplane&#x27;s altitude in feet is modeled by $A(t) = 1200t - 40t^2$, where $t$ is the number of minutes since the maneuver began and the model applies for $0 \\le t \\le 30$. (a) Find $A(10)$ and interpret it. (b) Solve $A(t) = 8000$ and interpret both solutions in context. (c) State the domain restriction that keeps this model physically sensible, and explain what happens at the endpoints.</p>",
  "evidence": "The evaluated altitude with an interpretation sentence, the equation solved (factoring after rearranging) with both times interpreted as the two passes through the same altitude, and the domain endpoints tied to the start and end of the maneuver",
  "reveals": "Whether the student moves fluently between $A(10)$ as a value and $A(t) = 8000$ as a question about times, interpreting both directions in context."
 },
 {
  "id": "S5-33",
  "set": 5,
  "n": 33,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (write a function that describes a relationship between two quantities; combine standard function types using arithmetic operations)",
  "html": "<p>A tour operator sells day-trip bus packages. Market research shows that if the operator runs a trip with $x$ packages sold, the price it can charge per package is $p(x) = 400 - 5x$ dollars (the price drops as the group grows). (a) Build the revenue function $R(x)$ as a product of two functions, and write it in standard form. (b) Find $R(20)$ and interpret it. (c) How many packages maximize the revenue, and what is the maximum revenue? (Use the vertex of the parabola.)</p>",
  "evidence": "Revenue built as (number sold) × (price per package), expanded to a quadratic, an evaluated revenue with interpretation, and the vertex located with the maximizing package count and maximum revenue",
  "reveals": "Whether the student can manufacture a quadratic model by multiplying two linear relationships and then optimize it, instead of waiting to be handed a quadratic."
 },
 {
  "id": "S5-34",
  "set": 5,
  "n": 34,
  "strand": "Functions",
  "topic": "Transformations and even/odd functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations and even/odd functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$; recognize even and odd functions from their algebraic expressions)",
  "html": "<p>A safety lab models braking distance (in feet) for a car traveling at $v$ mph on dry pavement by $f(v) = 0.05v^2$. (a) A wet-pavement model is $g(v) = 1.6f(v)$. Describe $g$ as a transformation of $f$, and explain in context what the transformation means for braking distances. (b) Find $g(40)$ and interpret it. (c) A second model is $h(v) = f(v - 5)$. Describe this transformation, and explain why it might represent a driver who effectively reacts as if traveling 5 mph slower. (d) Determine whether $f$ is even, odd, or neither, justifying your answer algebraically.</p>",
  "evidence": "The vertical stretch and horizontal shift each named and interpreted physically, the evaluated wet-pavement braking distance, and an even/odd determination from comparing $f(-v)$ with $f(v)$",
  "reveals": "Whether the student connects transformation parameters to physical effects (a multiplier on distance, a shift in effective speed) and checks symmetry algebraically."
 },
 {
  "id": "S5-35",
  "set": 5,
  "n": 35,
  "strand": "Functions",
  "topic": "Finding an inverse function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding an inverse function — NC.M3.F-BF.4a (find inverse functions; solve an equation of the form $f(x) = c$ for a simple function that has an inverse and write an expression for the inverse)",
  "html": "<p>A moving company charges for a local move according to $C(w) = 0.85w + 120$, where $w$ is the weight of the shipment in pounds and $C$ is the cost in dollars. (a) Find a formula for the inverse function $C^{-1}$. (b) A customer has a budget of $\\$545$. Use the inverse function to find the greatest shipment weight the customer can afford. (c) In one sentence, state what the inverse function answers that the original function does not.</p>",
  "evidence": "The inverse derived by swapping the roles of weight and cost and solving, the budget weight computed from the inverse, and a statement that the inverse converts a cost back into the weight that produces it",
  "reveals": "Whether the student treats an inverse as the tool for \"given the output, find the input\" — here, turning a budget into a weight limit."
 },
 {
  "id": "S5-36",
  "set": 5,
  "n": 36,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph functions expressed symbolically and show key features; graph piecewise-defined functions)",
  "html": "<p>An airport parking garage charges by the hour with a daily cap. The charge $P(h)$ in dollars for parking $h$ hours ($0 &lt; h \\le 24$) is:<br>$$P(h) = \\begin{cases} 6 &amp; 0 &lt; h \\le 1 \\\\ 6 + 4(h - 1) &amp; 1 &lt; h \\le 8 \\\\ 34 &amp; 8 &lt; h \\le 24 \\end{cases}$$<br>(a) Find $P(5)$ and $P(20)$, interpreting each. (b) Describe the graph of $P$ over $[0, 24]$: give the shape of each piece, where the pieces join, and whether the joins are continuous. (c) A traveler parks for exactly the moment the daily cap takes over. At what time does that happen, and how does the formula show it?</p>",
  "evidence": "Two evaluated charges with interpretations, a piece-by-piece graph description (level, rising with a stated rate, level again) including the join values, and the cap time found by setting the middle piece equal to the capped charge",
  "reveals": "Whether the student reads a piecewise pricing rule as a single coherent graph and can locate where one pricing regime hands off to the next."
 },
 {
  "id": "S5-37",
  "set": 5,
  "n": 37,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when suitable factorizations are available and showing end behavior)",
  "html": "<p>An airline models its profit, in thousands of dollars, on a new route as a function of the ticket price $p$ in dollars: $P(p) = -0.01p(p - 60)(p - 120)$. (a) Find the zeros of $P$ and interpret each in context. (b) Describe the end behavior of the graph and explain why the right-hand end behavior makes sense for ticket pricing. (c) Find $P(90)$ and interpret it. (d) For which ticket prices is the route profitable? Justify using the sign of $P$ between its zeros.</p>",
  "evidence": "The three zeros interpreted as break-even (or boundary) prices, end behavior from the negative cubic term, the evaluated profit at the mid-range price, and the profitable price interval decided from the sign pattern between zeros",
  "reveals": "Whether the student uses factored form as a graph-and-decision tool — zeros, sign, and end behavior all feeding a pricing conclusion."
 },
 {
  "id": "S5-38",
  "set": 5,
  "n": 38,
  "strand": "Functions",
  "topic": "Graphing exponential functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing exponential functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts, end behavior, and asymptotes)",
  "html": "<p>A new airport shuttle service grows its monthly ridership according to $R(t) = 2000(1.5)^t$, where $t$ is the number of months since launch and $R$ is riders per month. (a) Identify the $y$-intercept of the graph and interpret it. (b) State the horizontal asymptote and explain what it means about the model as $t$ decreases toward the launch. (c) Find $R(2)$ and interpret it. (d) State the domain and range that make sense in this context, and explain each restriction.</p>",
  "evidence": "The intercept interpreted as launch ridership, the asymptote named with a contextual explanation, the evaluated ridership with interpretation, and context-based domain and range statements",
  "reveals": "Whether the student reads an exponential model's graph features — starting value, asymptote, growth — as facts about a real service rather than abstract curve properties."
 },
 {
  "id": "S5-39",
  "set": 5,
  "n": 39,
  "strand": "Functions",
  "topic": "Expressing solutions of exponential equations as logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Expressing solutions of exponential equations as logarithms — NC.M3.F-LE.4 (for exponential models, express as a logarithm the solution to $ab^{ct} = d$ and evaluate the logarithm)",
  "html": "<p>A city&#x27;s registered e-bike fleet is growing according to $N(t) = 800(1.25)^t$, where $t$ is years since the registry began. City planners need to know when the fleet will reach 5,000 e-bikes, the capacity of the current charging network. (a) Write the equation that must be solved. (b) Express the solution as a logarithm, then evaluate it. (c) Interpret the answer for the planners, including whether the capacity is reached during the 8th or the 9th year.</p>",
  "evidence": "The exponential equation set up from the capacity target, the solution isolated as a logarithmic expression (change of base acceptable), a decimal value, and an interpretation locating the crossing within a specific year",
  "reveals": "Whether the student reaches for a logarithm as the inverse operation that answers \"when\" for exponential growth, not just \"how much.\""
 },
 {
  "id": "S5-40",
  "set": 5,
  "n": 40,
  "strand": "Functions",
  "topic": "Modeling constraints with inequalities",
  "standards": [
   "NC.M3.A-CED.3"
  ],
  "standardsDetail": "Modeling constraints with inequalities — NC.M3.A-CED.3 (represent constraints by equations or inequalities and by systems, and interpret solutions as viable or nonviable options in a modeling context)",
  "html": "<p>A charter boat is licensed under these rules: it may carry at most 40 passengers; for safety, the total passenger weight may not exceed 5,200 lb, where an adult is counted as 170 lb and a child as 80 lb; and at least 10 adults must be on board to supervise. Let $a$ be the number of adults and $c$ the number of children. (a) Write a system of inequalities that models all the rules. (b) Describe the feasible region the system defines. (c) The captain considers two loads: (i) 20 adults and 15 children; (ii) 30 adults and 15 children. Test each against every rule and state which loads are legal.</p>",
  "evidence": "Four inequalities covering capacity, weight, supervision, and nonnegativity, a description of the feasible region as the overlap of the constraints, and both test loads checked rule by rule with legal/illegal verdicts",
  "reveals": "Whether the student translates a list of real rules into a system whose solution set — not a single point — is the answer."
 },
 {
  "id": "S5-41",
  "set": 5,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "The unit circle and periodicity",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "The unit circle and periodicity — NC.M3.F-TF.2 (explain how the unit circle in the coordinate plane enables the extension of trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise around the unit circle)",
  "html": "<p>A lighthouse&#x27;s rotating beam is tracked on a unit circle centered at the lighthouse, where the point where the beam hits the circle has coordinates $(\\cos\\theta, \\sin\\theta)$ for the beam&#x27;s angle $\\theta$ measured from east. (a) Find the exact coordinates of the point when $\\theta = 240^\\circ$. (b) Explain, using the quadrant, why both coordinates are negative. (c) The beam keeps rotating to $\\theta = 600^\\circ$. Without recomputing, state the point&#x27;s coordinates and the property of sine and cosine that justifies your answer. (d) What is $\\sin 240^\\circ$, and what does it say about the beam point&#x27;s vertical position?</p>",
  "evidence": "The exact coordinates at $240^\\circ$ from the reference angle, a quadrant-based sign explanation, the same coordinates at $600^\\circ$ justified by the $360^\\circ$ period, and the sine value tied to the point's vertical coordinate",
  "reveals": "Whether the student treats the unit circle as the definition of sine and cosine for any angle — including beyond $360^\\circ$ — rather than as a triangle mnemonic."
 },
 {
  "id": "S5-42",
  "set": 5,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and their intercepted arcs",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and their intercepted arcs — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>Two ranger stations, $P$ and $Q$, sit on the shore of a circular lake, and the minor arc $PQ$ measures $150^\\circ$. A viewing platform $R$ is built on the shore on the major arc $PQ$. (a) A ranger at $R$ sights both stations; the angle $\\angle PRQ$ is an inscribed angle intercepting arc $PQ$. Find its measure and state the theorem you used. (b) A second platform $S$, also on the major arc, sights the same two stations. What is the measure of $\\angle PSQ$? Explain why it must match your answer to (a). (c) What angle would the stations subtend from the center of the lake, and how does it compare with the inscribed angle?</p>",
  "evidence": "The inscribed angle computed as half the intercepted arc with the theorem named, the equal angle from the second platform justified by the shared intercepted arc, and the central angle identified as the full arc measure with the factor-of-two comparison stated",
  "reveals": "Whether the student commands the inscribed angle theorem in both directions — angle from arc — and knows the angle is the same from anywhere on the same arc."
 },
 {
  "id": "S5-43",
  "set": 5,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive using similarity the fact that the length of the arc intercepted by an angle is proportional to the radius, and define the radian measure of the angle as the constant of proportionality; derive the formula for the area of a sector)",
  "html": "<p>A windshield wiper blade is 20 inches long and pivots at one end, sweeping through an angle of $120^\\circ$ with each pass. (a) Convert the sweep angle to radian measure. (b) Find the length of the arc traced by the tip of the blade in one pass. (c) Find the area of the windshield cleaned by the blade in one pass (the sector swept by the blade), in square inches.</p>",
  "evidence": "The radian conversion, the arc length from $s = r\\theta$ with the blade length as radius, and the sector area from $A = \\tfrac{1}{2}r^2\\theta$, each with units",
  "reveals": "Whether the student moves between degrees and radians fluently and sees arc length and sector area as two views of the same sweep."
 },
 {
  "id": "S5-44",
  "set": 5,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A delivery drone operates within a circular service region whose boundary is given by $x^2 + y^2 - 6x + 4y - 12 = 0$, where $x$ and $y$ are measured in kilometers from a reference point on the ground. (a) Find the center and radius of the service region by completing the square. (b) A customer is located at $(6, 2)$. Determine whether the customer is inside the region, on its boundary, or outside it, showing the distance computation that decides this. (c) State the farthest distance from the warehouse (the center) that the drone can be asked to fly.</p>",
  "evidence": "The equation rewritten in center-radius form by completing the square in both variables, the center and radius, a distance computation from the center to the customer compared with the radius, and the radius stated as the maximum flight distance",
  "reveals": "Whether the student can decode a general-form circle equation into geometric facts and use distance — not guesswork — to test membership in a region."
 },
 {
  "id": "S5-45",
  "set": 5,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that the base angles of an isosceles triangle are congruent)",
  "html": "<p>A suspension bridge uses a triangular truss panel. The panel is triangle $ABC$, with the apex at $A$ at the top and the base $BC$ horizontal at deck level. The two sides are built equal: $AB = AC$. Prove that the base angles are congruent, that is, $\\angle B \\cong \\angle C$. Describe and use an auxiliary segment in your proof, and give a reason for every statement.</p>",
  "evidence": "A structured proof: the angle bisector (or median) from $A$ drawn as an auxiliary segment, two triangles shown congruent by SAS (or SSS), and the base angles concluded congruent by CPCTC, with reasons stated for each step",
  "reveals": "Whether the student can construct a proof by adding the one segment that creates congruent triangles, rather than asserting the symmetry the theorem claims."
 },
 {
  "id": "S5-46",
  "set": 5,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length — NC.M3.F-TF.1 (understand radian measure of an angle; the arc length on a unit circle subtended by an angle is its radian measure)",
  "html": "<p>A bicycle wheel has a radius of 14 inches. (a) Convert $\\dfrac{5\\pi}{3}$ radians to degrees. (b) As the bicycle rolls without slipping, the wheel rotates through $\\dfrac{5\\pi}{3}$ radians. How far does the bicycle travel, in inches and in feet? (c) Explain why the distance traveled equals the arc length on the wheel&#x27;s rim.</p>",
  "evidence": "The radian-to-degree conversion, the arc length computed as $s = r\\theta$ using the wheel's actual radius, a conversion to feet, and an explanation connecting rolling without slipping to rim arc length",
  "reveals": "Whether the student extends radian measure beyond the unit circle, using $s = r\\theta$ for a real rolling wheel."
 },
 {
  "id": "S5-47",
  "set": 5,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Central and inscribed angles on the same arc",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Central and inscribed angles on the same arc — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, central angles, radii, and chords)",
  "html": "<p>Two fountains, $A$ and $B$, stand on the rim of a circular plaza with center $O$. The central angle $\\angle AOB$ measures $96^\\circ$. (a) A visitor standing at point $C$ on the major arc $AB$ looks at the two fountains. Find the measure of the inscribed angle $\\angle ACB$. (b) A second visitor stands at point $D$ on the minor arc $AB$. Find the measure of $\\angle ADB$. (c) Add your answers to (a) and (b). What relationship between $C$ and $D$&#x27;s viewpoints does the sum reveal, and which theorem explains it?</p>",
  "evidence": "The inscribed angle on the major arc computed as half the central angle, the angle from the minor arc computed as half the major arc, and the supplementary sum identified with the cyclic-quadrilateral relationship",
  "reveals": "Whether the student distinguishes which arc an inscribed angle intercepts based on where the vertex sits — the most common failure point in circle-angle problems."
 },
 {
  "id": "S5-48",
  "set": 5,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>The cross-section of a spacecraft antenna dish is a parabola. The receiver sits at the focus $(5, 0)$, and the directrix is the line $x = -5$ (measurements in centimeters). (a) Derive the equation of the parabola from the focus and directrix. (b) The dish is 40 cm wide, measured across the rim from $y = -20$ to $y = 20$. How deep is the dish at its rim?</p>",
  "evidence": "A derivation setting the distance to the focus equal to the distance to the directrix and simplifying, the resulting equation for a horizontally opening parabola, and the rim depth computed by substituting the rim's $y$-value",
  "reveals": "Whether the student can rebuild a parabola's equation from its geometric definition in the horizontal orientation, not just the vertical template."
 },
 {
  "id": "S5-49",
  "set": 5,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline)",
  "html": "<p>At a ferry dock, the water depth varies with the tides. At low tide ($t = 0$ hours) the depth is 2 ft; at high tide it is 14 ft; and the full low-to-low cycle takes 12 hours. (a) Write a function $d(t)$ that models the depth using a cosine function, identifying the amplitude, midline, and period you used. (b) Find the depth at $t = 3$ hours and interpret it. (c) A ferry needs a depth of at least 11 ft to dock safely. At what time after low tide can the ferry first dock? (d) For how many hours in each 12-hour cycle is the depth at least 11 ft? Explain using the model.</p>",
  "evidence": "A cosine model built from the given extremes and cycle length (with the starting phase justified by the low tide at $t = 0$), the evaluated mid-cycle depth, the first safe docking time found by solving the cosine equation, and the safe window's length found from the model's symmetry or a second solution",
  "reveals": "Whether the student can construct — not just read — a trigonometric model from physical extremes and then interrogate it for a safety decision."
 },
 {
  "id": "S5-50",
  "set": 5,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Circumscribed circles of a triangle",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Circumscribed circles of a triangle — NC.M3.G-C.3 (construct the inscribed and circumscribed circles of a triangle, and prove properties of angles for a quadrilateral inscribed in a circle)",
  "html": "<p>Three towns are located at $A(0, 0)$, $B(8, 0)$, and $C(2, 6)$ on a map where coordinates are in miles. The towns agree to build a regional airport at a point equidistant from all three town centers. (a) Find the coordinates of the airport site. (b) Find the distance from the airport to each town. (c) Justify your method: explain why the perpendicular bisectors of the triangle&#x27;s sides meet at a single point, and why that point is the center of the circle passing through all three towns.</p>",
  "evidence": "The perpendicular bisectors of two sides set up and solved for their intersection, the common distance to the three vertices verified, and a justification that points on a perpendicular bisector are equidistant from a segment's endpoints, making the intersection equidistant from all three towns",
  "reveals": "Whether the student understands the circumcenter as an equidistance construction — a fair-location decision — and can execute it with coordinates."
 },
 {
  "id": "S5-51",
  "set": 5,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>An airport stores jet fuel in a vertical cylindrical tank with a radius of 5 ft and a height of 12 ft. (a) Find the volume of the tank in cubic feet. (b) Convert the volume to gallons, using $1 \\text{ ft}^3 \\approx 7.48$ gallons. (c) A regional jet takes on 1,200 gallons per refueling. How many complete refuelings can a full tank supply?</p>",
  "evidence": "The cylinder volume from $V = \\pi r^2 h$, the gallon conversion, and the refueling count rounded down with a reason (only complete refuelings count)",
  "reveals": "Whether the student carries a volume through a unit conversion and applies the rounding direction the real situation requires."
 },
 {
  "id": "S5-52",
  "set": 5,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A spherical water tower tank has a radius of 9 m. (a) Find the volume of the tank in cubic meters. (b) Convert the volume to liters ($1 \\text{ m}^3 = 1{,}000$ L). (c) The town the tower serves uses about 400,000 L of water per day. For about how many days could a full tower supply the town?</p>",
  "evidence": "The sphere volume from $V = \\tfrac{4}{3}\\pi r^3$, the liter conversion, and the supply time computed as a quotient with units and a sensible rounding",
  "reveals": "Whether the student applies the sphere formula accurately (including the cube) and converts a capacity into a duration."
 },
 {
  "id": "S5-53",
  "set": 5,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Solids generated by rotating two-dimensional figures",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Solids generated by rotating two-dimensional figures — NC.M3.G-GMD.4 (identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>A manufacturer makes a mold for a hollow cone-shaped marker by rotating a right triangle about one of its legs. The triangle has legs of 6 in and 10 in. (a) The triangle is rotated about the 10-inch leg. Identify the solid formed, give its radius and height, and find its volume. (b) The same triangle is instead rotated about the 6-inch leg. Identify the solid, give its radius and height, and find its volume. (c) Explain why the two volumes differ even though the same triangle generated both solids.</p>",
  "evidence": "Each solid identified as a cone with the axis leg as height and the other leg as radius, both cone volumes computed, and an explanation that swapping which leg is the radius changes the volume because the radius is squared in the formula",
  "reveals": "Whether the student visualizes rotation-generated solids and understands the asymmetric roles of radius and height in the cone formula."
 },
 {
  "id": "S5-54",
  "set": 5,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe objects)",
  "html": "<p>A tanker rail car carries liquid chemicals. An engineer models the tank as a cylinder of radius 1.5 m and length 10 m, with a hemispherical cap on each end. (a) Describe why the two hemispherical caps together can be treated as one complete sphere. (b) Find the volume of the cylindrical part. (c) Find the volume of the two caps together. (d) Find the total volume of the tank in cubic meters, and convert it to liters.</p>",
  "evidence": "The composite model decomposed into a cylinder plus a sphere of the same radius, both volumes computed separately, the total, and the liter conversion",
  "reveals": "Whether the student decomposes a real manufactured object into standard solids and reassembles their measures into a usable capacity."
 },
 {
  "id": "S5-55",
  "set": 5,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A cargo airplane&#x27;s freight hold has a usable volume of 150 m³. On one flight it is loaded with 12,000 kg of freight. (a) Find the density of the load in kg/m³. (b) The airline loses money on any load whose density is below 100 kg/m³, because the hold fills by volume before it reaches its profitable weight. Did this flight clear the break-even density? (c) The hold&#x27;s structural density limit is 110 kg/m³. How many more kilograms of freight could have been loaded on this flight without exceeding the limit?</p>",
  "evidence": "The load density computed as mass over volume with units, a comparison against the break-even density with a verdict, and the additional mass found from the limit density times the volume minus the current load",
  "reveals": "Whether the student uses density as a decision quantity — comparing a computed density against thresholds and working backward from a limit density to a mass."
 },
 {
  "id": "S5-56",
  "set": 5,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including designing an object to satisfy physical constraints and minimize cost or maximize area)",
  "html": "<p>An airport shuttle company builds a rectangular equipment enclosure against the straight wall of its terminal, so fencing is needed on only three sides. The company has 60 ft of fencing. (a) Let $d$ be the depth of the enclosure (the length of each side perpendicular to the wall) and $w$ the width parallel to the wall. Write the fencing constraint and the area $A$ as a function of $d$ alone. (b) Find the dimensions that maximize the enclosed area, and the maximum area. (c) A manager proposes $d = 10$ ft instead. Compute that area and use it to support your answer to (b).</p>",
  "evidence": "The constraint $w + 2d = 60$ used to write area as a single-variable quadratic, the vertex located for the maximizing depth with the corresponding width and area, and a comparison design evaluated as a check",
  "reveals": "Whether the student turns a design constraint into an optimization model and justifies the optimum rather than guessing dimensions."
 },
 {
  "id": "S5-57",
  "set": 5,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Understanding statistical inference",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Understanding statistical inference — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population; decide if a specified model is consistent with results)",
  "html": "<p>An airport authority wants to estimate the average security wait time for all passengers departing from its airport on a given day. It randomly selects 400 passengers from across all terminals and all departing flights that day and records each passenger&#x27;s wait; the sample average is 18 minutes. (a) Identify the population and the sample. (b) Explain why the random selection supports using 18 minutes as an estimate for all departing passengers that day. (c) Explain why surveying only passengers waiting in the first-class lounge would not support the same conclusion. (d) Does the estimate apply to other airports or to a holiday weekend at the same airport? Explain.</p>",
  "evidence": "The population (all that day's departing passengers) and sample correctly identified, random selection linked to representativeness, the lounge survey identified as a biased subgroup, and the scope of the conclusion limited to the population actually sampled",
  "reveals": "Whether the student knows an inference is only as wide as the population the random sample was drawn from."
 },
 {
  "id": "S5-58",
  "set": 5,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Purpose of study designs and randomization",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Purpose of study designs and randomization — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>An airline wants to know whether a new boarding method (boarding by window seats first) reduces average boarding time. It randomly assigns 60 upcoming flights to either the current method or the new method, 30 flights each, and records each flight&#x27;s boarding time. (a) Identify the explanatory variable, the response variable, and the two treatments. (b) Is this an experiment or an observational study? Justify. (c) Explain the purpose of randomly assigning flights to methods. (d) The airline&#x27;s first idea was to compare last month&#x27;s flights (old method) with next month&#x27;s flights (new method). Give one confounding variable that this design fails to control and explain how random assignment addresses it.</p>",
  "evidence": "The variables and treatments named, the design classified as an experiment because the airline imposed the treatments, random assignment explained as balancing other influences between the groups, and a plausible confounder (such as season, route mix, or aircraft type) with the explanation of how randomization controls it",
  "reveals": "Whether the student understands random assignment — not just random selection — as the feature that lets an experiment support a cause-and-effect conclusion."
 },
 {
  "id": "S5-59",
  "set": 5,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A commuter rail agency wants to estimate the mean one-way commute time, in minutes, for all riders on its line. A random sample of 36 riders has a mean commute of 42 minutes. To build a margin of error, the agency runs a simulation: 200 simulated random samples of size 36 (using the sample results as the assumed population) produce sample means with a standard deviation of 3 minutes. (a) Use the simulation to develop a margin of error for the estimate. (b) Give a plausible interval for the true mean commute time of all riders. (c) An agency spokesperson claims, &quot;Our riders&#x27; average commute is under 40 minutes.&quot; Does the interval support that claim? Justify. (d) State in plain language what the interval in (b) means.</p>",
  "evidence": "A margin of error of about two simulation standard deviations, the interval built around the sample mean, the spokesperson's claim tested against the whole interval rather than the point estimate, and a plain-language interpretation of the interval as a plausible range for the population mean",
  "reveals": "Whether the student extends margin-of-error reasoning from proportions to means and resists letting a point estimate overrule the interval."
 },
 {
  "id": "S5-60",
  "set": 5,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Randomized experiments and significance",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Randomized experiments and significance — NC.M3.S-IC.5 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; use simulation to decide if differences between parameters are significant)",
  "html": "<p>A delivery company tests two GPS routing apps. Forty drivers are randomly assigned, 20 to App A and 20 to App B, and each driver&#x27;s average delivery time on a standard route is recorded. App A&#x27;s drivers average 38 minutes; App B&#x27;s drivers average 34 minutes, an observed difference of 4 minutes. To test whether the difference could be due to chance, the company runs a simulation: assuming the apps are equally effective, it randomly reassigns the 40 recorded times to the two apps 500 times and computes the difference in means each time. In 12 of the 500 simulations, the difference was 4 minutes or larger. (a) What proportion of the simulations produced a difference at least as large as the observed one? (b) Using 5% as the benchmark, is the observed difference statistically significant? Justify using (a). (c) State the conclusion the company can draw about the apps, and explain what feature of the study design allows a cause-and-effect conclusion.</p>",
  "evidence": "The simulated proportion computed from 12 out of 500, a significance judgment comparing that proportion with the 5% benchmark, a conclusion favoring App B, and random assignment identified as the design feature supporting a causal claim",
  "reveals": "Whether the student reads a simulation $p$-value-style proportion as evidence — small proportion, real difference — and connects the conclusion's strength to the experiment's random assignment."
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
  "id": "S6-21",
  "set": 6,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Multiplying complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Multiplying complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers)",
  "html": "<p>An electrician models a circuit with complex numbers: the impedance is $Z = 3 + 2i$ ohms and the current is $I = 4 - i$ amps. The voltage is the product $V = I \\cdot Z$. (a) Compute $V$ in the form $a + bi$. (b) State the real and imaginary parts of the voltage, with units.</p>",
  "evidence": "Distribution of the product, use of $i^2 = -1$ to simplify the $i^2$ term, and the result written in $a + bi$ form with parts labeled",
  "reveals": "Whether the student treats $i$ as an algebraic quantity governed by $i^2 = -1$, not as an ordinary variable that survives squaring unchanged."
 },
 {
  "id": "S6-22",
  "set": 6,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Extending polynomial identities to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Extending polynomial identities to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers; factor a sum of squares using $i$)",
  "html": "<p>A design calculation for a metal bracket produces the expression $x^2 + 36$, which has no real zeros. (a) Factor $x^2 + 36$ completely using complex numbers. (b) State the zeros of the expression. (c) Verify your factorization by expanding it.</p>",
  "evidence": "The factorization with $6i$ and $-6i$, the two zeros stated, and an expansion check that recovers $x^2 + 36$",
  "reveals": "Whether the student sees a sum of squares as a difference of squares in disguise once $i$ is available, instead of declaring it \"unfactorable.\""
 },
 {
  "id": "S6-23",
  "set": 6,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of polynomials",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of polynomials — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all solutions of a polynomial equation)",
  "html": "<p>The vibration modes of a beam are modeled by the polynomial $P(x) = x^3 - 5x^2 + 9x - 5$. One solution is known to be $x = 2 + i$. (a) Explain why $x = 2 - i$ must also be a solution. (b) Find the third solution. (c) State how many complex solutions a degree-3 polynomial has, counting multiplicity, and connect that fact to the Fundamental Theorem of Algebra.</p>",
  "evidence": "A conjugate-pair argument based on the real coefficients, division or factoring to reduce to a quadratic, all three solutions listed, and the degree-count statement",
  "reveals": "Whether the student uses the structure of real-coefficient polynomials — nonreal roots arrive in conjugate pairs — rather than treating each root as an isolated accident."
 },
 {
  "id": "S6-24",
  "set": 6,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Interpreting expressions in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting expressions in context — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context; interpret parts of an expression such as terms, factors, and coefficients)",
  "html": "<p>A planter box has length $x$ ft, width $(x + 3)$ ft, and height $2x$ ft, so its volume is $V(x) = x(x + 3)(2x)$ cubic feet. (a) Explain what each of the three factors represents. (b) Find the volume when $x = 2$ ft. (c) A customer wants a volume of exactly $V(x)$ with $x = 4$ ft; find that volume and state the box&#x27;s three dimensions.</p>",
  "evidence": "Each factor matched to a dimension of the box, and the volumes computed by substituting into the factored form with units",
  "reveals": "Whether the student reads a factored expression as a product of meaningful measurements, not just symbols to expand."
 },
 {
  "id": "S6-25",
  "set": 6,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "The Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "The Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem; the remainder on division by $(x - a)$ is $P(a)$)",
  "html": "<p>A contractor&#x27;s cumulative cost, in hundreds of dollars, $x$ days into a kitchen remodel is modeled by $C(x) = 2x^3 - 3x^2 + 5x + 12$. (a) Use the Remainder Theorem to find the remainder when $C(x)$ is divided by $(x - 4)$, using synthetic division. (b) Interpret that remainder in context, including the dollar amount it represents. (c) Is $(x - 4)$ a factor of $C(x)$? Justify your answer.</p>",
  "evidence": "Synthetic division carried out correctly, the remainder identified as $C(4)$ and converted from hundreds of dollars to dollars, and a factor decision based on whether the remainder is zero",
  "reveals": "Whether the student connects polynomial division to function evaluation — the remainder is a value of the function, with a real cost attached."
 },
 {
  "id": "S6-26",
  "set": 6,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms using inspection, long division, or technology)",
  "html": "<p>A flooring crew&#x27;s total labor cost, in dollars, for a job is modeled by $C(x) = 2x^2 + 5x + 7$, where $x$ is a crew-size code used by the office. The office rewrites expressions by dividing by $(x + 1)$. (a) Use polynomial long division to rewrite $\\dfrac{2x^2 + 5x + 7}{x + 1}$ in the form $q(x) + \\dfrac{r}{x + 1}$. (b) Check your answer by multiplying back.</p>",
  "evidence": "Long division with each subtraction step shown, the quotient-plus-remainder form, and a multiplication check that recovers the original numerator",
  "reveals": "Whether the student can carry a rational expression into an equivalent form accurately — and verifies equivalence instead of trusting the arithmetic."
 },
 {
  "id": "S6-27",
  "set": 6,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Subtracting rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Subtracting rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>Two pumps fill a concrete mixing drum. Their flow rates, in gallons per minute, are modeled by $\\dfrac{5}{x + 2}$ and $\\dfrac{3}{x - 1}$, where $x$ is a valve setting. (a) Write the <em>difference</em> of the rates (first pump minus second pump) as a single rational expression in simplified form. (b) State the values of $x$ that must be excluded.</p>",
  "evidence": "A common denominator built from both factors, careful distribution of the subtraction across the second numerator, the simplified difference, and the excluded values from the original denominators",
  "reveals": "Whether the student handles the sign distribution that subtraction demands — the step where rational-expression work most often breaks."
 },
 {
  "id": "S6-28",
  "set": 6,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations; extraneous solutions",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations; extraneous solutions — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>For a garden gate, a design formula gives the length of a diagonal brace as $d = \\sqrt{x + 7}$ feet, where $x$ is the gate&#x27;s width in feet. The mounting hardware requires the brace length to equal $(x - 5)$ feet, so the design must satisfy<br>$$\\sqrt{x + 7} = x - 5.$$<br>(a) Solve the equation. (b) Identify any extraneous solution and explain why it fails. (c) State the gate width and brace length that actually work.</p>",
  "evidence": "Squaring both sides, the resulting quadratic and both roots, a check of each root in the original equation, and the valid width and brace length with units",
  "reveals": "Whether the student knows squaring can manufacture solutions, and that only a check against the original equation — including the sign of the right side — separates real designs from impossible ones."
 },
 {
  "id": "S6-29",
  "set": 6,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Graphical solutions of equations",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Graphical solutions of equations — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; find approximate solutions graphically)",
  "html": "<p>A rental yard&#x27;s price for a floor sander is graphed as cost (dollars) versus rental time (hours). Company A&#x27;s line starts at $(0, 45)$ and rises $18$ dollars per hour. Company B&#x27;s line starts at $(0, 10)$ and rises $25$ dollars per hour. The two lines cross at the point $(5, 135)$. (a) Explain what the crossing point means for a customer. (b) Which company is cheaper for a 3-hour rental, and which is cheaper for an 8-hour rental? Use the graph&#x27;s structure (not just the crossing point) to justify each answer. (c) What does Company A&#x27;s starting value of $45$ represent?</p>",
  "evidence": "The intersection interpreted as equal cost at the same time, the cheaper company identified on each side of the crossing with slope/intercept reasoning, and the $y$-intercept read as a fixed fee",
  "reveals": "Whether the student reads an intersection as a break-even event with a before-and-after story, rather than as a meaningless crossing of lines."
 },
 {
  "id": "S6-30",
  "set": 6,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A trapezoidal garden bed has area $A = \\dfrac{1}{2}h(b_1 + b_2)$, where $h$ is the distance between the two parallel sides $b_1$ and $b_2$. The bed must have area $54$ ft², with $h = 6$ ft and $b_2 = 8$ ft. (a) Rearrange the formula to solve for $b_1$. (b) Use your rearranged formula to find $b_1$. (c) Explain why rearranging first is safer than substituting all the numbers at the start.</p>",
  "evidence": "The literal rearrangement isolating $b_1$, the computed length with units, and a reason tied to error-checking or reuse of the formula",
  "reveals": "Whether the student can treat a formula as an equation in several variables and isolate the one the job actually asks for."
 },
 {
  "id": "S6-31",
  "set": 6,
  "n": 31,
  "strand": "Functions",
  "topic": "Function notation; evaluating and inverting from a table",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Function notation; evaluating and inverting from a table — NC.M3.F-IF.2 (use function notation, evaluate functions for inputs in their domains, and interpret statements that use function notation in context)",
  "html": "<p>A pressure washer&#x27;s water use is recorded in a table: after $t$ minutes of use, the gallons used are $g(t)$: $t = 0, 5, 10, 15, 20$ minutes correspond to $g(t) = 0, 12.5, 25, 37.5, 50$ gallons. (a) Find $g(15)$ and interpret it. (b) Write an equation for $g(t)$. (c) Find the time at which $40$ gallons have been used, and explain what this calculation means in function language.</p>",
  "evidence": "The table value read and interpreted, a linear equation consistent with the constant rate in the table, and the input recovered for a given output with an inverse-reading interpretation",
  "reveals": "Whether the student moves fluently in both directions through function notation — output from input, and input from output."
 },
 {
  "id": "S6-32",
  "set": 6,
  "n": 32,
  "strand": "Functions",
  "topic": "Key features of graphs in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of graphs in context — NC.M3.F-IF.4 (interpret key features of graphs — intercepts, intervals of increase/decrease, maxima — in terms of the quantities)",
  "html": "<p>A swimming pool at a job site is filled according to a graph of water depth (feet) versus time (hours). The graph starts at $(0, 0.5)$, rises steadily to $(3, 3.5)$, stays level until $(5, 3.5)$, then rises more slowly to $(9, 5)$, where it stays. (a) Find the $y$-intercept and interpret it. (b) On which intervals is the depth increasing, and on which is it constant? (c) What is the maximum depth, and when is it first reached? (d) Describe in context why the second rising piece is less steep than the first.</p>",
  "evidence": "The intercept interpreted as initial depth, the increasing and constant intervals listed with endpoints, the maximum with its first time, and a rate-based explanation of the two slopes",
  "reveals": "Whether the student translates graph shape into a physical story — filling, paused, filling more slowly — feature by feature."
 },
 {
  "id": "S6-33",
  "set": 6,
  "n": 33,
  "strand": "Functions",
  "topic": "Domain and range related to context",
  "standards": [
   "NC.M3.F-IF.5"
  ],
  "standardsDetail": "Domain and range related to context — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes)",
  "html": "<p>An electrician&#x27;s total charge for a service call is modeled by $C(x) = 12x + 40$ dollars, where $x$ is the number of hours worked. For one scheduled job, the work will last at least 2 hours and at most 6 hours. (a) State the domain of $C$ appropriate for this job. (b) State the corresponding range of charges. (c) Explain why $x = -1$ and $x = 100$ are not reasonable inputs for this job even though the formula accepts them.</p>",
  "evidence": "The domain as an interval from the job's time bounds, the range computed from the endpoints, and context reasons (negative time is impossible; the job is capped) for excluding formula-valid inputs",
  "reveals": "Whether the student understands that a model's domain comes from the situation, not from the formula alone."
 },
 {
  "id": "S6-34",
  "set": 6,
  "n": 34,
  "strand": "Functions",
  "topic": "Graphing logarithmic functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing logarithmic functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts, end behavior, and asymptotes)",
  "html": "<p>The loudness of a power tool, in decibels, is modeled by $L(I) = 20\\log_{10}(I)$, where $I$ is the sound intensity relative to a reference level, with $I \\ge 1$. (a) Compute $L(1)$, $L(10)$, $L(100)$, and $L(1000)$. (b) Sketch the graph of $L$, marking the points from part (a). (c) State the domain and range of $L$ for $I \\ge 1$, and describe the vertical asymptote of the unrestricted logarithm graph. (d) In context, what happens to the loudness each time the intensity is multiplied by 10?</p>",
  "evidence": "Four loudness values from the table, a graph through those points rising with decreasing steepness, domain and range statements, the asymptote at $I = 0$, and the constant-increment interpretation",
  "reveals": "Whether the student sees a logarithm's graph as slow, steady growth — equal *ratios* of input producing equal *steps* of output."
 },
 {
  "id": "S6-35",
  "set": 6,
  "n": 35,
  "strand": "Functions",
  "topic": "Comparing functions in different representations",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing functions in different representations — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way — algebraically and by table)",
  "html": "<p>Two insulation upgrades are compared by the monthly heating savings they produce $t$ months after installation. Upgrade 1 gives savings $S_1(t) = 30 + 5t$ dollars. Upgrade 2&#x27;s savings are given by a table: $t = 0, 3, 6, 9$ months correspond to $10, 37, 64, 91$ dollars. (a) Which upgrade has the greater initial savings, and by how much? (b) Which upgrade&#x27;s savings grow faster, and how can you tell from each representation? (c) After how many months are the savings equal?</p>",
  "evidence": "Initial values compared from the equation and the table, growth rates compared (coefficient versus table differences), and the crossover time found by equation or table extension",
  "reveals": "Whether the student can extract the same properties — starting value and rate — from two different representations and put them head to head."
 },
 {
  "id": "S6-36",
  "set": 6,
  "n": 36,
  "strand": "Functions",
  "topic": "Recursive and explicit formulas from a context",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Recursive and explicit formulas from a context — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities; determine an explicit expression or a recursive process from a context)",
  "html": "<p>A homeowner builds a renovation fund: she starts with $\\$200$ already saved and adds $\\$75$ at the end of each week. Let $a_n$ be the amount in the fund after $n$ weeks. (a) Write a recursive definition for the sequence $a_n$. (b) Write an explicit formula for $a_n$. (c) How much is in the fund after 12 weeks? (d) Explain in one sentence why the explicit formula is more useful for part (c).</p>",
  "evidence": "The recursive rule with its starting value, the explicit formula, the 12-week amount with units, and a reason comparing step-by-step versus direct evaluation",
  "reveals": "Whether the student can describe the same growth two ways — as a process and as a direct rule — and choose the right one for a far-off term."
 },
 {
  "id": "S6-37",
  "set": 6,
  "n": 37,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to build a function that models a context)",
  "html": "<p>A carpenter sells garden benches. Revenue from selling $x$ benches is $R(x) = 180x$ dollars, and total cost is $C(x) = 60x + 400$ dollars. (a) Build the profit function $P(x) = R(x) - C(x)$ and simplify it. (b) Find the profit from selling 10 benches. (c) How many benches must be sold to break even? Explain what &quot;break even&quot; means in terms of the profit function.</p>",
  "evidence": "The profit function built by subtraction and simplified, the evaluated profit with units, and the break-even count found from $P(x) = 0$ with a whole-bench interpretation",
  "reveals": "Whether the student builds a new function by operating on two given functions — and reads its zero as a business event."
 },
 {
  "id": "S6-38",
  "set": 6,
  "n": 38,
  "strand": "Functions",
  "topic": "Transformations of functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations of functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $f(x + k)$, and $-f(x)$; find the value of $k$ given the graphs; recognize even and odd functions)",
  "html": "<p>The height of a parabolic garden arch is modeled by $f(x) = -x^2 + 4x$ feet, where $x$ is the horizontal distance from one side, $0 \\le x \\le 4$. A second arch is modeled by $g(x) = -f(x - 2) + 1$. (a) Describe each transformation that maps the graph of $f$ to the graph of $g$. (b) Find the vertex of $f$ and the vertex of $g$. (c) Is $g$ an even function, an odd function, or neither? Justify briefly.</p>",
  "evidence": "The shift, reflection, and vertical move each named with direction and amount, both vertices computed, and an even/odd decision based on symmetry of the shifted graph",
  "reveals": "Whether the student tracks how each algebraic change moves the whole graph — including that a shift destroys the symmetry about the $y$-axis."
 },
 {
  "id": "S6-39",
  "set": 6,
  "n": 39,
  "strand": "Functions",
  "topic": "Finding inverse functions",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding inverse functions — NC.M3.F-BF.4a (find inverse functions; solve an equation of the form $f(x) = c$ for a linear function)",
  "html": "<p>Concrete cures best in mild weather, and a European thermometer on site reads Celsius. The conversion is $F(C) = \\dfrac{9}{5}C + 32$. (a) Find the inverse function $C(F)$ and write it in function notation. (b) Use the inverse to convert $68^\\circ$F to Celsius. (c) State the domain and range of the inverse, and explain how they relate to those of $F$.</p>",
  "evidence": "The inverse derived by swapping and solving, the converted temperature with units, and the domain/range swap stated explicitly",
  "reveals": "Whether the student can *produce* an inverse — reversing a two-step linear rule in the correct order — rather than only recognize one."
 },
 {
  "id": "S6-40",
  "set": 6,
  "n": 40,
  "strand": "Functions",
  "topic": "Reading inverse values",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>A pump drains a flooded basement. The table gives $R(t)$, the gallons of water remaining, after $t$ hours: $t = 0, 1, 2, 3, 4$ correspond to $R(t) = 500, 420, 355, 300, 255$. Define $f(t) = R(t)$. (a) Find $f^{-1}(355)$ and interpret it. (b) Find $f^{-1}(255)$ and interpret it. (c) Explain in words what the input and output of $f^{-1}$ are, and how they differ from those of $f$.</p>",
  "evidence": "Both inverse values read from the table by reversing input and output, each interpreted as a time tied to a water level, and a clear statement of the swapped roles",
  "reveals": "Whether the student understands an inverse as the same relationship read backwards — hours become the answer, gallons become the question."
 },
 {
  "id": "S6-41",
  "set": 6,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle)",
  "html": "<p>A tower crane&#x27;s jib swings through an angle of $150^\\circ$ while repositioning. (a) Convert $150^\\circ$ to radians. (b) Convert $\\dfrac{7\\pi}{4}$ radians to degrees. (c) A point on the unit circle is carried through the $150^\\circ$ swing; what arc length does it travel, and why does the answer not require a radius?</p>",
  "evidence": "Both conversions with the conversion factor shown, and the arc length identified with the radian measure itself because the radius is 1",
  "reveals": "Whether the student understands a radian as a length on the unit circle, not just a number to convert with a memorized factor."
 },
 {
  "id": "S6-42",
  "set": 6,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Unit circle in radian measure",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Unit circle in radian measure — NC.M3.F-TF.2 (use the unit circle to extend trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise around the unit circle)",
  "html": "<p>Use the unit circle to find exact values. (a) Find $\\sin\\dfrac{5\\pi}{6}$ and $\\cos\\dfrac{5\\pi}{6}$, and state the coordinates of the corresponding point on the unit circle. (b) Find $\\sin\\left(-\\dfrac{\\pi}{3}\\right)$ and $\\cos\\left(-\\dfrac{\\pi}{3}\\right)$, explaining how the negative angle is traversed on the unit circle. (c) For each angle, state the quadrant of the terminal side and check that the signs of your values match it.</p>",
  "evidence": "Exact values with the unit-circle coordinates, the clockwise traversal explained for the negative angle, and quadrant/sign consistency stated for both angles",
  "reveals": "Whether the student locates angles in radians on the circle and reads sine and cosine as coordinates — position first, values second."
 },
 {
  "id": "S6-43",
  "set": 6,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena; interpret amplitude, period, and midline in context)",
  "html": "<p>A cement mixer drum has radius 3 ft, and its center is 3 ft above the ground. The drum rotates once every 12 seconds. A bolt on the rim starts at the very top of the drum, and its height above the ground, in feet, $t$ seconds later is modeled by $h(t) = 3 + 3\\cos\\left(\\dfrac{\\pi}{6}t\\right)$. (a) Identify the amplitude, midline, and period, and interpret each for the drum. (b) Find the bolt&#x27;s height after 3 seconds. (c) At what time does the bolt first reach the bottom of the drum?</p>",
  "evidence": "The three parameters named and tied to the drum's radius, axle height, and rotation time, the height at $t = 3$ computed, and the first bottom time found from the cosine reaching $-1$",
  "reveals": "Whether the student reads a cosine model as a physical rotation — size, center height, and cycle time — and locates events within the cycle."
 },
 {
  "id": "S6-44",
  "set": 6,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that base angles of an isosceles triangle are congruent)",
  "html": "<p>A roof truss forms an isosceles triangle $ABC$ with $\\overline{AB} \\cong \\overline{AC}$, where $A$ is the peak and $\\overline{BC}$ is the horizontal base. Let $D$ be the point where the bisector of $\\angle A$ meets $\\overline{BC}$. Prove that the base angles are congruent: $\\angle B \\cong \\angle C$. Your proof should name the congruent triangles and the congruence theorem used.</p>",
  "evidence": "A structured proof: the angle bisector gives congruent angles at $A$, the shared side $\\overline{AD}$, SAS congruence of the two smaller triangles, and the base angles by corresponding parts",
  "reveals": "Whether the student can *construct* the auxiliary line that unlocks a proof and drive the argument through triangle congruence to the target angles."
 },
 {
  "id": "S6-45",
  "set": 6,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that the diagonals of a parallelogram bisect each other)",
  "html": "<p>The rectangular frame of a deck gate is built as a parallelogram $ABCD$ (in order), and its two diagonal braces $\\overline{AC}$ and $\\overline{BD}$ cross at point $E$. Prove that the diagonals bisect each other: $\\overline{AE} \\cong \\overline{CE}$ and $\\overline{BE} \\cong \\overline{DE}$. Your proof should use the parallel sides of the parallelogram and name the congruence theorem used.</p>",
  "evidence": "A structured proof: alternate interior angles from the parallel sides, a pair of opposite sides congruent, ASA congruence of the two triangles formed by the diagonals, and the bisection by corresponding parts",
  "reveals": "Whether the student can chain parallel-line angle facts into a congruence argument — the standard engine for quadrilateral proofs."
 },
 {
  "id": "S6-46",
  "set": 6,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Tangents, radii, and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Tangents, radii, and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords, including that a radius drawn to a point of tangency is perpendicular to the tangent line)",
  "html": "<p>A straight string line is run tangent to a circular concrete column form. The circle has center $O$ and radius 5 ft. The string touches the circle at point $T$ and is staked at point $P$, which is 13 ft from $O$. (a) Explain why $\\overline{OT}$ is perpendicular to the string line at $T$. (b) Find the length of the string from $P$ to $T$. (c) State the theorem about a tangent line and a radius that you used.</p>",
  "evidence": "The perpendicularity justified by the tangent–radius relationship, the string length found with the Pythagorean Theorem in the right triangle, and the theorem named",
  "reveals": "Whether the student recognizes a tangent configuration as a hidden right triangle and deploys the radius-to-tangent fact on sight."
 },
 {
  "id": "S6-47",
  "set": 6,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed and circumscribed circles of triangles and quadrilaterals",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed and circumscribed circles of triangles and quadrilaterals — NC.M3.G-C.3 (construct and describe the inscribed and circumscribed circles of a triangle; use angle relationships in inscribed quadrilaterals)",
  "html": "<p>A quadrilateral window frame $ABCD$ (in order) is inscribed in a circular frame, making it a cyclic quadrilateral. (a) If $m\\angle A = 110^\\circ$, find $m\\angle C$. (b) If $m\\angle B = 3x$ degrees and $m\\angle D = (x + 40)$ degrees, find $x$, $m\\angle B$, and $m\\angle D$. (c) Explain, using intercepted arcs, why opposite angles of an inscribed quadrilateral must be supplementary.</p>",
  "evidence": "The supplementary relationship applied in both parts, the algebra solved for the unknown angles, and an arc-based justification (the two intercepted arcs together make the whole circle)",
  "reveals": "Whether the student knows the cyclic-quadrilateral theorem as a consequence of arcs summing to $360^\\circ$, not as an isolated fact to memorize."
 },
 {
  "id": "S6-48",
  "set": 6,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Sector area and arc length",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Sector area and arc length — NC.M3.G-C.5 (derive the formula for the area of a sector, $A = \\frac{1}{2}r^2\\theta$, and use it; derive and use the arc-length relationship)",
  "html": "<p>A wedge-shaped piece of plywood is cut as a sector of a circle with radius 6 ft and central angle $\\dfrac{2\\pi}{3}$ radians. (a) Using the proportion $\\dfrac{A}{\\pi r^2} = \\dfrac{\\theta}{2\\pi}$, derive the sector-area formula $A = \\dfrac{1}{2}r^2\\theta$. (b) Find the area of the wedge. (c) Find the length of the curved edge (the arc length), which will be covered with trim.</p>",
  "evidence": "The derivation from the proportion of sector to whole circle, the area computed in exact and approximate form with units, and the arc length from $s = r\\theta$",
  "reveals": "Whether the student can rebuild the sector formulas from one proportion — area scales with the fraction of the circle — instead of recalling them blindly."
 },
 {
  "id": "S6-49",
  "set": 6,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle from its diameter",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle from its diameter — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius)",
  "html": "<p>On a patio grid (units in feet), a circular hot tub has a diameter whose endpoints are $(2, 3)$ and $(10, 9)$. (a) Find the center of the tub. (b) Find the radius. (c) Write the equation of the circle that bounds the tub.</p>",
  "evidence": "The center as the midpoint of the diameter, the radius as half the distance between the endpoints, and the standard-form equation with those values substituted",
  "reveals": "Whether the student assembles a circle's equation from raw geometric data — midpoint and distance — instead of only reading one off a finished equation."
 },
 {
  "id": "S6-50",
  "set": 6,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Parabolas from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Parabolas from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>The cross-section of a parabolic solar water-heating trough is a parabola with focus at $(0, 1.5)$ and directrix $y = -1.5$ (units in feet); the vertex is at the origin and the trough opens upward. (a) Write the equation of the parabola. (b) The trough is 4 ft wide, so its edges are at $x = -2$ and $x = 2$. Find the depth of the trough at its edge. (c) Explain in one sentence what the focus location means for how the trough works.</p>",
  "evidence": "The equation in the form $x^2 = 4py$ with $p$ taken from the focus, the edge depth computed by substituting $x = 2$, and a reflection-property explanation of the focus",
  "reveals": "Whether the student connects the focus–directrix definition to the equation's parameter, and can pull a physical measurement (depth) back out of the equation."
 },
 {
  "id": "S6-51",
  "set": 6,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A delivery of gravel forms a cone-shaped pile with diameter 12 ft and height 5 ft. (a) Find the volume of the pile in cubic feet (exact form and approximate). (b) Convert the volume to cubic yards. (c) A dump truck carries 4 cubic yards per load. How many loads are needed to haul the pile away?</p>",
  "evidence": "The cone volume using $\\frac{1}{3}\\pi r^2 h$ with the radius taken from the diameter, the conversion dividing by 27, and the load count rounded up",
  "reveals": "Whether the student applies the one-third factor to the correct base measurement and makes the round-up a purchasing decision requires."
 },
 {
  "id": "S6-52",
  "set": 6,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A deck rests on 8 cylindrical concrete footings. Each footing is poured in a tube form with diameter 1.5 ft and depth 4 ft. (a) Find the volume of concrete in one footing. (b) Find the total volume for all 8 footings, in cubic feet. (c) Concrete is ordered by the cubic yard; convert the total and state a sensible amount to order.</p>",
  "evidence": "The cylinder volume using $\\pi r^2 h$ with the radius halved from the diameter, the total for 8 footings, and the conversion to cubic yards with a practical ordering decision",
  "reveals": "Whether the student scales a unit volume to a whole job and converts into the unit the supplier actually sells."
 },
 {
  "id": "S6-53",
  "set": 6,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross-sections of three-dimensional figures",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross-sections of three-dimensional figures — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross-sections of three-dimensional objects)",
  "html": "<p>A storage shed is shaped like a triangular prism: its two ends are congruent triangles (the front and back faces, showing the roof profile) and its length runs between them. (a) Describe the cross-section made by a slice parallel to the triangular ends. (b) Describe the cross-section made by a horizontal slice (parallel to the ground) through the shed. (c) Describe the cross-section made by a vertical slice that runs along the length of the shed through the roof ridge. (d) For each slice, state whether every slice of that type has the same size, and why.</p>",
  "evidence": "The three cross-section shapes named correctly (triangles and rectangles in the right places), with a uniformity judgment tied to the prism's constant profile along its length",
  "reveals": "Whether the student can mentally slice a solid in different directions and predict the faces — spatial reasoning, not formula recall."
 },
 {
  "id": "S6-54",
  "set": 6,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A cylindrical storage silo on a farm property has radius 4 ft and wall height 12 ft, topped by a hemispherical dome of the same radius. The outside (walls plus dome, not the floor) will be painted. (a) Model the surface with geometric shapes and find the total area to be painted. (b) One gallon of paint covers 350 ft². How many gallons should be bought?</p>",
  "evidence": "The lateral area of the cylinder and the surface area of a hemisphere computed separately and added, the floor excluded with a reason, and the gallon count rounded up",
  "reveals": "Whether the student decomposes a composite solid into standard surfaces — including knowing a hemisphere carries half a sphere's area — and buys for the real total."
 },
 {
  "id": "S6-55",
  "set": 6,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A granite countertop slab measures 8 ft long, 2 ft wide, and 0.1 ft thick. Granite has a density of about 168 pounds per cubic foot. (a) Find the volume of the slab. (b) Find the weight of the slab. (c) Two installers can safely carry 300 lb together. Can they carry the slab? Justify with your numbers.</p>",
  "evidence": "The slab's volume from its three dimensions, the weight as density times volume with units carried through, and a comparison decision against the carrying limit",
  "reveals": "Whether the student uses density as a conversion between size and weight — the modeling move behind every material estimate."
 },
 {
  "id": "S6-56",
  "set": 6,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems; maximizing area under constraints",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems; maximizing area under constraints — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including maximizing area under constraints)",
  "html": "<p>A rectangular garden will be built against the back wall of a house, so fencing is needed on only three sides. The homeowner has 72 ft of fencing. Let $x$ be the length (in feet) of each side perpendicular to the house. (a) Write the garden&#x27;s area $A(x)$ as a function of $x$. (b) Use a table of values or graphing technology to find the dimensions that maximize the area. (c) State the maximum area. (d) Explain why both very small and very large values of $x$ give poor gardens.</p>",
  "evidence": "The area function built from the fencing constraint, a table or graph showing the maximum at an interior value of $x$, the optimal dimensions and maximum area with units, and a trade-off explanation",
  "reveals": "Whether the student can optimize a design numerically under a fixed-resource constraint — balancing the two competing dimensions — without calculus."
 },
 {
  "id": "S6-57",
  "set": 6,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Inference from random samples; sampling bias",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Inference from random samples; sampling bias — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population)",
  "html": "<p>A home-repair company wants to estimate the percent of all its customers from the past year who were satisfied with their jobs. It considers two methods. <strong>Method 1:</strong> leave survey cards on the counter for customers to fill out and return if they wish. <strong>Method 2:</strong> randomly select 100 customers from the year&#x27;s job list and phone them with the same questions. (a) Identify the population in this study. (b) Which method produces a sample more likely to represent the population, and why? (c) Describe the bias in the other method: which customers are over-represented, and how would that distort the estimate? (d) State the inference the company can justify if it uses the better method.</p>",
  "evidence": "The population named as all of the past year's customers, the random-selection method chosen with a representativeness argument, the voluntary-response bias described with its direction of distortion, and a population-level inference statement",
  "reveals": "Whether the student knows an estimate is only as good as its sample — self-selected responses measure enthusiasm, not satisfaction."
 },
 {
  "id": "S6-58",
  "set": 6,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a proportion; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a proportion; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A city inspects homes built before 1978 for lead-paint hazards. In a random sample of 400 such homes, 96 have a lead-paint hazard. To build a margin of error, the city runs a simulation of random sampling: the simulated sample proportions have standard deviation $0.021$. (a) Find the sample proportion $\\hat{p}$. (b) Use the simulation to develop a margin of error (about two standard deviations) and an interval of plausible values for the true percent of all pre-1978 homes with a hazard. (c) Interpret the interval in context: what can the city say, and what can it not say?</p>",
  "evidence": "The sample proportion computed from the counts, the margin of error as roughly two simulation standard deviations, the plausible interval in percent form, and an interpretation that claims a range for the population — not certainty about any single home",
  "reveals": "Whether the student treats a sample proportion as the center of a plausible range built from sampling variability, not as the population's exact value."
 },
 {
  "id": "S6-59",
  "set": 6,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments from a randomized experiment using simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments from a randomized experiment using simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A builder compares two deck sealants. Twenty boards are randomly assigned: 10 are treated with Sealant A and 10 with Sealant B, and all are soaked and weighed. The Sealant A boards absorbed an average of 3.2 grams less water than the Sealant B boards. To judge significance, the builder runs a simulation: in 500 random reassignments of the boards to the two sealants (assuming the sealants make no difference), a difference in mean absorption of 3.2 grams or more occurred 190 times. (a) What proportion of the simulations produced a difference at least as large as the observed one? (b) Using a 5% significance standard, is the observed difference statistically significant? (c) State the conclusion the builder should draw, in context, and what the builder should <em>not</em> claim.</p>",
  "evidence": "The simulated proportion computed from 190 of 500, comparison against the 5% standard leading to \"not significant,\" and a conclusion that the difference is plausibly due to chance — without claiming the sealants are identical",
  "reveals": "Whether the student can accept a null result: a real-looking difference that random assignment alone produces this often is not evidence of a better product."
 },
 {
  "id": "S6-60",
  "set": 6,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data; identify flaws in study design and conclusions)",
  "html": "<p>A window company&#x27;s advertisement states: &quot;In a survey of 25 homeowners at a home show who had just purchased our windows, 92% said their energy bills went down after installation — proof that our windows cut energy bills!&quot; (a) Identify at least three distinct problems with using this survey to support the claim. (b) Explain why &quot;bills went down&quot; does not by itself establish that the windows caused the decrease. (c) Describe a study design that could support a causal claim about the windows and energy bills.</p>",
  "evidence": "At least three distinct flaws named (such as the tiny sample, the self-selected buyers-only sample, the leading setting, or the absence of a comparison group), a confounding explanation for falling bills, and a proposed design with random assignment or a control group",
  "reveals": "Whether the student reads a statistic as the output of a design — and audits the design before believing the number."
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
  "id": "S7-21",
  "set": 7,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Adding and subtracting complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Adding and subtracting complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers)",
  "html": "<p>A game audio engine represents two sound waves as complex numbers. The bass wave is $S_1 = 5 + 3i$ and a synth wave is $S_2 = 2 - 7i$, where the real part is the in-phase component and the imaginary part is the out-of-phase component of each signal. (a) Find the combined signal $S_1 + S_2$ when the two waves play together. (b) Find the difference signal $S_1 - S_2$, which the engine uses to isolate the bass. (c) A third wave $S_3$ is added so that $S_1 + S_3 = 9 + i$. Find $S_3$.</p>",
  "evidence": "Component-by-component addition and subtraction of the real and imaginary parts, all three results written in $a + bi$ form, and the unknown signal in part (c) found by undoing the addition",
  "reveals": "Whether the student treats a complex number as a two-component quantity and operates on each component correctly, including solving for an unknown addend."
 },
 {
  "id": "S7-22",
  "set": 7,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Extending polynomial identities to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Extending polynomial identities to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers; factor a sum of squares)",
  "html": "<p>A graphics shader uses the polynomial $9x^2 + 4$ to compute a lighting coefficient. (a) Use the identity $a^2 + b^2 = (a + bi)(a - bi)$ to factor $9x^2 + 4$ over the complex numbers. (b) Find all solutions of $9x^2 + 4 = 0$. (c) Explain why the graph of $y = 9x^2 + 4$ never crosses the $x$-axis, and connect that fact to your answers in parts (a) and (b).</p>",
  "evidence": "A factorization with complex conjugate factors, verification by expansion, the pair of imaginary solutions, and an explanation linking nonreal roots to the absence of $x$-intercepts",
  "reveals": "Whether the student sees a sum of squares as factorable once imaginary numbers are allowed, rather than declaring it \"not factorable,\" and ties algebraic roots to graphical features."
 },
 {
  "id": "S7-23",
  "set": 7,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Interpreting expressions in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting expressions in context — NC.M3.A-SSE.1 (interpret parts of an expression, such as terms, factors, and coefficients, in terms of its context)",
  "html": "<p>A game studio&#x27;s monthly server cost, in dollars, is modeled by $C(n) = 0.02n^2 + 15n + 300$, where $n$ is the number of players online at peak time, measured in hundreds. (a) Interpret the meaning of the constant term $300$ in context. (b) Interpret the term $15n$, including the units of the coefficient $15$. (c) Interpret the term $0.02n^2$, and explain why a quadratic term might appear in a server cost model at all. (d) Find the predicted monthly cost when $5{,}000$ players are online at peak time.</p>",
  "evidence": "A contextual reading of each of the three terms with correct units, a reason tied to player-to-player interaction load for the quadratic term, and a correctly substituted evaluation using $n = 50$",
  "reveals": "Whether the student can read an expression as a story about a situation — fixed costs, per-player costs, and interaction costs — instead of seeing only symbols."
 },
 {
  "id": "S7-24",
  "set": 7,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Remainder and Factor Theorems",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder and Factor Theorems — NC.M3.A-APR.2 (know and apply the Remainder Theorem; use the Factor Theorem to find values and factors)",
  "html": "<p>A game physics engine uses the polynomial $P(x) = x^3 - 3x^2 + kx - 4$, where $x$ is a tuning parameter and $k$ is a constant the designers can adjust. The designers need $x - 2$ to be a factor of $P(x)$ so that a known calibration setting works exactly. (a) Use the Factor Theorem to find the value of $k$. (b) With that value of $k$, factor $P(x)$ completely. (c) Find all solutions of $P(x) = 0$, and state which of them could be used as a real tuning parameter.</p>",
  "evidence": "Setting $P(2) = 0$ and solving for $k$, a division or grouping step producing the remaining quadratic factor, the quadratic formula applied to that factor, and a context-based comment on the nonreal solutions",
  "reveals": "Whether the student can run the Remainder Theorem \"backwards\" — using a required root to determine an unknown coefficient — and then carry the factorization through to all roots."
 },
 {
  "id": "S7-25",
  "set": 7,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Zeros of polynomials and graph behavior",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros of polynomials and graph behavior — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph of the function)",
  "html": "<p>A mobile game&#x27;s engagement score at difficulty setting $x$ is modeled by $f(x) = (x + 2)(x - 1)(x - 4)$. (a) Find the zeros of $f$ and the multiplicity of each zero. (b) Describe the end behavior of the graph of $f$. (c) Find the $y$-intercept. (d) State the intervals of $x$ on which the engagement score is positive, and explain how the multiplicities determine the sign pattern.</p>",
  "evidence": "The three zeros with multiplicity 1 each, end behavior from the leading term $x^3$, the $y$-intercept from substitution, and a sign analysis showing the graph crosses at each zero",
  "reveals": "Whether the student can assemble zeros, multiplicity, end behavior, and intercepts into a coherent picture of a cubic's graph without plotting points one by one."
 },
 {
  "id": "S7-26",
  "set": 7,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Dividing rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Dividing rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>A streaming service&#x27;s compression software produces the ratio $\\dfrac{x^2 - 25}{x^2 + 3x} \\div \\dfrac{x - 5}{x^2 - 9}$, where $x$ is a quality setting. (a) Perform the division and simplify the result to a single rational expression in lowest terms. (b) State all values of $x$ that must be excluded from the domain of the original expression, and identify which part of the expression produces each exclusion.</p>",
  "evidence": "Conversion of the division to multiplication by the reciprocal, factoring of all numerators and denominators, cancellation of common factors, and a complete excluded-value list drawn from both denominators and the divisor's numerator",
  "reveals": "Whether the student manages the full bookkeeping of a rational division — especially the easily missed restriction coming from the divisor's numerator."
 },
 {
  "id": "S7-27",
  "set": 7,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable, and give examples showing how extraneous solutions may arise)",
  "html": "<p>A VR headset&#x27;s proximity sensor is calibrated using the equation $\\sqrt{x + 11} = x - 1$, where $x$ is a sensor offset in centimeters. (a) Solve the equation algebraically. (b) Check each candidate solution in the original equation and identify any extraneous solution. (c) State the restriction on $x$ that the right-hand side of the original equation imposes, and explain how that restriction predicts the extraneous solution before any checking.</p>",
  "evidence": "Squaring both sides, solving the resulting quadratic, explicit substitution checks of both candidates, and the observation that the right side must be nonnegative because it equals a principal square root",
  "reveals": "Whether the student understands extraneous solutions as a consequence of squaring — and can anticipate them from the equation's structure rather than treating the check as a ritual."
 },
 {
  "id": "S7-28",
  "set": 7,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Intersections of graphs and equations",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Intersections of graphs and equations — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$; solve systems consisting of a linear and a quadratic equation)",
  "html": "<p>A game studio models its monthly rendering cost (in thousands of dollars) for a cloud-rendered game as $C(x) = x^2 - 4x + 7$ and its monthly revenue (in thousands of dollars) as $R(x) = 2x - 1$, where $x$ is the average number of concurrent players, in thousands. (a) Find all points where the graphs of $C$ and $R$ intersect, and explain what the equation $C(x) = R(x)$ has to do with those points. (b) Between which player counts is the game profitable, and how can you tell from the two functions? (c) Explain why these break-even points are the solutions of $C(x) = R(x)$ rather than of either function set equal to zero.</p>",
  "evidence": "The intersection points found by setting the expressions equal and solving the quadratic, a profitability interval justified by comparing the functions between the intersections, and a verbal explanation of the intersection–solution connection",
  "reveals": "Whether the student reads a system of a line and a parabola as a break-even analysis with a profitable region, not just two isolated points."
 },
 {
  "id": "S7-29",
  "set": 7,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas with rational expressions",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas with rational expressions — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>Two network cables run in parallel between a gaming PC and a router, and their combined effective resistance follows the parallel formula $\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$, where all resistances are in ohms. (a) Rearrange the formula to solve for $R_2$ in terms of $R$ and $R_1$, showing each step. (b) If the combined resistance is $R = 6$ ohms and the first cable has $R_1 = 10$ ohms, find $R_2$. (c) Explain why $R_1$ must be larger than $R$ for a positive value of $R_2$ to exist, using your rearranged formula.</p>",
  "evidence": "Combining the fractions or clearing denominators to isolate $R_2$, a simplified closed form for $R_2$, correct substitution for the numerical case, and a sign/denominator argument for part (c)",
  "reveals": "Whether the student can rearrange a formula where the target variable appears inside a denominator — a step beyond the linear and square-root rearrangements — and interpret the resulting denominator."
 },
 {
  "id": "S7-30",
  "set": 7,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of quadratic equations",
  "standards": [
   "NC.M3.N-CN.9",
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Complex solutions of quadratic equations — NC.M3.N-CN.9 (find all complex solutions of polynomial equations) with NC.M3.N-CN.8 (extend polynomial identities to the complex numbers)",
  "html": "<p>A signal-processing filter in a game&#x27;s audio engine is designed using the equation $x^2 - 6x + 25 = 0$. (a) Solve the equation using the quadratic formula, and write the solutions in $a + bi$ form. (b) Verify that your two solutions are complex conjugates, and find their sum and product. (c) Explain how the sum and product you found relate to the coefficients of the original equation.</p>",
  "evidence": "A discriminant computed as a negative number, the square root of a negative number rewritten with $i$, the conjugate pair, and sum/product checks matched against $-b/a$ and $c/a$",
  "reveals": "Whether the student handles a negative discriminant fluently and recognizes the conjugate-pair structure and the coefficient relationships it must satisfy."
 },
 {
  "id": "S7-31",
  "set": 7,
  "n": 31,
  "strand": "Functions",
  "topic": "The function concept from tables",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "The function concept from tables — NC.M3.F-IF.1 (understand that a function assigns to each element of the domain exactly one element of the range; use function notation)",
  "html": "<p>A game&#x27;s matchmaking system logs the duration, in minutes, of matches at various lobby sizes. The log shows: $(4, 12)$, $(6, 15)$, $(6, 18)$, $(8, 20)$, $(10, 24)$, where the first coordinate is the number of players in the lobby and the second is the match duration. (a) Does this relation represent a function of lobby size? Justify your answer using the definition of a function. (b) State the domain and range of the relation. (c) The studio wants duration to be a function of lobby size. Describe one change to how data is recorded that would guarantee this.</p>",
  "evidence": "Identification of the repeated input with two different outputs as the reason the relation is not a function, correct domain and range sets, and a recording change (such as logging average duration per lobby size) that removes the conflict",
  "reveals": "Whether the student applies the \"exactly one output\" definition to real logged data and can diagnose why raw event logs often fail it."
 },
 {
  "id": "S7-32",
  "set": 7,
  "n": 32,
  "strand": "Functions",
  "topic": "Evaluating and interpreting function notation",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Evaluating and interpreting function notation — NC.M3.F-IF.2 (use function notation, evaluate functions for inputs in their domains, and interpret statements that use function notation in terms of a context)",
  "html": "<p>A game update downloads in stages. The amount of data remaining to download, in megabytes, after $t$ minutes is $D(t) = 960 - 80t$. (a) Find $D(5)$ and interpret it in context, including units. (b) Find the value of $t$ for which $D(t) = 240$, and interpret it. (c) Find how long the full download takes, and explain which feature of the function you used.</p>",
  "evidence": "A substitution and evaluation for part (a) with a contextual sentence, an equation solved for part (b) with its meaning stated, and the download time obtained by setting the function equal to zero",
  "reveals": "Whether the student moves fluently in both directions — input to output and output back to input — and attaches meaning and units to each result."
 },
 {
  "id": "S7-33",
  "set": 7,
  "n": 33,
  "strand": "Functions",
  "topic": "Key features of functions from tables",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of functions from tables — NC.M3.F-IF.4 (interpret key features of graphs and tables in terms of the quantities, and sketch graphs showing key features)",
  "html": "<p>After a major update launches, a game&#x27;s concurrent player count (in thousands) is recorded every 3 hours: at $t = 0, 3, 6, 9, 12, 15, 18, 21, 24$ hours, the counts are $8, 15, 26, 22, 19, 28, 35, 31, 24$. (a) Identify the maximum and minimum values in the table and when they occur. (b) State the intervals of time over which the player count is increasing and the intervals over which it is decreasing. (c) Interpret the value at $t = 0$ as an intercept in context. (d) Find the average rate of change of the player count over the full 24 hours, with units, and explain why it does not tell the whole story of the day.</p>",
  "evidence": "Extrema with their times, increasing and decreasing intervals read from consecutive table values, the starting count interpreted as a baseline, and an average rate of change computed from the endpoints with a comment about the rises and falls it hides",
  "reveals": "Whether the student extracts the full feature set — extrema, monotonic intervals, intercept, average rate — from tabular data and interprets each feature in the situation."
 },
 {
  "id": "S7-34",
  "set": 7,
  "n": 34,
  "strand": "Functions",
  "topic": "Piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Piecewise-defined functions — NC.M3.F-IF.7b (graph piecewise-defined functions, including step functions and absolute value functions)",
  "html": "<p>A gaming lounge charges for PC time using the cost function<br>$$C(h) = \\begin{cases} 6h &amp; 0 \\le h \\le 2 \\\\ 12 + 4(h - 2) &amp; 2 &lt; h \\le 5 \\\\ 24 + 2(h - 5) &amp; h &gt; 5 \\end{cases}$$<br>where $h$ is hours played and $C$ is cost in dollars. (a) Sketch the graph of $C$, showing the endpoints of each piece and confirming the pieces join. (b) Find $C(1)$, $C(4)$, and $C(7)$, stating which piece you used for each. (c) Explain in context why the per-hour rate decreases from piece to piece.</p>",
  "evidence": "A three-segment graph with correct endpoints and joining values, three evaluations each matched to the correct piece by its domain interval, and a bulk-discount interpretation of the decreasing rates",
  "reveals": "Whether the student respects the domain restrictions that define each piece — in graphing, evaluating, and interpreting — rather than treating the function as a single rule."
 },
 {
  "id": "S7-35",
  "set": 7,
  "n": 35,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when suitable factorizations are available, and showing end behavior)",
  "html": "<p>An audio equalizer&#x27;s gain, in decibels, across a frequency-band setting $x$ is modeled by $f(x) = x^3 - 2x^2 - 8x$. (a) Factor $f(x)$ completely and find its zeros. (b) Describe the end behavior of the graph. (c) Sketch the graph of $f$, showing the zeros and the general shape, and state the $y$-intercept. (d) On which intervals of $x$ is the gain positive (a boost), according to the model?</p>",
  "evidence": "A complete factorization with a common factor extracted first, the three zeros, end behavior from the leading term, a sketch consistent with the zeros and end behavior, and sign intervals for the boost regions",
  "reveals": "Whether the student combines factoring, zeros, and end behavior into an accurate global sketch of a cubic rather than a point-by-point plot."
 },
 {
  "id": "S7-36",
  "set": 7,
  "n": 36,
  "strand": "Functions",
  "topic": "Recursive and explicit formulas for sequences",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Recursive and explicit formulas for sequences — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities; write arithmetic and geometric sequences both recursively and with an explicit formula)",
  "html": "<p>In a boss-rush game, a combo weapon deals $40$ damage on the first hit. Each subsequent hit in the combo deals $1.25$ times the damage of the previous hit. (a) Write a recursive formula for the damage $a_n$ of the $n$-th hit. (b) Write an explicit formula for $a_n$. (c) Find the damage dealt by the 8th hit, to the nearest whole unit, and explain which formula is more efficient for this computation and why.</p>",
  "evidence": "A recursive rule with the initial value stated, an explicit geometric formula, the 8th-term value computed from the explicit form, and a comment comparing the two forms' efficiency",
  "reveals": "Whether the student recognizes constant-ratio growth in a game mechanic and can move between recursive and explicit descriptions of it."
 },
 {
  "id": "S7-37",
  "set": 7,
  "n": 37,
  "strand": "Functions",
  "topic": "Combining functions by multiplication",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining functions by multiplication — NC.M3.F-BF.1b (combine standard function types by adding, subtracting, multiplying, and dividing)",
  "html": "<p>A small game studio&#x27;s weekly audience is growing: the number of players in week $t$ is $P(t) = 200 + 30t$, and the average weekly spending per player, in dollars, is $S(t) = 8 - 0.1t$ (spending slowly declines as the audience broadens). (a) Build the weekly revenue function $R(t) = P(t) \\cdot S(t)$ and expand it into a single polynomial. (b) Find $R(4)$ and interpret it, with units. (c) State a reasonable domain for $S(t)$ in context, and explain what happens to the revenue model outside that domain.</p>",
  "evidence": "The product of a linear and a linear function expanded to a quadratic, an evaluation at $t = 4$ interpreted as weekly dollars, and a domain restriction based on spending staying nonnegative",
  "reveals": "Whether the student sees revenue as a product of two changing quantities and understands that a combined model inherits the restrictions of both parts."
 },
 {
  "id": "S7-38",
  "set": 7,
  "n": 38,
  "strand": "Functions",
  "topic": "Verifying inverses by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverses by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A game exchanges coins for gems using the rule $g(c) = 4c + 8$, where $c$ is coins spent and $g$ is gems received (the $+8$ is a bonus). A player claims the exchange can be undone by $h(g) = \\dfrac{g - 8}{4}$. (a) Verify the claim by computing $h(g(c))$ and simplifying. (b) Verify it the other way by computing $g(h(g))$ and simplifying. (c) State what the two computations together prove, and use $h$ to find how many coins a player spent if they received $108$ gems.</p>",
  "evidence": "Both compositions carried through to the identity, an explicit statement that the pair are inverses, and the inverse applied to a specific gem count",
  "reveals": "Whether the student treats \"inverse\" as a claim that must be verified in both directions by composition, not assumed from the appearance of the formula."
 },
 {
  "id": "S7-39",
  "set": 7,
  "n": 39,
  "strand": "Functions",
  "topic": "Reading inverse values from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or a table, given that the function has an inverse)",
  "html": "<p>The experience points (XP) required to complete each level of a game are given by the function $f$, where $f(\\text{level}) = \\text{XP required}$: $f(1) = 120$, $f(2) = 300$, $f(3) = 540$, $f(4) = 900$, $f(5) = 1500$. (a) Find $f(4)$ and state what it means. (b) A player has earned exactly $540$ XP toward a level. Which level are they completing? Write your answer using inverse function notation. (c) Find $f^{-1}(300)$ and interpret it. (d) Explain why $f^{-1}(200)$ cannot be determined from the information given.</p>",
  "evidence": "A table lookup for the forward value, inverse values obtained by reversing the table's roles, correct $f^{-1}$ notation, and recognition that an output value absent from the table has no determinable inverse value",
  "reveals": "Whether the student understands an inverse as a role reversal of the same data — and recognizes the limits of what a finite table can tell you."
 },
 {
  "id": "S7-40",
  "set": 7,
  "n": 40,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express as a logarithm the solution to $ab^{ct} = d$ and evaluate using technology)",
  "html": "<p>In a cybersecurity class simulation, a harmless test virus spreads through a lab network: the number of infected devices after $t$ hours is $N(t) = 25 \\cdot 3^t$. (a) Express, as a logarithm, the exact time at which $10{,}000$ devices are infected. (b) Evaluate that time to the nearest hundredth of an hour, and also give it in hours and minutes. (c) Explain why a logarithm — rather than repeated division or guessing — is the natural tool for solving this equation.</p>",
  "evidence": "The equation isolated to $3^t = 400$, the solution written as a logarithm, a numerical evaluation with a unit conversion to hours and minutes, and a conceptual explanation of logarithms as inverses of exponentials",
  "reveals": "Whether the student can solve for an unknown exponent exactly and approximately, and articulate why the logarithm is the inverse operation that does it."
 },
 {
  "id": "S7-41",
  "set": 7,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure as arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure as arc length — NC.M3.F-TF.1 (understand radian measure of an angle; the length of the arc on the unit circle subtended by the angle is the radian measure)",
  "html": "<p>A VR headset&#x27;s yaw sensor reports that a player&#x27;s head turn subtends an arc of length $2.4$ units on a unit circle centered at the sensor&#x27;s rotation axis. (a) State the radian measure of the head turn, and explain why the arc length on a unit circle is the radian measure. (b) Convert the angle to degrees, to the nearest tenth. (c) A second turn measures $\\dfrac{3\\pi}{4}$ radians. Which turn is larger, and by how many degrees?</p>",
  "evidence": "The radian measure read directly from the unit-circle arc length with a definitional explanation, a radians-to-degrees conversion, and a comparison of the two turns made in a common unit",
  "reveals": "Whether the student understands radian measure definitionally — as an arc length — and converts in the radians-to-degrees direction, not only the reverse."
 },
 {
  "id": "S7-42",
  "set": 7,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Trigonometric functions on the unit circle",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Trigonometric functions on the unit circle — NC.M3.F-TF.2 (explain how the unit circle enables the extension of trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise)",
  "html": "<p>A racing game&#x27;s joystick points in the direction of the angle $\\theta = \\dfrac{4\\pi}{3}$ on a unit circle, measured from the positive $x$-axis. (a) Find the exact coordinates of the point where the joystick&#x27;s direction meets the unit circle. (b) Find $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$ exactly, and state the quadrant of the terminal side with a sign justification for each value. (c) Find $\\sin(\\theta + 2\\pi)$ and explain, using the unit circle, why it must equal $\\sin\\theta$.</p>",
  "evidence": "Coordinates identified as $(\\cos\\theta, \\sin\\theta)$ with exact values, the tangent computed as a ratio, quadrant-based sign reasoning, and a periodicity explanation based on a full revolution returning to the same point",
  "reveals": "Whether the student grounds trig values in unit-circle geometry — coordinates, quadrant signs, and periodicity — instead of relying on calculator approximations."
 },
 {
  "id": "S7-43",
  "set": 7,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena with cosine",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena with cosine — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline)",
  "html": "<p>A rotating radar beacon in a strategy game sweeps the map. The signal strength at a fixed watchtower, $t$ seconds after the beacon points directly at the tower, is $S(t) = 3\\cos\\left(\\dfrac{\\pi}{4}t\\right) + 5$, in signal units. (a) Identify the amplitude, midline, and period of $S$, and interpret each for the beacon. (b) Find the maximum and minimum signal strengths. (c) Find $S(2)$ and $S(4)$, and explain what is happening with the beacon at each of those times.</p>",
  "evidence": "Amplitude, midline, and period extracted from the model with contextual interpretations, extrema computed from midline $\\pm$ amplitude, and two evaluations interpreted as the beacon sweeping past and away from the tower",
  "reveals": "Whether the student reads a shifted cosine model as a physical sweep — strongest when aligned, weakest when opposite — and connects evaluation points to positions in the cycle."
 },
 {
  "id": "S7-44",
  "set": 7,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radii and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Radii and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; a radius perpendicular to a chord bisects the chord)",
  "html": "<p>In a game map, a circular pond has a straight footbridge across it. The bridge is a chord of the pond&#x27;s circular edge, the bridge is $24$ meters long, and the perpendicular distance from the pond&#x27;s center to the bridge is $5$ meters. (a) Find the radius of the pond, using the theorem about a radius (or line from the center) perpendicular to a chord. (b) Find the diameter of the pond. (c) State the theorem you used and explain why it lets you form a right triangle in this situation.</p>",
  "evidence": "The chord split into two $12$-meter segments by the perpendicular from the center, a Pythagorean computation for the radius, the doubled diameter, and a statement of the bisecting theorem",
  "reveals": "Whether the student converts a chord-and-distance description into the standard right-triangle configuration rather than guessing at the radius."
 },
 {
  "id": "S7-45",
  "set": 7,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed quadrilaterals",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed quadrilaterals — NC.M3.G-C.3 (construct the inscribed and circumscribed circles of a triangle; prove properties of angles for a quadrilateral inscribed in a circle)",
  "html": "<p>A four-sided stage platform in an esports arena is inscribed in a circle, with vertices $A$, $B$, $C$, $D$ in order on the circle. The measure of $\\angle A$ is $(3x + 10)^\\circ$ and the measure of the opposite angle $\\angle C$ is $(2x + 30)^\\circ$. (a) Find $x$, stating the theorem about opposite angles of an inscribed quadrilateral that you use. (b) Find the measures of $\\angle A$ and $\\angle C$. (c) If $\\angle B = 65^\\circ$, find $\\angle D$ and justify your answer.</p>",
  "evidence": "A supplementary equation for the opposite angles, the solved value of $x$, both angle measures, and the second opposite pair handled with the same theorem",
  "reveals": "Whether the student recognizes a cyclic quadrilateral from its description and applies the supplementary-opposite-angles property in both directions."
 },
 {
  "id": "S7-46",
  "set": 7,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and sector area — NC.M3.G-C.5 (derive using similarity the fact that the length of the arc intercepted by an angle is proportional to the radius; define radian measure; derive and use the sector area formula)",
  "html": "<p>A battle-royale game&#x27;s circular map has radius $40$ meters. A wedge-shaped bonus zone is a sector of the circle with central angle $72^\\circ$. (a) Find the exact arc length of the zone&#x27;s outer edge, and an approximation to the nearest tenth of a meter. (b) Find the exact area of the bonus zone, and an approximation to the nearest tenth of a square meter. (c) What fraction of the whole map&#x27;s area is the bonus zone? Explain using the central angle.</p>",
  "evidence": "The angle expressed as a fraction of a full turn, arc length and sector area computed from circumference and area by that fraction, exact forms in terms of $\\pi$ plus approximations, and the area fraction matched to the angle fraction",
  "reveals": "Whether the student derives sector quantities from proportionality to the whole circle rather than memorizing disconnected formulas."
 },
 {
  "id": "S7-47",
  "set": 7,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving the equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Deriving the equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius)",
  "html": "<p>A game development studio places a Wi-Fi access point at the point $(-2, 5)$ on a floor-plan coordinate grid (units in meters). Its signal reaches $6$ meters in every direction. (a) Derive the equation of the circle that bounds the coverage region, starting from the distance formula. (b) A programmer&#x27;s desk is at $(2, 2)$. Determine whether the desk is within coverage, justifying your answer by substituting into your equation (or comparing distances). (c) A second desk at $(-2, 12)$ — inside or outside? Justify.</p>",
  "evidence": "The standard-form equation built from the center and radius via the distance relationship, two point tests evaluated against the radius squared, and inside/outside conclusions tied to the comparisons",
  "reveals": "Whether the student can generate a circle equation from geometric givens — the forward direction — and use it as a membership test for points."
 },
 {
  "id": "S7-48",
  "set": 7,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Parabolas from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Parabolas from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A satellite dish used to receive a game broadcast is a paraboloid whose cross section is a parabola with focus at $(0, 3)$ and directrix the line $y = -3$ (units in meters). (a) Find the equation of the parabola, showing how the focus and directrix determine it. (b) The dish&#x27;s receiver must be mounted at the focus. State its location and explain why the focus is the right spot, in terms of the parabola&#x27;s reflection property. (c) The dish is built $12$ meters wide. Find the depth of the dish at its rim.</p>",
  "evidence": "The vertex located midway between focus and directrix, the value of $p$ identified, the equation written in the form $x^2 = 4py$, and the rim depth found by evaluating at half the width",
  "reveals": "Whether the student derives a parabola's equation from its defining geometric data rather than fitting a generic quadratic."
 },
 {
  "id": "S7-49",
  "set": 7,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the base angles theorem: base angles of an isosceles triangle are congruent)",
  "html": "<p><strong>Proof.</strong> A game studio&#x27;s triangular logo has vertices $A$, $B$, and $C$, with the two equal sides $AB$ and $AC$ meeting at the top vertex $A$, and $BC$ as the base. From $A$, a segment is drawn to point $D$ on $BC$ so that $\\overrightarrow{AD}$ bisects $\\angle A$ (that is, $\\angle BAD = \\angle CAD$). Prove that the base angles are congruent: $\\angle B = \\angle C$. Your proof should use a triangle congruence theorem and the fact that corresponding parts of congruent triangles are congruent.</p>",
  "evidence": "A structured proof (two-column or paragraph) with reasons: the equal sides given, the bisected angle by construction, the shared side by the reflexive property, SAS congruence of the two smaller triangles, and CPCTC for the base angles",
  "reveals": "Whether the student can choose and deploy a congruence argument — manufacturing two triangles from one with an auxiliary segment — rather than asserting the symmetry is \"obvious.\""
 },
 {
  "id": "S7-50",
  "set": 7,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that the diagonals of a parallelogram bisect each other)",
  "html": "<p><strong>Proof.</strong> On a strategy game&#x27;s map, a quadrilateral arena $ABCD$ (vertices in order) is a parallelogram: $AB \\parallel CD$ and $AD \\parallel BC$. The two diagonals $\\overline{AC}$ and $\\overline{BD}$ are drawn, intersecting at point $E$. Prove that the diagonals bisect each other: $AE = EC$ and $BE = ED$. Your proof should use alternate interior angles from the parallel sides, the theorem that opposite sides of a parallelogram are congruent, and a triangle congruence theorem.</p>",
  "evidence": "A structured proof (two-column or paragraph) with reasons: two pairs of alternate interior angles from the parallel sides, opposite sides congruent, ASA congruence of $\\triangle ABE$ and $\\triangle CDE$, and CPCTC yielding both bisection statements",
  "reveals": "Whether the student can chain parallel-line angle relationships into a congruence proof — the standard engine for parallelogram theorems — instead of measuring or assuming the result."
 },
 {
  "id": "S7-51",
  "set": 7,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A cone-shaped speaker horn at an esports event has a circular opening with radius $8$ inches and a depth (height) of $12$ inches. (a) Find the exact volume of the cone, and an approximation to the nearest tenth of a cubic inch. (b) The horn is a hollow shell, but the designer first models it as a solid to estimate material. If the same opening and depth were instead a cylinder, how many times the cone&#x27;s volume would the cylinder have? Answer using the volume formulas, not just the numbers.</p>",
  "evidence": "The cone volume computed from $V = \\tfrac{1}{3}\\pi r^2 h$ in exact and approximate form, and the factor relating cone to cylinder volume justified from the formulas' structure",
  "reveals": "Whether the student applies the cone formula accurately and understands the $\\tfrac{1}{3}$ as a structural relationship to the cylinder, not an arbitrary detail."
 },
 {
  "id": "S7-52",
  "set": 7,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A gaming café sells a &quot;potion&quot; drink in a cylindrical bottle with radius $3$ cm and height $11$ cm, filled to the top. (a) Find the exact volume of the bottle, and an approximation to the nearest tenth of a cubic centimeter. (b) Convert the volume to milliliters ($1\\ \\text{cm}^3 = 1\\ \\text{mL}$) and state how the café should label the bottle&#x27;s contents, to the nearest $10$ mL. (c) The café sells $45$ bottles per day. Find the total volume of potion sold per day, in liters, to the nearest tenth.</p>",
  "evidence": "The cylinder volume from $V = \\pi r^2 h$ in exact and approximate form, a unit conversion to milliliters with sensible label rounding, and a scaled daily total converted to liters",
  "reveals": "Whether the student carries a volume computation through real labeling and sales quantities with correct unit conversions at each step."
 },
 {
  "id": "S7-53",
  "set": 7,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects, and identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>A designer 3D-prints game props and cuts them to inspect the interiors. Prop 1 is a solid cone. Prop 2 is a solid square pyramid. (a) For the cone, describe the shape of the cross section made by a horizontal cut parallel to the base, and the shape made by a vertical cut that passes through the apex. (b) For the square pyramid, describe the shape of the cross section made by a horizontal cut parallel to the base, and the shape made by a vertical cut through the apex perpendicular to a base side. (c) For the pyramid&#x27;s horizontal cut, how does the cross section&#x27;s size compare to the base, and what happens to it as the cut moves toward the apex?</p>",
  "evidence": "Correctly named cross-section shapes for all four cuts (circle, triangle, square, triangle), and a description of the horizontal pyramid section as a smaller, similar square shrinking toward the apex",
  "reveals": "Whether the student can reason about slices of solids — including similarity of parallel sections — without a physical model in hand."
 },
 {
  "id": "S7-54",
  "set": 7,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe objects)",
  "html": "<p>A display stand for a gaming headset is built from two pieces: a rectangular base measuring $20$ cm by $12$ cm by $4$ cm, and a cradle on top shaped like a half-cylinder of radius $6$ cm whose flat side sits on the base and whose axis runs along the base&#x27;s $12$-cm direction. (a) Find the volume of the rectangular base. (b) Find the volume of the half-cylinder cradle, exactly and to the nearest tenth of a cubic centimeter. (c) Find the total volume of material in the stand, to the nearest tenth, and explain why modeling the stand as these two pieces is reasonable.</p>",
  "evidence": "A prism volume, a half-cylinder volume computed as half of $\\pi r^2 \\cdot \\text{length}$ with the radius fitting the base width, a summed total, and a sentence justifying the composite model",
  "reveals": "Whether the student decomposes a real object into standard solids, matches their dimensions consistently, and recombines the results."
 },
 {
  "id": "S7-55",
  "set": 7,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>An esports convention rents a rectangular hall $45$ meters long and $32$ meters wide. At peak time, $3{,}600$ attendees are in the hall. (a) Find the density of attendees, in people per square meter. (b) The fire-safety guideline for the event is a maximum density of $2$ people per square meter. Find the maximum number of attendees allowed in the hall. (c) By how many people is the hall over the guideline at peak time, and what should the organizers do with this information?</p>",
  "evidence": "The hall's area, a density computed as people divided by area with units, a capacity found by multiplying the guideline density by the area, and the overage with a practical recommendation",
  "reveals": "Whether the student uses density in both directions — computing it from a count and turning a density limit back into a count — to reach a safety decision."
 },
 {
  "id": "S7-56",
  "set": 7,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Applying geometric concepts in design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Applying geometric concepts in design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, e.g., satisfying constraints and minimizing cost)",
  "html": "<p>A trading-card game company needs a storage box that holds at least $1{,}000\\ \\text{cm}^3$, has height at most $8$ cm (to fit a retail shelf), and uses as little cardboard (surface area) as possible. Three candidate designs are proposed: Design A: $20 \\times 10 \\times 5$ cm. Design B: $16 \\times 8 \\times 8$ cm. Design C: $25 \\times 8 \\times 5$ cm. (a) For each design, compute the volume and verify it meets the capacity and height constraints. (b) For each design, compute the surface area. (c) Recommend a design, justifying your choice against all three criteria (capacity, height, cardboard).</p>",
  "evidence": "Volumes and surface areas computed for all three candidates in a table or organized list, constraint checks made explicit for each design, and a recommendation that follows from the computed values",
  "reveals": "Whether the student evaluates competing designs quantitatively against multiple constraints rather than picking by appearance — the essence of a design problem."
 },
 {
  "id": "S7-57",
  "set": 7,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Statistical inference from random samples",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Statistical inference from random samples — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample from that population; decide if a specified model is consistent with results from a given data-generating process)",
  "html": "<p>A game studio emails a survey to $400$ players chosen at random from its $2.3$ million registered players, asking whether they approve of a new ranked mode; $58\\%$ of respondents say yes. (a) Identify the population and the sample in this study. (b) Explain why the studio can reasonably generalize the $58\\%$ figure to all registered players. (c) Can the studio claim that $58\\%$ of all video game players approve of the new mode? Explain. (d) Suppose instead the studio had posted the survey on its fan forum and $400$ volunteers answered. What would go wrong with generalizing then?</p>",
  "evidence": "Population and sample correctly named, random selection identified as the basis for generalization, the scope of the conclusion limited to the sampled population, and volunteer/self-selection bias identified in the alternative design",
  "reveals": "Whether the student understands that random selection — not sample size alone — is what licenses a population inference, and that conclusions cannot outrun the population actually sampled."
 },
 {
  "id": "S7-58",
  "set": 7,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Purposes of study designs and randomization",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Purposes of study designs and randomization — NC.M3.S-IC.3 (identify the purposes and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A headset company asks: does our new headset design reduce motion sickness during VR play? (a) Classify each proposed study as a survey, an observational study, or an experiment: (i) Ask $100$ VR players whether they own the new headset and how sick they usually feel. (ii) Watch $100$ players who already chose their own headsets and record their sickness scores. (iii) Recruit $100$ volunteers, flip a coin to decide which headset each uses for a $30$-minute session, and record sickness scores. (b) Explain the purpose of the coin flip in study (iii), in terms of what it does to lurking variables. (c) Explain the difference between random selection and random assignment, and state which one study (iii) uses and what conclusion it licenses.</p>",
  "evidence": "All three studies classified with reasons, random assignment explained as balancing lurking variables across groups, and a clear contrast between random selection (generalizing) and random assignment (causal conclusions)",
  "reveals": "Whether the student distinguishes the two jobs randomization does and matches study designs to the conclusions they can support."
 },
 {
  "id": "S7-59",
  "set": 7,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A game studio wants to estimate the mean session length (minutes played per sitting) for all players of its game. A random sample of $60$ players has a mean session length of $84$ minutes. To build a margin of error, the studio runs a simulation: $1{,}000$ simulated random samples of size $60$ produce sample means with a standard deviation of $6$ minutes. (a) Use the simulation to develop a margin of error for the estimate. (b) Give an interval of plausible values for the true mean session length for all players. (c) Interpret the interval in context, and explain why the studio should not report $84$ minutes as the exact population mean.</p>",
  "evidence": "A margin of error of about two simulation standard deviations, the interval built around the sample mean, and an interpretation that frames the sample mean as one draw from a varying sampling distribution",
  "reveals": "Whether the student extends margin-of-error reasoning from proportions to means and treats the interval — not the point estimate — as the honest answer."
 },
 {
  "id": "S7-60",
  "set": 7,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Randomized experiments and simulation-based significance",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Randomized experiments and simulation-based significance — NC.M3.S-IC.5 (compare two treatments using data from a randomized experiment; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A game studio tests whether a redesigned tutorial helps new players finish the first level within $10$ minutes. Volunteers are randomly assigned to two groups of $60$: with the new tutorial, $46$ of $60$ finish in time; with the old tutorial, $34$ of $60$ finish in time. (a) Compute the observed difference in completion proportions (new minus old). (b) To judge significance, the studio simulates $400$ reassignments of the finish/not-finish labels to the two groups, assuming the tutorial makes no difference; a difference at least as large as the observed one occurred in only $12$ of the $400$ simulations. Express this as a percentage and state whether the result is statistically significant at the $5\\%$ level. (c) State the conclusion the studio can draw, and explain what the simulation assumed.</p>",
  "evidence": "Both group proportions and their difference computed, the simulation count converted to a percentage and compared with $5\\%$, a conclusion of statistical significance, and the null assumption (no treatment effect, labels exchangeable) stated",
  "reveals": "Whether the student can run the full logic of a randomized experiment — observed difference, simulation under no-effect, rarity judgment — and state a defensible causal conclusion."
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
  "id": "S8-21",
  "set": 8,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of quadratic equations",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of quadratic equations — NC.M3.N-CN.9 (solve quadratic equations with real coefficients that have complex solutions; know the Fundamental Theorem of Algebra)",
  "html": "<p>A graphic-design student is laying out a square festival banner. Requiring the banner&#x27;s diagonal brace to match a fixed support length leads to the equation $x^2 - 8x + 25 = 0$, where $x$ is the banner&#x27;s side length in feet. (a) Find all solutions of the equation, real and complex. (b) Explain what the solutions tell the student about whether the banner can be built as specified.</p>",
  "evidence": "Use of the quadratic formula or completing the square, simplification of a negative discriminant using $i$, both complex solutions stated as a conjugate pair, and a conclusion about the design drawn from the absence of real solutions",
  "reveals": "Whether the student can complete a complex-root computation cleanly and interpret nonreal solutions as meaningful information about a real design constraint, not as an error."
 },
 {
  "id": "S8-22",
  "set": 8,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Zeros, multiplicity, and end behavior of polynomial functions",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros, multiplicity, and end behavior of polynomial functions — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available; construct a rough graph using zeros and end behavior)",
  "html": "<p>During the school fair, the water level in a dunk-tank reservoir deviates from its normal level. The deviation, in inches, $x$ hours after the fair opens is modeled by $f(x) = (x + 2)(x - 5)^2$. (a) Identify all zeros of $f$ and state the multiplicity of each. (b) Describe the end behavior of the graph. (c) Find the $y$-intercept and interpret it in context. (d) For each zero, state whether the graph crosses or touches the $x$-axis there, and sketch the graph.</p>",
  "evidence": "Both zeros with correct multiplicities, cross-versus-touch behavior matched to multiplicity, end behavior from the degree and leading coefficient, the $y$-intercept evaluated and read as the deviation at opening time, and a sketch consistent with all of these",
  "reveals": "Whether the student reads a factored polynomial as a graph — multiplicity controlling local behavior at each zero — rather than treating zeros as isolated numbers."
 },
 {
  "id": "S8-23",
  "set": 8,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Solving rational equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving rational equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>Two juice dispensers work together to fill a cooler for the school picnic. Working alone, dispenser A fills the cooler in $x$ minutes, and dispenser B fills it in $x + 3$ minutes. Working together, they fill the cooler in $2$ minutes. (a) Write a rational equation that models this situation. (b) Solve the equation. (c) State how long each dispenser takes working alone, and explain why any extra algebraic solution must be rejected.</p>",
  "evidence": "A work-rate equation built from reciprocals, clearing denominators to reach a quadratic, both algebraic solutions, a check or domain argument rejecting the invalid one, and the two fill times stated with units",
  "reveals": "Whether the student can translate a combined-work situation into a rational equation and then filter the algebra's answers through the physical requirement that times are positive."
 },
 {
  "id": "S8-24",
  "set": 8,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms using inspection, long division, or technology)",
  "html": "<p>A caterer models the total cost, in hundreds of dollars, of preparing $x + 2$ trays of appetizers with the polynomial $2x^2 + 3x - 5$, so the cost per tray involves the quotient $\\dfrac{2x^2 + 3x - 5}{x + 2}$. (a) Rewrite the expression in the form $q(x) + \\dfrac{r}{x + 2}$ by polynomial long division. (b) State the quotient and the remainder. (c) Explain why the remainder term can never be dropped when reporting the exact cost per tray.</p>",
  "evidence": "A complete long-division process, the quotient and constant remainder identified, the rewritten form assembled correctly, and a statement that the remainder term is part of the exact value",
  "reveals": "Whether the student sees division of polynomials as producing a quotient plus a remainder term — the structure behind slant behavior — instead of expecting every division to come out even."
 },
 {
  "id": "S8-25",
  "set": 8,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas to highlight a quantity",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas to highlight a quantity — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>The culinary class uses a cylindrical stockpot whose volume is $V = \\pi r^2 h$, where $r$ is the radius and $h$ is the height, both in centimeters. (a) Rearrange the formula to solve for $h$. (b) A stockpot has volume $1500\\ \\text{cm}^3$ and radius $6$ cm. Find its height, to the nearest tenth of a centimeter. (c) Explain, in terms of the rearranged formula, what happens to the height if the radius doubles while the volume stays the same.</p>",
  "evidence": "A correct isolation of $h$ with $\\pi r^2$ treated as a single coefficient, substitution of the given values, a height rounded as requested, and a verbal prediction about doubling the radius based on the $r^2$ in the denominator",
  "reveals": "Whether the student can manipulate a literal equation fluently and then read the rearranged form as a relationship, not just a calculation recipe."
 },
 {
  "id": "S8-26",
  "set": 8,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Interpreting the structure of expressions",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting the structure of expressions — NC.M3.A-SSE.1 (interpret expressions that represent a quantity in terms of its context, including parts of an expression such as terms and factors)",
  "html": "<p>For a school concert, ticket revenue in dollars is modeled by $R(x) = x(40 - 0.5x)$, where $x$ is the number of tickets sold. (a) Expand $R(x)$ into standard form. (b) Interpret the factor $40 - 0.5x$ in context. (c) Interpret the term $-0.5x^2$ in the expanded form — what does it represent about the revenue? (d) What is the revenue if $30$ tickets are sold?</p>",
  "evidence": "A correct expansion, the second factor read as the price per ticket under a per-ticket discount, the negative quadratic term explained as revenue lost to the discount as sales grow, and a revenue value computed from either form",
  "reveals": "Whether the student can move between factored and expanded forms while keeping each piece attached to a real feature of the pricing model."
 },
 {
  "id": "S8-27",
  "set": 8,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Subtracting and multiplying complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Subtracting and multiplying complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers; use $i^2 = -1$)",
  "html": "<p>The school radio station models two audio signals as complex numbers: signal 1 is $Z_1 = 3 + 2i$ and signal 2 is $Z_2 = 1 - 4i$. (a) Find $Z_1 - Z_2$ in $a + bi$ form. (b) Find the product $Z_1 \\cdot Z_2$ in $a + bi$ form. (c) Explain which operation in parts (a) and (b) required using $i^2 = -1$, and where it entered the calculation.</p>",
  "evidence": "Component-wise subtraction, a product expanded with all four terms, the $i^2$ term converted to a real contribution, and both results in $a + bi$ form",
  "reveals": "Whether the student handles complex multiplication as genuine binomial multiplication — where the imaginary unit changes the sign of one term — rather than combining parts mechanically."
 },
 {
  "id": "S8-28",
  "set": 8,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>A baker combines two partial batches of glaze. The first batch contributes $\\dfrac{5}{x + 1}$ cups and the second contributes $\\dfrac{2}{x - 1}$ cups, where $x &gt; 1$ is a batch scale factor. (a) Write the total amount of glaze $G(x)$ as a single rational expression in simplified form. (b) State all values of $x$ excluded from the domain of $G$. (c) Find the total amount of glaze when $x = 3$.</p>",
  "evidence": "A common denominator built from both factors, numerators expanded and combined, the simplified single fraction, both excluded values, and an evaluation at the given scale factor",
  "reveals": "Whether the student can add rational expressions by constructing a common denominator — distributing into the numerators correctly — the step where most rational-expression errors occur."
 },
 {
  "id": "S8-29",
  "set": 8,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Solving systems by finding intersection points",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Solving systems by finding intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of two equations intersect are the solutions of the system; find intersections of linear functions)",
  "html": "<p>Two catering companies price a school banquet as follows. Company A charges a $\\$180$ setup fee plus $\\$14$ per guest. Company B charges a $\\$300$ setup fee plus $\\$10$ per guest. (a) Write a cost function for each company, using $n$ for the number of guests. (b) Find the number of guests for which the two companies charge the same amount, and state that amount. (c) Interpret the solution of part (b) as the intersection point of the two graphs, and state which company is cheaper for a banquet of $40$ guests.</p>",
  "evidence": "Two linear cost functions, an equation setting them equal, the break-even guest count and shared cost, the intersection interpretation, and a justified recommendation for the stated party size",
  "reveals": "Whether the student connects the algebraic act of setting two models equal to the geometric event of two graphs crossing, and uses that point to make a decision on each side of it."
 },
 {
  "id": "S8-30",
  "set": 8,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Remainder Theorem used to determine an unknown coefficient",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder Theorem used to determine an unknown coefficient — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder on division by $x - a$ is $P(a)$)",
  "html": "<p>A carnival dart booth&#x27;s daily profit, in tens of dollars, is modeled by $P(x) = x^3 - 2x^2 + kx - 6$, where $x$ is the day number and $k$ is an unknown constant. The booth&#x27;s records show that day $3$ was an exact break-even day. (a) Use the Remainder Theorem to write an equation involving $k$. (b) Solve for $k$. (c) With your value of $k$, state what $P(3) = 0$ guarantees about the factor $(x - 3)$.</p>",
  "evidence": "The break-even condition translated to $P(3) = 0$, substitution producing a linear equation in $k$, the solved value, and the factor conclusion that follows from a zero remainder",
  "reveals": "Whether the student can run the Remainder Theorem in reverse — using a known remainder to recover information about the polynomial — instead of only evaluating with it."
 },
 {
  "id": "S8-31",
  "set": 8,
  "n": 31,
  "strand": "Functions",
  "topic": "Key features of functions from a table",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of functions from a table — NC.M3.F-IF.4 (interpret key features of graphs and tables in terms of the quantities: intercepts, intervals of increase/decrease, maxima, and average rate of change)",
  "html": "<p>A culinary class records the temperature of an oven as it preheats and is then used for baking:</p>\n<table>\n<tr><th>Time (min)</th><th>0</th><th>5</th><th>10</th><th>15</th><th>20</th><th>25</th><th>30</th></tr>\n<tr><td>Temperature (°F)</td><td>75</td><td>210</td><td>325</td><td>400</td><td>425</td><td>425</td><td>380</td></tr>\n</table>\n<p>(a) State the $y$-intercept and interpret it in context. (b) On which interval is the temperature increasing, constant, and decreasing? (c) State the maximum temperature and when it occurs. (d) Find the average rate of change of the temperature over the first $10$ minutes, with units.</p>",
  "evidence": "The intercept read as the starting (room) temperature, the three behavior intervals identified from the table, the maximum value with its time interval, and an average rate computed as a change in temperature over a change in time with units attached",
  "reveals": "Whether the student reads a table as a story about a physical process — heating, holding, and cooling when the door opens — and not just as columns of numbers."
 },
 {
  "id": "S8-32",
  "set": 8,
  "n": 32,
  "strand": "Functions",
  "topic": "Comparing properties of two functions represented differently",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing properties of two functions represented differently — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way: table, equation, graph, or verbal description)",
  "html": "<p>Two lemonade stands at the school fair track daily cup sales. Stand A&#x27;s sales are shown in the table below. Stand B&#x27;s sales are modeled by $S(t) = 5t + 18$, where $t$ is the day number.</p>\n<table>\n<tr><th>Day $t$</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>\n<tr><td>Stand A sales</td><td>20</td><td>26</td><td>32</td><td>38</td></tr>\n</table>\n<p>(a) Find Stand A&#x27;s starting value (sales on day $0$) and its daily rate of change. (b) Which stand starts with more sales, and which stand&#x27;s sales grow faster? (c) On which day do the two stands sell the same number of cups, and how many cups is that?</p>",
  "evidence": "Stand A's rate and starting value extracted from the table by working backward, a comparison of both features across the two representations, and the meeting day found by solving or extending both patterns",
  "reveals": "Whether the student can extract the same two features — starting value and rate — from a table and from an equation and then compare like with like."
 },
 {
  "id": "S8-33",
  "set": 8,
  "n": 33,
  "strand": "Functions",
  "topic": "Transformations of functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations of functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ with $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$; recognize even and odd functions)",
  "html": "<p>A balloon arch over the entrance to the school dance has height, in feet, modeled by $g(x) = -2(x + 1)^2 + 8$, where $x$ is the horizontal distance in feet from a point directly left of the arch&#x27;s center. (a) Describe $g$ as a sequence of transformations of the parent function $f(x) = x^2$. (b) State the vertex of the arch and the maximum height. (c) Find where the arch meets the ground, and state the width of the arch at ground level.</p>",
  "evidence": "Each parameter of the vertex form matched to a transformation (reflection, vertical stretch, shifts), the vertex read directly from the form, and the ground-level points found by solving $g(x) = 0$",
  "reveals": "Whether the student decodes vertex form as a set of instructions applied to the parent parabola, and connects the vertex and roots back to the physical arch."
 },
 {
  "id": "S8-34",
  "set": 8,
  "n": 34,
  "strand": "Functions",
  "topic": "Finding an inverse function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding an inverse function — NC.M3.F-BF.4a (solve an equation of the form $f(x) = c$ for a simple function; find the inverse of a function)",
  "html": "<p>A barbecue team rents a smoker for a flat $\\$40$ fee and buys brisket at $\\$2.50$ per pound. The total cost in dollars for $x$ pounds of brisket is $f(x) = 2.5x + 40$. (a) Find a formula for the inverse function $f^{-1}$. (b) Explain what the input and output of $f^{-1}$ represent. (c) The team has $\\$190$ to spend in total. Use the inverse function to find how many pounds of brisket they can buy.</p>",
  "evidence": "The inverse produced by swapping the variables and solving, a correct statement of the swapped quantities (dollars in, pounds out), and the inverse evaluated at the budget amount",
  "reveals": "Whether the student can construct an inverse algebraically and understands it as the same relationship read in the opposite direction, ready to answer \"how much can we afford\" questions."
 },
 {
  "id": "S8-35",
  "set": 8,
  "n": 35,
  "strand": "Functions",
  "topic": "Verifying inverse functions by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverse functions by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>For oven use, the culinary class converts temperatures with $f(x) = \\dfrac{5}{9}(x - 32)$, which converts $x$ degrees Fahrenheit to degrees Celsius, and $g(x) = \\dfrac{9}{5}x + 32$, which converts back. (a) Compute $g(f(x))$ and simplify completely. (b) Compute $f(g(x))$ and simplify completely. (c) State what the two results prove about $f$ and $g$, and verify the claim numerically by converting $212^\\circ\\text{F}$ to Celsius and back.</p>",
  "evidence": "Both compositions carried out with the fraction arithmetic handled correctly, both simplifying to $x$, the inverse conclusion stated, and a numeric round-trip check through the boiling point of water",
  "reveals": "Whether the student treats composition — not just similar-looking formulas — as the test of an inverse pair, and can push through the nested fraction arithmetic it requires."
 },
 {
  "id": "S8-36",
  "set": 8,
  "n": 36,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph functions expressed symbolically and show key features, including piecewise-defined functions)",
  "html": "<p>A food truck charges a delivery fee based on the distance $d$, in miles, from the school:<br>$$f(d) = \\begin{cases} 4, &amp; 0 \\le d \\le 2 \\\\ 4 + 1.5(d - 2), &amp; 2 &lt; d \\le 6 \\\\ 10, &amp; d &gt; 6 \\end{cases}$$<br>(a) Find the fee for deliveries of $1$ mile, $4$ miles, and $9$ miles. (b) Sketch the graph of $f$, showing clearly what happens at $d = 2$ and $d = 6$. (c) State the domain and range of $f$ in context.</p>",
  "evidence": "Each distance matched to the correct piece before evaluating, a graph with a flat segment, a rising segment, and a flat cap joined at the breakpoints, and domain/range stated with the fee context",
  "reveals": "Whether the student treats a piecewise rule as several functions on separate territories — choosing the piece by the input first — and can show the joins honestly on a graph."
 },
 {
  "id": "S8-37",
  "set": 8,
  "n": 37,
  "strand": "Functions",
  "topic": "Graphing exponential functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing exponential functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts, asymptotes, and end behavior)",
  "html": "<p>A tray of soup cools on the cafeteria counter. The difference between the soup&#x27;s temperature and room temperature, in degrees Fahrenheit, $t$ minutes after the tray is set out is modeled by $D(t) = 80\\left(\\tfrac{1}{2}\\right)^{t/4}$. (a) Find the $y$-intercept and interpret it. (b) State the horizontal asymptote and explain what it means for the soup. (c) Find $D(4)$ and $D(8)$, and describe the pattern. (d) Describe the end behavior of the graph.</p>",
  "evidence": "The intercept evaluated at $t = 0$ and read as the starting temperature difference, the asymptote identified with the soup approaching room temperature, two evaluations showing the difference halving every $4$ minutes, and end behavior stated in context",
  "reveals": "Whether the student reads an exponential decay model through its graph features — starting value, halving pattern, and limiting behavior — rather than only computing isolated values."
 },
 {
  "id": "S8-38",
  "set": 8,
  "n": 38,
  "strand": "Functions",
  "topic": "Comparing exponential and polynomial growth",
  "standards": [
   "NC.M3.F-LE.3"
  ],
  "standardsDetail": "Comparing exponential and polynomial growth — NC.M3.F-LE.3 (observe that a quantity increasing exponentially eventually exceeds a quantity increasing as a polynomial function)",
  "html": "<p>A science-fair team grows two bacteria cultures for a food-safety project. Culture E grows exponentially, $E(t) = 3^t$ cells, and culture L grows linearly, $L(t) = 20t + 10$ cells, where $t$ is hours since inoculation. (a) Complete a table of both populations for $t = 0, 1, 2, 3, 4, 5, 6$. (b) During which hour does culture E first overtake culture L? (c) Explain, using the table and the nature of the two growth types, why culture E will stay ahead of culture L for all larger times.</p>",
  "evidence": "A correct two-row table, the crossover located between consecutive table values, and an explanation that exponential growth multiplies while linear growth only adds, so the exponential's lead grows once established",
  "reveals": "Whether the student has internalized \"eventually exceeds\" as a structural fact about growth types, supported by table evidence rather than asserted from a single comparison."
 },
 {
  "id": "S8-39",
  "set": 8,
  "n": 39,
  "strand": "Functions",
  "topic": "Determining whether a relation is a function; domain and range",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Determining whether a relation is a function; domain and range — NC.M3.F-IF.1 (understand that a function assigns to each input exactly one output; use function notation and interpret domain and range)",
  "html": "<p>The bake-sale committee records two relations. <strong>Relation 1</strong> pairs each item with its price: (cupcake, $\\$1.50$), (brownie, $\\$1.25$), (muffin, $\\$1.75$), (cookie, $\\$1.50$). <strong>Relation 2</strong> pairs each price with the items sold at that price. (a) Is Relation 1 a function? Explain using the definition. (b) Is Relation 2 a function? Explain, citing the specific input that causes the issue if there is one. (c) State the domain and range of Relation 1.</p>",
  "evidence": "Relation 1 judged by whether any item has two prices, Relation 2 judged by whether any price is paired with more than one item with the offending input named, and domain/range listed as sets of items and prices",
  "reveals": "Whether the student applies the \"exactly one output per input\" test in both directions of a real pairing — recognizing that reversing a function need not give a function."
 },
 {
  "id": "S8-40",
  "set": 8,
  "n": 40,
  "strand": "Functions",
  "topic": "Modeling constraints with inequalities",
  "standards": [
   "NC.M3.A-CED.3"
  ],
  "standardsDetail": "Modeling constraints with inequalities — NC.M3.A-CED.3 (represent constraints by equations or inequalities and systems of them; interpret solutions as viable or nonviable options in a modeling context)",
  "html": "<p>For the school bake sale, a committee will bake cupcakes and brownies. Cupcakes cost $\\$0.80$ each to make and brownies cost $\\$0.50$ each to make. The committee has at most $\\$60$ for ingredients and wants to offer at least $100$ items in total. Let $x$ be the number of cupcakes and $y$ the number of brownies. (a) Write a system of inequalities describing the constraints, including the nonnegativity conditions. (b) Graph the feasible region. (c) Determine whether $(25, 75)$ and $(60, 60)$ are feasible, showing the check for each.</p>",
  "evidence": "A cost inequality, a total-items inequality, and both nonnegativity conditions; a shaded feasible region consistent with all four; and each test point substituted into the constraints with a viable/nonviable verdict",
  "reveals": "Whether the student can convert a word problem's limits into a system whose solution set is a region of workable plans, and test candidate plans against every constraint."
 },
 {
  "id": "S8-41",
  "set": 8,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle; use $s = r\\theta$)",
  "html": "<p>A lazy Susan turntable on the cafeteria serving counter has radius $15$ cm. As it rotates, a serving spoon resting at the rim moves along a circular arc. (a) The turntable rotates through $\\dfrac{5\\pi}{6}$ radians. Convert this angle to degrees. (b) Find the distance the spoon travels along the arc, exactly in terms of $\\pi$ and approximately to the nearest tenth of a centimeter. (c) How many complete rotations does the turntable make when it turns through $10\\pi$ radians in total?</p>",
  "evidence": "A degree conversion using the $\\pi$ radians $= 180^\\circ$ relationship, arc length from $s = r\\theta$ with the radius in centimeters, and a rotation count from dividing the total angle by $2\\pi$",
  "reveals": "Whether the student treats a radian as a genuine unit of angle — convertible to degrees and tied directly to arc length — rather than as a symbol attached to $\\pi$."
 },
 {
  "id": "S8-42",
  "set": 8,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Trigonometric functions on the unit circle",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Trigonometric functions on the unit circle — NC.M3.F-TF.2 (explain how the unit circle enables the extension of trigonometric functions to all real numbers, interpreted as radian measures of angles traversed counterclockwise around the unit circle)",
  "html": "<p>A rotating beacon light on top of the school fair&#x27;s ticket booth sweeps around a unit circle. At one instant, the beam points in the direction of the angle $\\theta = \\dfrac{5\\pi}{4}$, corresponding to the point $(\\cos\\theta, \\sin\\theta)$ on the unit circle. (a) Find the exact coordinates of that point. (b) Explain why both coordinates are negative, referring to the quadrant. (c) State the reference angle for $\\theta$ and the values of $\\sin\\theta$ and $\\cos\\theta$ in terms of it. (d) Explain why $\\sin\\left(\\dfrac{5\\pi}{4} + 2\\pi\\right)$ has the same value as $\\sin\\dfrac{5\\pi}{4}$.</p>",
  "evidence": "Exact coordinates with the $\\tfrac{\\sqrt2}{2}$ values and correct signs, the quadrant identified as the reason for the signs, the reference angle named, and periodicity explained as one full extra revolution landing on the same point",
  "reveals": "Whether the student understands sine and cosine as coordinates determined by position on the circle — with signs coming from location — instead of as calculator outputs."
 },
 {
  "id": "S8-43",
  "set": 8,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and intercepted arcs",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and intercepted arcs — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; the measure of an inscribed angle is half the measure of its intercepted arc)",
  "html": "<p>A round cake is decorated with a ring of frosting roses. Two candles are placed on the crust at points $P$ and $Q$, and a third candle sits at the center $O$. The central angle $\\angle POQ$ measures $80^\\circ$. A fourth candle is placed at point $R$ on the crust, on the major arc side arranged so that $\\angle PRQ$ intercepts the same arc $PQ$. (a) Find the measure of arc $PQ$. (b) Find the measure of the inscribed angle $\\angle PRQ$ and state the theorem used. (c) A different inscribed angle on the cake intercepts an arc of $70^\\circ$. Find its measure.</p>",
  "evidence": "The arc measure taken from the central angle, the inscribed angle computed as half its intercepted arc with the inscribed angle theorem named, and the same halving applied to the second arc",
  "reveals": "Whether the student distinguishes central from inscribed angles by their vertex location and applies the half-measure relationship in both directions."
 },
 {
  "id": "S8-44",
  "set": 8,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed quadrilaterals",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed quadrilaterals — NC.M3.G-C.3 (find angle measures in inscribed quadrilaterals; opposite angles of an inscribed quadrilateral are supplementary)",
  "html": "<p>Four food stands, $A$, $B$, $C$, and $D$, are placed in order around a circular plaza at the school festival, so $ABCD$ is an inscribed quadrilateral. The angle at stand $A$ measures $95^\\circ$ and the angle at stand $B$ measures $110^\\circ$. (a) Find the measures of the angles at stands $C$ and $D$. (b) State the theorem about inscribed quadrilaterals that makes the calculation work. (c) Find the measure of arc $ADC$, the arc intercepted by the angle at $B$.</p>",
  "evidence": "Both unknown angles found by supplementarity with their opposite partners, the inscribed-quadrilateral theorem stated, and the intercepted arc found by doubling the inscribed angle",
  "reveals": "Whether the student knows that cyclic quadrilaterals carry a special angle structure, and can move between an inscribed angle and its intercepted arc."
 },
 {
  "id": "S8-45",
  "set": 8,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive the equation of a circle of given center and radius using the Pythagorean Theorem; complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A circular fountain in the school courtyard is modeled on a coordinate map (units in meters) by the equation $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Rewrite the equation in standard form by completing the square. (b) State the center and radius of the fountain. (c) A bench is located at the point $(3, 3)$ on the map. Determine whether the bench sits exactly on the fountain&#x27;s edge, showing your calculation.</p>",
  "evidence": "Both variables completed to squares with the constant balance kept correct, the standard form produced, center and radius read from it, and the bench point tested by substitution or by distance from the center",
  "reveals": "Whether the student can reverse-engineer a circle's geometry from its expanded equation — completing the square twice without losing the constant — and use the result to answer a location question."
 },
 {
  "id": "S8-46",
  "set": 8,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a parabola from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Equation of a parabola from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>For recording the school concert, a student aims a parabolic microphone dish that opens sideways. Its focus is at $(3, 0)$ and its directrix is the line $x = -3$, with measurements in inches. (a) Derive the equation of the parabola from the focus and directrix. (b) How wide is the dish at the height (depth position) of the focus — that is, what is the length of the latus rectum? (c) The dish extends $6$ inches back from its vertex along its axis. How wide is the dish at its rim?</p>",
  "evidence": "A derivation setting distance-to-focus equal to distance-to-directrix that yields a horizontal parabola, the latus rectum length read from the equation's coefficient, and the rim width found by substituting the depth into the equation and doubling the resulting coordinate",
  "reveals": "Whether the student can build a conic's equation from its geometric definition in a new orientation, and then read design dimensions back out of the equation."
 },
 {
  "id": "S8-47",
  "set": 8,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including that the base angles of an isosceles triangle are congruent)",
  "html": "<p><strong>Proof.</strong> A triangular festival banner has two equal sides: in $\\triangle ABC$, $\\overline{AB} \\cong \\overline{AC}$, with the apex at $A$ and the base $\\overline{BC}$ along the bottom of the banner. Prove that the base angles are congruent, that is, $\\angle B \\cong \\angle C$. Your proof should draw the bisector of $\\angle A$, meeting $\\overline{BC}$ at a point $D$, and use congruent triangles.</p>",
  "evidence": "A structured proof that introduces the angle bisector, establishes $\\triangle ABD \\cong \\triangle ACD$ by SAS (the given equal sides, the bisected angle, and the shared side), and concludes $\\angle B \\cong \\angle C$ by CPCTC",
  "reveals": "Whether the student can add a purposeful auxiliary line to create congruent triangles and carry a claim from given information to conclusion with each step justified."
 },
 {
  "id": "S8-48",
  "set": 8,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length proportionality and sector area",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length proportionality and sector area — NC.M3.G-C.5 (derive, using similarity, the fact that the length of the arc intercepted by an angle is proportional to the radius; derive and use $A = \\tfrac{1}{2}r^2\\theta$)",
  "html": "<p>Two round layer cakes are decorated for a bake sale, one with radius $6$ inches and one with radius $9$ inches. A ribbon design is laid along an arc of each cake, and on both cakes the ribbon&#x27;s arc is cut using the same central angle of $1.2$ radians. (a) Find the arc length of the ribbon on each cake. (b) Find the sector area covered by frosting design on each cake. (c) Explain, using similarity, why the ratio of the two arc lengths equals the ratio of the two radii, and state that ratio.</p>",
  "evidence": "Both arc lengths from $s = r\\theta$ and both sector areas from the radian-based formula, with the angle used in radians as given, and a similarity explanation that scaling the radius scales every length in the figure by the same factor",
  "reveals": "Whether the student understands radian-based arc and sector formulas as consequences of similarity — lengths scale with the radius while the angle stays fixed — rather than as two unrelated formulas."
 },
 {
  "id": "S8-49",
  "set": 8,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena — NC.M3.F-TF.5 (model periodic phenomena with trigonometric functions; interpret amplitude, frequency/period, and midline in context)",
  "html": "<p>The thermostat in the culinary classroom&#x27;s grill cycles on and off, so the grill&#x27;s temperature oscillates around its target. The temperature, in degrees Fahrenheit, $t$ minutes after the grill reaches its target zone is modeled by $T(t) = 325 + 20\\cos\\left(\\dfrac{\\pi}{6}t\\right)$. (a) Identify the amplitude, midline, and period, and interpret each for the grill. (b) Find the maximum and minimum temperatures in the cycle. (c) At what time does the temperature first fall to $335^\\circ\\text{F}$?</p>",
  "evidence": "Amplitude, midline, and period each computed or read from the model and interpreted as the temperature swing, the target temperature, and the cycle length; the extremes found from midline plus/minus amplitude; and a cosine equation solved for the first time the falling temperature reaches the stated value",
  "reveals": "Whether the student reads a cosine model as a physical cycle — target, swing, and timing — and can locate a specific event within the cycle by solving the model."
 },
 {
  "id": "S8-50",
  "set": 8,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that opposite angles of a parallelogram are congruent)",
  "html": "<p><strong>Proof.</strong> A festival banner frame is shaped like a parallelogram $ABCD$, with vertices in order, so $\\overline{AB} \\parallel \\overline{CD}$ and $\\overline{BC} \\parallel \\overline{AD}$. Prove that the opposite angles of the parallelogram are congruent: $\\angle A \\cong \\angle C$ and $\\angle B \\cong \\angle D$. Your proof should use the parallel sides to produce supplementary angle pairs, without using congruent triangles.</p>",
  "evidence": "A structured proof in which consecutive angles are shown supplementary twice (same-side interior angles for each pair of parallel sides), giving $\\angle A + \\angle B = 180^\\circ$ and $\\angle B + \\angle C = 180^\\circ$, so $\\angle A \\cong \\angle C$ as supplements of the same angle, with the second pair handled the same way",
  "reveals": "Whether the student can build a proof from angle relationships alone — chaining two supplementary facts through a shared angle — rather than defaulting to congruent triangles for every claim."
 },
 {
  "id": "S8-51",
  "set": 8,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cylinder",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cylinder — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>The cafeteria&#x27;s soup pot is a cylinder with radius $10$ cm and height $18$ cm, filled to the brim. (a) Find the exact volume of soup in the pot and an approximation to the nearest tenth of a cubic centimeter. (b) Convert the volume to liters ($1\\ \\text{L} = 1000\\ \\text{cm}^3$), to the nearest hundredth. (c) If one serving is $250$ mL, how many full servings does the pot hold?</p>",
  "evidence": "The cylinder formula applied with the radius (not diameter) squared, an exact answer in terms of $\\pi$ and a decimal approximation, a unit conversion to liters, and a serving count rounded down to full servings",
  "reveals": "Whether the student applies the cylinder volume formula accurately and carries a volume through unit conversions into a practical serving count."
 },
 {
  "id": "S8-52",
  "set": 8,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>An ice-cream stand at the school fair serves scoops that are perfect spheres of radius $2.5$ cm. (a) Find the exact volume of one scoop and an approximation to the nearest tenth of a cubic centimeter. (b) A tub contains $4$ liters ($4000\\ \\text{cm}^3$) of ice cream. How many full scoops can be served from the tub, assuming no waste?</p>",
  "evidence": "The sphere formula applied with the radius cubed, an exact answer in terms of $\\pi$ and a decimal approximation, and the tub's volume divided by the scoop volume with the count rounded down to full scoops",
  "reveals": "Whether the student can select and apply the sphere formula — distinguishing it from the cone and cylinder formulas used for other fair foods — and convert a bulk volume into a count of servings."
 },
 {
  "id": "S8-53",
  "set": 8,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections of three-dimensional objects",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections of three-dimensional objects — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross-sections of three-dimensional objects, and identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>For a cooking demonstration, a watermelon is modeled as a sphere of radius $12$ cm, and a cylindrical layer cake has radius $10$ cm and height $8$ cm. (a) Describe the cross section of the watermelon made by a plane cut, and state how the size of the cross section depends on where the cut is made. (b) Find the area of the largest possible cross section of the watermelon. (c) A cut parallel to the watermelon&#x27;s center plane, $5$ cm away from it, produces a smaller circular cross section. Find that circle&#x27;s radius and area (exact, in terms of $\\pi$). (d) Describe the cross sections of the cake made by a horizontal cut and by a vertical cut through its axis.</p>",
  "evidence": "Circular cross sections for the sphere with the maximum at the center plane, the largest area from the sphere's radius, the offset cut handled with the Pythagorean relationship between the sphere radius, the offset, and the section radius, and the cake's sections named as a circle and a rectangle with dimensions",
  "reveals": "Whether the student can reason about slices of solids quantitatively — including using a right triangle inside the sphere — rather than only naming shapes."
 },
 {
  "id": "S8-54",
  "set": 8,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A school festival is held on a rectangular plaza $40$ m long by $25$ m wide. At the busiest moment, $2400$ people are on the plaza. (a) Find the crowd density in people per square meter. (b) Safety guidelines allow a maximum density of $2.5$ people per square meter. Is the plaza within the guideline at that moment? (c) How many additional people could enter before the plaza reaches the maximum allowed density?</p>",
  "evidence": "The plaza area computed first, density as people divided by area with units stated, a comparison against the guideline value, and the remaining capacity found from the maximum headcount minus the current headcount",
  "reveals": "Whether the student treats density as a rate with units that supports decisions — comparing against a threshold and converting back to a headcount."
 },
 {
  "id": "S8-55",
  "set": 8,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with composite geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with composite geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>A punch dispenser for the school dance is shaped like a cylinder with radius $15$ cm and height $30$ cm, topped by a hemispherical dome lid whose radius is also $15$ cm; the punch fills the cylindrical part and the dome completely. (a) Find the volume of the cylindrical part. (b) Find the volume of the hemispherical dome. (c) Find the total volume of punch the dispenser holds, in cubic centimeters and in liters, to the nearest tenth of a liter.</p>",
  "evidence": "The cylinder and hemisphere volumes computed separately with the shared radius, the hemisphere taken as half of a sphere, the two volumes added, and the total converted to liters",
  "reveals": "Whether the student decomposes a real container into standard solids, matches the shared radius across the pieces, and assembles a total capacity from the parts."
 },
 {
  "id": "S8-56",
  "set": 8,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Statistical inference from samples",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Statistical inference from samples — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample; decide if a specified model is consistent with results)",
  "html": "<p>A school district wants to know students&#x27; favorite cafeteria entrée. A survey team stands at the pizza line during lunch and asks $80$ students; $62\\%$ of those asked name pizza as their favorite. (a) Identify the population and the sample in this survey. (b) Is $62\\%$ a parameter or a statistic? Explain. (c) Explain why the $62\\%$ figure may not generalize to all students in the district, identifying the flaw in how the sample was chosen. (d) Describe how the team should select the sample so that the results can reasonably be generalized.</p>",
  "evidence": "Population and sample correctly identified, the $62\\%$ classified as a statistic because it describes the sample, the pizza-line location identified as a selection bias that overrepresents pizza fans, and a random selection method from the full student body proposed",
  "reveals": "Whether the student understands that inference stands or falls on how the sample was drawn — a statistic from a biased sample describes the sample, not the school."
 },
 {
  "id": "S8-57",
  "set": 8,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population proportion; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population proportion; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>The activities council wants to estimate the percent of all $1500$ students at the school who support adding a salad bar to the cafeteria. A random sample of $400$ students is surveyed, and $58\\%$ of the sample supports the salad bar. To build a margin of error, the council runs a simulation: $1000$ simulated random samples of size $400$ produce sample proportions with standard deviation $0.024$. (a) State the sample proportion and what it estimates. (b) Use the simulation to develop a margin of error and an interval of plausible values for the true percent of all students who support the salad bar. (c) Can the council reasonably claim that a majority of all students support the salad bar? Justify using your interval.</p>",
  "evidence": "The sample proportion identified as an estimate of the population proportion, a margin of error of about two simulation standard deviations, the resulting plausible interval, and a majority claim judged by whether the whole interval lies above $50\\%$",
  "reveals": "Whether the student treats a sample proportion as an estimate carrying a plausible range, and tests a majority claim against the entire interval rather than the point estimate alone."
 },
 {
  "id": "S8-58",
  "set": 8,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments in a randomized experiment using simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments in a randomized experiment using simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>A culinary class tests whether a new yeast brand makes bread rise higher. The class randomly assigns $25$ loaves to be baked with the new yeast and $25$ loaves with the standard yeast, keeping all other conditions the same. The mean rise height is $12.6$ cm for the new yeast and $10.8$ cm for the standard yeast, a difference of $1.8$ cm. To test whether this difference is meaningful, the teacher runs a simulation: in $1000$ random reassignments of the $50$ rise heights to two groups of $25$, a difference of $1.8$ cm or more in either direction occurred in only $12$ trials. (a) State the observed difference and what the simulation was designed to model. (b) Using the simulation results, decide whether the difference is statistically significant at the $5\\%$ level. (c) State the conclusion the class should draw about the two yeasts, and explain why random assignment matters for that conclusion.</p>",
  "evidence": "The observed difference stated, the simulation recognized as modeling differences produced by random assignment alone under no real treatment effect, the proportion of extreme trials computed and compared with $5\\%$, a \"significant\" decision, and a conclusion crediting the new yeast — supported by random assignment balancing the groups",
  "reveals": "Whether the student can judge an experimental difference against chance variability and, when the difference survives that test, connect the causal conclusion to the random assignment that licenses it."
 },
 {
  "id": "S8-59",
  "set": 8,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data, including recognizing bias, confounding, and unsupported causal claims)",
  "html": "<p>A local news site runs the headline &quot;Energy Drink Doubles Exam Scores!&quot; The article reports that at one school, students who reported drinking an energy drink on exam morning scored, on average, twice as high as students who did not. The data came from a voluntary survey after the exam; students chose for themselves whether to drink anything. (a) Identify the type of study (survey, observational study, or experiment) and explain your classification. (b) Give two specific reasons why the headline&#x27;s claim is not justified by this study. (c) Describe a study design that could actually support a claim that the drink affects exam scores.</p>",
  "evidence": "The study classified as observational (self-selected groups, no assigned treatment), at least two distinct flaws named — such as confounding (students who choose energy drinks may differ in sleep, preparation, or motivation) and the absence of random assignment or a control condition — and a proposed randomized experiment with a comparison group",
  "reveals": "Whether the student reads media claims about data skeptically — separating what a study's design can show from what a headline wants it to show."
 },
 {
  "id": "S8-60",
  "set": 8,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Applying geometric methods to solve design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Applying geometric methods to solve design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including optimizing a design under constraints)",
  "html": "<p>For bake-sale packaging, a club cuts equal squares of side $x$ inches from the corners of a $24$ in by $18$ in cardboard sheet and folds up the sides to form an open-top box. (a) Write the volume of the box, $V(x)$, as a function of $x$. (b) State the domain of $V$ in context. (c) The club computes the volume for several cut sizes:</p>\n<table>\n<tr><th>$x$ (in)</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n<tr><td>$V(x)$ (in³)</td><td>352</td><td>560</td><td>648</td><td>640</td><td>560</td></tr>\n</table>\n<p>Using the table, state which cut size gives the largest box and the maximum volume shown. (d) Explain why the volume increases and then decreases as $x$ grows, in terms of the box&#x27;s dimensions.</p>",
  "evidence": "A volume function built from the reduced length and width and the cut size as height, a domain bounded by the smaller sheet dimension, the best cut size and volume read from the table, and an explanation trading off growing height against shrinking base dimensions",
  "reveals": "Whether the student can build a geometric model from a physical construction, respect the domain the material imposes, and reason about an optimum as a trade-off rather than a single formula."
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
  "id": "S9-21",
  "set": 9,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Adding and subtracting complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Adding and subtracting complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers)",
  "html": "<p>At a junction box in a community microgrid, two alternating currents are modeled by complex numbers: $I_1 = 5 + 3i$ amperes and $I_2 = 2 - 7i$ amperes. (a) Find the total current $I_1 + I_2$ at the junction, in the form $a + bi$. (b) Find $I_1 - I_2$ and explain in one sentence what a difference of currents could represent at a junction.</p>",
  "evidence": "Both computations carried out component-by-component and reported in $a + bi$ form, plus a sensible physical reading of the difference",
  "reveals": "Whether the student treats the real and imaginary parts of a complex quantity as separate components that combine independently."
 },
 {
  "id": "S9-22",
  "set": 9,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Extending polynomial identities to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Extending polynomial identities to complex numbers — NC.M3.N-CN.8 (extend polynomial identities to the complex numbers; factor a sum of squares)",
  "html": "<p>The control system for a community water-treatment pump has a characteristic expression $s^2 + 36$, and a design table also lists $2x^2 + 50$. (a) Express $s^2 + 36$ as a product of two linear factors with complex coefficients. (b) Express $2x^2 + 50$ as a product of a constant and two linear factors with complex coefficients. (c) State all zeros of each expression.</p>",
  "evidence": "A difference-of-squares rewrite using $i$ for each expression, complete factorizations, and both zeros listed for each",
  "reveals": "Whether the student can treat a sum of squares as a difference of squares once $i^2 = -1$ is available, rather than declaring it unfactorable."
 },
 {
  "id": "S9-23",
  "set": 9,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Complex solutions of polynomial equations",
  "standards": [
   "NC.M3.N-CN.9"
  ],
  "standardsDetail": "Complex solutions of polynomial equations — NC.M3.N-CN.9 (know the Fundamental Theorem of Algebra; find all solutions, real and complex, of a polynomial equation)",
  "html": "<p>A watershed model gives the net daily carbon offset of a reforested parcel, in metric tons, as $P(x) = x^3 - 3x^2 + 9x - 27$, where $x$ is a scaled time variable. (a) Find all zeros of $P$, real and complex. (b) Explain how the number of real zeros compares with the degree of $P$, and why the complex zeros must appear as a conjugate pair.</p>",
  "evidence": "A factorization (for example by grouping), all three zeros listed, and explanations invoking the degree and the conjugate-pair fact for real-coefficient polynomials",
  "reveals": "Whether the student expects a cubic to have three zeros counting complex ones, and can recover all of them from structure rather than from a graph alone."
 },
 {
  "id": "S9-24",
  "set": 9,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "The Remainder Theorem",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "The Remainder Theorem — NC.M3.A-APR.2 (know and apply the Remainder Theorem: the remainder of $P(x)$ divided by $x - a$ is $P(a)$)",
  "html": "<p>A community battery cooperative models its net stored energy, in megawatt-hours, $x$ months after a solar expansion by $P(x) = x^3 - 2x^2 - 5x + 6$. (a) Use the Remainder Theorem to find $P(4)$ without substituting into the full cubic term by term — show the synthetic division. (b) Use the Remainder Theorem to decide whether $x - 1$ is a factor of $P(x)$, and interpret what that would mean about the model&#x27;s break-even timing.</p>",
  "evidence": "A synthetic-division computation giving the remainder at $x = 4$, a zero/nonzero remainder test at $x = 1$, and a factor conclusion with a contextual interpretation",
  "reveals": "Whether the student can use the Remainder Theorem as a tool both for evaluation and for factor testing, and connect a zero remainder to a break-even point."
 },
 {
  "id": "S9-25",
  "set": 9,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms using inspection, long division, or synthetic division)",
  "html": "<p>A cooperative&#x27;s average processing cost model requires rewriting $\\dfrac{x^3 - 4x^2 + 2x + 5}{x - 2}$ in the form $Q(x) + \\dfrac{R}{x - 2}$. Perform the division and give the quotient $Q(x)$ and the remainder $R$.</p>",
  "evidence": "A complete division (long or synthetic) with the quotient and remainder identified, and the result written in quotient-plus-remainder form",
  "reveals": "Whether the student can restructure a rational expression to expose its polynomial part and its remaining fractional part."
 },
 {
  "id": "S9-26",
  "set": 9,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Adding rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Adding rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions; understand that rational expressions form a system analogous to rational numbers)",
  "html": "<p>A greenway maintenance fund combines two per-plot fee expressions: $\\dfrac{x}{x - 3} + \\dfrac{2x}{x^2 - 9}$, where $x$ is a fee setting. Add the expressions, simplify the result completely, and state all values of $x$ that must be excluded.</p>",
  "evidence": "A common-denominator rewrite, a combined and factored numerator, a simplified result, and the excluded values taken from the original denominators",
  "reveals": "Whether the student builds a least common denominator from factored forms and tracks domain restrictions from the original expressions."
 },
 {
  "id": "S9-27",
  "set": 9,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations — NC.M3.A-REI.2 (solve simple rational and radical equations in one variable; give examples of how extraneous solutions may arise)",
  "html": "<p>A drainage design formula for a community garden plot reduces to the equation $\\sqrt{x + 7} = x - 5$, where $x$ is a pipe-length setting in feet. Solve the equation, and identify any extraneous solution, explaining why it arises.</p>",
  "evidence": "Isolation of the radical, squaring with a resulting quadratic, both algebraic candidates, a check of each in the original equation, and a stated reason the rejected candidate fails",
  "reveals": "Whether the student knows that squaring can introduce solutions of the \"negative root\" equation and that candidates must be screened in the original equation."
 },
 {
  "id": "S9-28",
  "set": 9,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Solving a system graphically",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Solving a system graphically — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of two equations intersect are the solutions of the system; find approximate solutions graphically)",
  "html": "<p>A town received two bids to maintain its park lighting. Bid A charges a \\$40 service fee plus \\$12 per month. Bid B charges a \\$100 installation fee plus \\$6 per month. (a) Write a cost function for each bid, with $m$ in months. (b) Determine, by solving the system or by sketching both graphs, the number of months at which the two bids cost the same, and that cost. (c) Interpret the intersection: for contracts shorter and longer than that length, which bid is cheaper, and why does the graph show this?</p>",
  "evidence": "Two cost functions, an intersection point with both coordinates, and an interpretation comparing the bids on each side of the intersection",
  "reveals": "Whether the student reads an intersection as a break-even point and can use the graphs' relative positions to make a recommendation."
 },
 {
  "id": "S9-29",
  "set": 9,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>A circular plaza in a town square has area $A = \\pi r^2$, where $r$ is the radius in meters. (a) Rearrange the formula to solve for $r$. (b) The plaza&#x27;s area is $400\\pi$ square meters. Find its radius. (c) A second plaza has area $900\\pi$ square meters. How many times as wide (diameter) is the second plaza compared with the first? Explain why the width ratio is not the same as the area ratio.</p>",
  "evidence": "A correct algebraic isolation of $r$ (including the square root and the positive-root choice), substitutions with units, and a width ratio justified from the two radii",
  "reveals": "Whether the student can treat a multi-variable formula as an equation to be solved for a chosen variable before any numbers are inserted, and whether they see that area scales with the square of a length."
 },
 {
  "id": "S9-30",
  "set": 9,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Zeros, multiplicity, and end behavior",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros, multiplicity, and end behavior — NC.M3.A-APR.3 (identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph)",
  "html": "<p>A lake-level model uses $P(x) = (x - 1)^2(x + 3)$, where $x$ is years since a dam retrofit and $P$ is a scaled level index. (a) Identify all zeros of $P$ and the multiplicity of each. (b) Describe how the graph behaves at each zero — whether it crosses the $x$-axis or touches it and turns around — and justify each answer from the multiplicity. (c) Describe the end behavior of the graph, justifying it from the expanded leading term.</p>",
  "evidence": "Both zeros with multiplicities, a cross-versus-touch description tied to even/odd multiplicity, and an end-behavior statement justified by degree and leading coefficient",
  "reveals": "Whether the student connects the algebraic multiplicity of a zero to the local shape of the graph instead of only listing intercepts."
 },
 {
  "id": "S9-31",
  "set": 9,
  "n": 31,
  "strand": "Functions",
  "topic": "Domain and range of a function",
  "standards": [
   "NC.M3.F-IF.1"
  ],
  "standardsDetail": "Domain and range of a function — NC.M3.F-IF.1 (understand that a function assigns to each input exactly one output; use function notation and interpret domain and range in context)",
  "html": "<p>A graph in the community center&#x27;s annual report shows the water stored in a neighborhood cistern, in gallons, over a 24-hour period. The graph starts at $(0, 400)$, decreases steadily to $(6, 150)$, rises steadily to $(18, 900)$, then falls to $(24, 750)$. (a) State the domain and range of the function shown. (b) Explain what the lowest and highest points of the graph mean for the neighborhood&#x27;s water use.</p>",
  "evidence": "A domain interval in hours, a range interval in gallons read from the extreme points, and contextual meanings for the minimum and maximum",
  "reveals": "Whether the student can extract domain and range from a described graph and attach physical meaning to its extreme values."
 },
 {
  "id": "S9-32",
  "set": 9,
  "n": 32,
  "strand": "Functions",
  "topic": "Interpreting function notation",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Interpreting function notation — NC.M3.F-IF.2 (use function notation, evaluate functions, and interpret statements that use function notation in terms of a context)",
  "html": "<p>A stormwater filter installed in a community parking lot captures sediment at a rate modeled by $S(x) = 0.8x + 12$ kilograms after $x$ scheduled cleanings. (a) Find $S(50)$ and interpret the statement &quot;$S(50)$&quot; in context, including units. (b) Find the value of $x$ for which $S(x) = 92$, and interpret it.</p>",
  "evidence": "A correct evaluation with units and a plain-language reading of it, plus an inverse-style solve with its own interpretation",
  "reveals": "Whether the student moves fluently in both directions — input to output and output back to input — and reads function notation as a statement about the situation."
 },
 {
  "id": "S9-33",
  "set": 9,
  "n": 33,
  "strand": "Functions",
  "topic": "Relating domain to context",
  "standards": [
   "NC.M3.F-IF.5"
  ],
  "standardsDetail": "Relating domain to context — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes)",
  "html": "<p>A community bike-share station starts the morning with 60 bikes. During the morning rush, bikes are checked out at a roughly constant rate, modeled by $B(t) = 60 - 4t$, where $t$ is hours after 6:00 AM. (a) State a reasonable domain for $B$ in this situation and explain both endpoints. (b) State the corresponding range. (c) Why would the unrestricted domain of the line not make sense here?</p>",
  "evidence": "A domain interval with each endpoint justified by the situation (start of the rush; bikes exhausted), the matching range, and a comment on negative bikes or negative time",
  "reveals": "Whether the student restricts a model's domain using the physical situation rather than accepting all real numbers."
 },
 {
  "id": "S9-34",
  "set": 9,
  "n": 34,
  "strand": "Functions",
  "topic": "Graphing piecewise-defined functions",
  "standards": [
   "NC.M3.F-IF.7b"
  ],
  "standardsDetail": "Graphing piecewise-defined functions — NC.M3.F-IF.7b (graph functions expressed symbolically and show key features; graph piecewise-defined functions, including step and absolute value functions)",
  "html": "<p>A trailhead parking lot charges fees modeled by $f(h)$, where $h$ is the number of hours parked: \\$3 for the first 2 hours (or any part of them, up to 2), then \\$1.50 for each additional hour, with the total capped at \\$12. (a) Write $f$ as a piecewise-defined function. (b) Find $f(5)$ and $f(10)$, interpreting each fee. (c) Describe the key features of the graph of $f$: where it is constant, where it increases, and where the cap levels it off.</p>",
  "evidence": "A three-piece definition whose pieces meet consistently at the breakpoints, two evaluated fees with interpretations, and a description of the graph's constant/increasing/capped sections",
  "reveals": "Whether the student can assemble a real pricing rule into a piecewise model and read its graph as a sequence of regimes."
 },
 {
  "id": "S9-35",
  "set": 9,
  "n": 35,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when suitable factorizations are available and showing end behavior)",
  "html": "<p>A hydrologist models net daily flow in a restored creek by $f(x) = x^3 - 5x^2 + 2x + 8$. (a) Show that the zeros of $f$ are $-1$, $2$, and $4$ by writing $f$ in factored form. (b) State the $y$-intercept and the end behavior of the graph. (c) Sketch a rough graph of $f$, labeling the intercepts, and describe the sign of $f$ on the interval $(2, 4)$ in terms of what the graph shows.</p>",
  "evidence": "A verified factorization, the intercepts and end behavior, a labeled rough sketch, and a sign observation read from the sketch",
  "reveals": "Whether the student can coordinate zeros, intercepts, and end behavior into one consistent picture of a cubic."
 },
 {
  "id": "S9-36",
  "set": 9,
  "n": 36,
  "strand": "Functions",
  "topic": "Building functions from a context",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building functions from a context — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities; determine an explicit expression or a recursive process from a context)",
  "html": "<p>A community orchard crew installs bird nest boxes each spring. In year 1 they install 8 boxes, and each year after that they install 3 more boxes than the year before (11 in year 2, 14 in year 3, and so on). (a) Write a recursive formula for $a_n$, the number of boxes installed in year $n$. (b) Write an explicit formula for $a_n$. (c) How many boxes will they install in year 12?</p>",
  "evidence": "A recursive definition with its starting value, an explicit formula, and a correct year-12 value obtained from the explicit form",
  "reveals": "Whether the student can translate a \"start and add\" pattern into both recursive and explicit descriptions and use the explicit one to jump ahead."
 },
 {
  "id": "S9-37",
  "set": 9,
  "n": 37,
  "strand": "Functions",
  "topic": "Transformations and symmetry of functions",
  "standards": [
   "NC.M3.F-BF.3"
  ],
  "standardsDetail": "Transformations and symmetry of functions — NC.M3.F-BF.3 (identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $kf(x)$, $f(kx)$, and $f(x + k)$; recognize even and odd functions from their algebraic expressions)",
  "html": "<p>A climate exhibit displays a baseline temperature-anomaly function $f$, and a second display shows $g(x) = -2f(x - 3) + 1$. (a) Describe, in order, every transformation that maps the graph of $f$ to the graph of $g$. (b) A related function is $h(x) = x^3 - 4x$. Determine whether $h$ is even, odd, or neither, showing the computation of $h(-x)$ and the conclusion it supports.</p>",
  "evidence": "A transformation list naming the shift, reflection, vertical stretch, and vertical shift with directions, plus an $h(-x)$ computation compared against $h(x)$ and $-h(x)$ with a stated verdict",
  "reveals": "Whether the student decodes a transformed function's parameters systematically and tests symmetry algebraically rather than by appearance."
 },
 {
  "id": "S9-38",
  "set": 9,
  "n": 38,
  "strand": "Functions",
  "topic": "Finding inverse functions",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding inverse functions — NC.M3.F-BF.4a (solve an equation of the form $f(x) = c$ for a simple function $f$ that has an inverse and write an expression for the inverse)",
  "html": "<p>A community nursery sells native plants at a weekend market. Its revenue from plant sales, in dollars, is $R(n) = 8n + 40$, where $n$ is the number of plants sold and the \\$40 represents a flat grant that accompanies the sales. (a) Find the inverse function $R^{-1}$, expressing the number of plants sold as a function of revenue. (b) Use the inverse to find how many plants were sold on a day when revenue was \\$360, and explain why the inverse — not $R$ itself — is the right tool for that question.</p>",
  "evidence": "An inverse obtained by solving for the input variable, a correct plant count from the inverse, and an explanation framed in terms of which quantity is known and which is sought",
  "reveals": "Whether the student understands an inverse as swapping the roles of known and unknown quantities, not just as a symbolic routine."
 },
 {
  "id": "S9-39",
  "set": 9,
  "n": 39,
  "strand": "Functions",
  "topic": "Reading inverse values from a table",
  "standards": [
   "NC.M3.F-BF.4c"
  ],
  "standardsDetail": "Reading inverse values from a table — NC.M3.F-BF.4c (read values of an inverse function from a graph or table, given that the function has an inverse)",
  "html": "<p>A parks department table gives $G$, the water used by a community splash pad, in hundreds of gallons, after $x$ hours of operation.</p>\n<table>\n<tr><th>$x$ (hours)</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>\n<tr><td>$G(x)$ (hundreds of gallons)</td><td>3</td><td>7</td><td>12</td><td>20</td><td>31</td></tr>\n</table>\n<p>(a) Use the table to find $G^{-1}(12)$ and $G^{-1}(31)$, and interpret each in context. (b) State $G(4)$ and explain why $G^{-1}(20)$ must have the value it does.</p>",
  "evidence": "Two inverse values read by reversing the table's rows, each interpreted in context, plus a consistency statement linking $G(4)$ and $G^{-1}(20)$",
  "reveals": "Whether the student can reverse a table's input–output direction accurately and interpret the reversed statement physically."
 },
 {
  "id": "S9-40",
  "set": 9,
  "n": 40,
  "strand": "Functions",
  "topic": "Solving exponential equations with logarithms",
  "standards": [
   "NC.M3.F-LE.4"
  ],
  "standardsDetail": "Solving exponential equations with logarithms — NC.M3.F-LE.4 (express as a logarithm the solution to $ab^{ct} = d$ and evaluate the logarithm using technology)",
  "html": "<p>Volunteers restoring a meadow count pollinators and model the population by $P(t) = 240(1.5)^t$, where $t$ is years since restoration began. The restoration is considered successful once the population reaches 2,000. (a) Express the solution of $P(t) = 2000$ as a logarithm. (b) Evaluate it to the nearest hundredth of a year and interpret the result for the volunteers.</p>",
  "evidence": "The exponential isolated, a logarithmic expression for the exact solution, a decimal evaluation, and an interpretation of the waiting time in context",
  "reveals": "Whether the student can invert an exponential model with a logarithm and report a non-integer solution sensibly."
 },
 {
  "id": "S9-41",
  "set": 9,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle)",
  "html": "<p>A lighthouse on the community&#x27;s harbor wall sweeps its beam through an angle of $\\frac{7\\pi}{6}$ radians as it rotates between two markers. (a) Convert $\\frac{7\\pi}{6}$ radians to degrees. (b) A buoy is 150 meters from the lighthouse. Find the exact arc length the beam&#x27;s endpoint traces along the circle of radius 150 meters as it sweeps that angle, and give an approximation to the nearest tenth of a meter.</p>",
  "evidence": "A degree conversion, an application of $s = r\\theta$ with the angle in radians, an exact answer in terms of $\\pi$, and a decimal approximation with units",
  "reveals": "Whether the student treats a radian as a ratio of arc to radius and can move between radian and degree descriptions of the same rotation."
 },
 {
  "id": "S9-42",
  "set": 9,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Relationships among radii and chords",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Relationships among radii and chords — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords; a radius perpendicular to a chord bisects the chord)",
  "html": "<p>A circular plaza in a new community park has radius 13 meters. A straight walkway crosses the plaza as a chord of length 24 meters. The design calls for a support post at the midpoint of the walkway, connected to the plaza&#x27;s center. (a) How far is the walkway from the center of the plaza? Show the right-triangle computation. (b) State the theorem that guarantees the segment from the center to the midpoint is perpendicular to the walkway and that the walkway is bisected there.</p>",
  "evidence": "A right triangle with hypotenuse 13 and leg 12 identified from the bisected chord, the distance computed from the Pythagorean Theorem, and the radius–chord theorem stated",
  "reveals": "Whether the student can convert a chord problem into a right triangle using the bisection property instead of treating the chord length as a single leg."
 },
 {
  "id": "S9-43",
  "set": 9,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Sector area and arc length",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Sector area and arc length — NC.M3.G-C.5 (derive using similarity the fact that the length of the arc intercepted by an angle is proportional to the radius; define radian measure; derive the formula for the area of a sector)",
  "html": "<p>A circular community garden is divided into wedge-shaped plots. One plot is a sector of a circle with radius 12 meters and central angle $150^\\circ$. (a) Find the exact area of the sector and an approximation to the nearest tenth of a square meter. (b) Find the exact length of the curved border (arc) of the plot and an approximation to the nearest tenth of a meter.</p>",
  "evidence": "The sector's fraction of the full circle applied to both area and circumference, exact answers in terms of $\\pi$, and decimal approximations with units",
  "reveals": "Whether the student sees sector area and arc length as the same fraction of two different whole-circle quantities."
 },
 {
  "id": "S9-44",
  "set": 9,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Parabolas from focus and directrix",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Parabolas from focus and directrix — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A community garden&#x27;s solar trough — a long parabolic mirror that heats water flowing along its focal line — has a cross section that is a parabola with focus at $(2, 0)$ and directrix the line $x = -2$ (units in feet, vertex at the origin). (a) Find the equation of the parabola. (b) At the cross-section where $x = 8$ feet, find the width of the trough (the distance between its two rim points).</p>",
  "evidence": "The value of $p$ read from the focus, the standard-form equation for a horizontally opening parabola, and a rim width obtained by solving for $y$ at the given $x$ and doubling",
  "reveals": "Whether the student connects the focus–directrix definition to the standard equation — including a sideways opening — and can extract a physical dimension from it."
 },
 {
  "id": "S9-45",
  "set": 9,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Completing the square for a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Completing the square for a circle — NC.M3.G-GPE.1 (complete the square to find the center and radius of a circle given by an equation)",
  "html": "<p>A community radio station&#x27;s coverage boundary is modeled by the circle $x^2 + y^2 - 6x + 4y - 12 = 0$, with coordinates in miles. (a) Find the center and radius of the circle by completing the square. (b) Interpret the center and radius in terms of the station&#x27;s transmitter and coverage.</p>",
  "evidence": "Both squares completed with the constants balanced on the right side, the center and radius read from the standard form, and a contextual interpretation",
  "reveals": "Whether the student can convert a general-form circle equation into center–radius form accurately, keeping the added constants consistent."
 },
 {
  "id": "S9-46",
  "set": 9,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed quadrilaterals",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed quadrilaterals — NC.M3.G-C.3 (construct and apply properties of inscribed figures in a circle; opposite angles of an inscribed quadrilateral are supplementary)",
  "html": "<p>Four benches stand at points $A$, $B$, $C$, $D$ in order around a circular plaza, forming an inscribed quadrilateral $ABCD$. The angle at bench $A$ is $\\angle A = 3x + 10$ degrees and the angle at the opposite bench $C$ is $\\angle C = 5x - 30$ degrees. (a) Find $x$. (b) Find the measures of $\\angle A$ and $\\angle C$. (c) State the theorem about opposite angles of an inscribed quadrilateral that justifies your equation.</p>",
  "evidence": "A supplementary-angle equation, its solution, both angle measures, and the inscribed-quadrilateral theorem named as the justification",
  "reveals": "Whether the student recognizes a cyclic quadrilateral and applies the supplementary-opposite-angles property rather than a generic quadrilateral angle sum."
 },
 {
  "id": "S9-47",
  "set": 9,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that opposite sides of a parallelogram are congruent)",
  "html": "<p>Let $ABCD$ be a parallelogram, with vertices in order, and draw the diagonal $AC$. Prove that the diagonal creates two congruent triangles and use that to prove the opposite sides are congruent: $AB \\cong CD$ and $AD \\cong CB$. Describe the figure and give a structured proof with reasons.</p>",
  "evidence": "A structured proof using parallel-line alternate interior angles, the shared diagonal as a common side, an ASA congruence statement, and CPCTC applied to both pairs of opposite sides",
  "reveals": "Whether the student can turn the definition of a parallelogram into congruent triangles and then into side congruences, chaining reasons in a valid order."
 },
 {
  "id": "S9-48",
  "set": 9,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles (coordinate proof)",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles (coordinate proof) — NC.M3.G-CO.10 (prove theorems about triangles, including the triangle midsegment theorem)",
  "html": "<p>A triangular community garden has corners at $A(0, 0)$, $B(6, 0)$, and $C(2, 4)$ on a coordinate grid (units in meters). Let $D$ be the midpoint of $\\overline{AB}$ and $E$ the midpoint of $\\overline{AC}$. Use a coordinate proof to show that $\\overline{DE}$ is parallel to $\\overline{BC}$ and that $DE$ is half the length of $BC$: compute both midpoints, both slopes, and both lengths.</p>",
  "evidence": "Both midpoints from the midpoint formula, equal slopes establishing parallelism, and a length comparison from the distance formula showing the factor of one-half",
  "reveals": "Whether the student can carry a geometric theorem with coordinate tools — midpoints, slopes, and distances each doing one specific job in the argument."
 },
 {
  "id": "S9-49",
  "set": 9,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena with trigonometric functions",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena with trigonometric functions — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline)",
  "html": "<p>At a community garden, the longest day of the year has 14.5 hours of daylight and the shortest day has 9.5 hours. The longest day is day 172 of the year. Assume daylight varies sinusoidally with a period of 365 days. (a) Build a function $D(t)$ for the hours of daylight on day $t$, using a cosine model — state how you obtained the midline, amplitude, and phase shift. (b) Use your model to estimate the hours of daylight on day 80, to the nearest tenth of an hour, and comment on why the answer is reasonable for a date near the spring equinox.</p>",
  "evidence": "A model assembled from the midline, amplitude, period, and shift implied by the longest day, an evaluation at day 80, and a reasonableness comment tied to the equinox",
  "reveals": "Whether the student can construct a sinusoidal model from physical descriptions of extremes and timing, rather than only interpreting a model that is handed to them."
 },
 {
  "id": "S9-50",
  "set": 9,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and radian measure",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and radian measure — NC.M3.G-C.5 (derive using similarity the fact that the length of the arc intercepted by an angle is proportional to the radius, and define the radian measure of the angle as the constant of proportionality)",
  "html": "<p>A curved section of a community bike path bends around a circular pond of radius 40 meters through a central angle of $72^\\circ$. (a) Convert $72^\\circ$ to radians. (b) Find the exact length of the curved path and an approximation to the nearest tenth of a meter. (c) Explain, using the definition of radian measure, why doubling the pond&#x27;s radius (with the same angle) would double the path length.</p>",
  "evidence": "A degree-to-radian conversion, an application of $s = r\\theta$, and an explanation that arc length is proportional to radius at fixed angle because the radian measure is the ratio $s/r$",
  "reveals": "Whether the student understands arc length as proportional reasoning anchored in the definition of a radian, not just as a formula to recall."
 },
 {
  "id": "S9-51",
  "set": 9,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a sphere",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a sphere — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A spherical storage tank at a community water facility has radius 4 meters. (a) Find the exact volume of the tank and an approximation to the nearest tenth of a cubic meter. (b) If the tank is three-quarters full, how many cubic meters of water does it hold, to the nearest tenth?</p>",
  "evidence": "Correct use of $V = \\tfrac{4}{3}\\pi r^3$ with the radius cubed, an exact answer in terms of $\\pi$, and a three-quarters computation with units",
  "reveals": "Whether the student applies the sphere formula accurately and carries a fractional-fill step through with units intact."
 },
 {
  "id": "S9-52",
  "set": 9,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A landscaping crew piles mulch in the shape of a right circular cone with radius 3 feet and height 4 feet. (a) Find the exact volume of the pile and an approximation to the nearest tenth of a cubic foot. (b) Mulch is sold by the cubic yard (1 cubic yard = 27 cubic feet). How many cubic yards is the pile, to the nearest tenth?</p>",
  "evidence": "Correct use of $V = \\tfrac{1}{3}\\pi r^2 h$, an exact answer in terms of $\\pi$, and a unit conversion from cubic feet to cubic yards",
  "reveals": "Whether the student handles the one-third factor for a cone and converts between cubic units with the cubed conversion factor."
 },
 {
  "id": "S9-53",
  "set": 9,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Solids generated by rotation",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Solids generated by rotation — NC.M3.G-GMD.4 (identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>A designer is planning two park ornaments by rotating flat shapes around an axis. (a) A right triangle with legs 3 meters (horizontal) and 5 meters (vertical) is rotated about its vertical leg. Identify the solid formed and state its radius and height. (b) A rectangle 4 meters wide and 7 meters tall is rotated about one of its 7-meter sides. Identify the solid formed, and find its exact volume and an approximation to the nearest tenth of a cubic meter.</p>",
  "evidence": "Both solids named with their dimensions traced to the generating shape, and a cylinder volume computed from the rectangle's width as radius",
  "reveals": "Whether the student can visualize a solid of revolution and map the flat shape's measurements onto the solid's radius and height."
 },
 {
  "id": "S9-54",
  "set": 9,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling with geometric shapes — NC.M3.G-MG.1 (use geometric shapes, their measures, and their properties to describe objects and model situations)",
  "html": "<p>A community greenhouse is 10 meters long and 6 meters wide. Its walls rise 3 meters, and its roof is a half-cylinder running the length of the building, with diameter equal to the building&#x27;s width. (a) Model the greenhouse as a rectangular prism topped by a half-cylinder and find the total volume of air inside, exactly in terms of $\\pi$ and approximately to the nearest tenth of a cubic meter. (b) State one assumption of this model.</p>",
  "evidence": "A prism volume, a half-cylinder volume using radius 3 and length 10, a combined total in exact and approximate form, and a stated modeling assumption",
  "reveals": "Whether the student can decompose a real structure into standard solids, assign the correct dimensions to each, and acknowledge the model's idealizations."
 },
 {
  "id": "S9-55",
  "set": 9,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on volume",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on volume — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>A compost facility stores finished compost in a rectangular bin with a volume of 30 cubic meters, and the compost in it has a mass of 2,400 kilograms. (a) Find the density of the compost in kilograms per cubic meter. (b) Assuming the same density, what mass of compost would fill a larger bin of volume 45 cubic meters?</p>",
  "evidence": "A density computed as mass over volume with units, and a proportional scaling to the larger volume",
  "reveals": "Whether the student treats density as a rate that can be applied in either direction — finding the rate, then using it to predict a mass."
 },
 {
  "id": "S9-56",
  "set": 9,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Applying geometry to design problems",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Applying geometry to design problems — NC.M3.G-MG.3 (apply geometric methods to solve design problems, including minimizing material under a constraint)",
  "html": "<p>A community garden committee wants a rectangular plot with area exactly 288 square meters, built against an existing long wall so fencing is needed on only three sides. Let $x$ be the length, in meters, of each side perpendicular to the wall. (a) Write the total fencing $F$ as a function of $x$. (b) Compute $F$ for $x = 8, 12, 16,$ and $24$ meters, and identify which of these uses the least fencing. (c) State the dimensions of the plot that minimize the fencing, and the minimum amount of fencing needed.</p>",
  "evidence": "A fencing function built by expressing the wall-side length from the fixed-area constraint, a table of fencing values, and the minimizing dimensions with the minimum fencing",
  "reveals": "Whether the student can turn a fixed-area design constraint into a rational model and search it for an optimum, rather than only maximizing area for fixed fencing."
 },
 {
  "id": "S9-57",
  "set": 9,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing surveys, experiments, and observational studies",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Comparing surveys, experiments, and observational studies — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization applies in each)",
  "html": "<p>A city wants to know whether a new protected bike lane caused an increase in cycling. Three plans are proposed. Plan 1: survey a random sample of residents about whether they cycle more than last year. Plan 2: count cyclists on the new lane and on a similar street without a lane, every day for a month, without changing anything. Plan 3: before the lane is built, randomly assign half of a set of comparable streets to receive lanes and half to remain as controls, then count cyclists on all of them for a month. (a) Classify each plan as a survey, an observational study, or an experiment. (b) Which plan gives the strongest evidence that the lane <em>caused</em> an increase, and what feature of that plan is responsible? (c) Explain the difference between the random selection in Plan 1 and the random assignment in Plan 3, and what each one allows you to conclude.</p>",
  "evidence": "All three plans classified correctly, the experiment identified as the causal design with random assignment named as the key feature, and a clear contrast between random selection (generalizing to a population) and random assignment (supporting cause and effect)",
  "reveals": "Whether the student distinguishes the two jobs randomization does — representing a population versus balancing groups for a causal comparison."
 },
 {
  "id": "S9-58",
  "set": 9,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing two treatments in a randomized experiment",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing two treatments in a randomized experiment — NC.M3.S-IC.5 (evaluate reports based on two treatments in a randomized experiment; use simulations to decide if differences between parameters are significant)",
  "html": "<p>Gardeners test whether deep watering helps newly planted street trees survive their first summer. Forty trees are randomly assigned to two groups of 20: deep watering or standard watering. By autumn, 17 of the 20 deep-watered trees and 12 of the 20 standard-watered trees have survived. (a) Compute the difference in survival proportions (deep minus standard). (b) To test whether the difference could be due to chance, the gardeners run a simulation: in 500 random reassignments of the outcomes to groups of 20, a difference at least as large as the observed one occurred 18 times. Use this to estimate the probability of seeing such a difference by chance alone. (c) Using a 5% significance threshold, state the conclusion about deep watering, in context.</p>",
  "evidence": "An observed difference of proportions, a simulated probability computed as a count over 500, and a significance conclusion compared against the 5% threshold",
  "reveals": "Whether the student can judge an experimental difference against the variability that random assignment alone would produce."
 },
 {
  "id": "S9-59",
  "set": 9,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Evaluating reports based on data",
  "standards": [
   "NC.M3.S-IC.6"
  ],
  "standardsDetail": "Evaluating reports based on data — NC.M3.S-IC.6 (evaluate reports based on data, identifying flaws in study design, sampling, and question wording)",
  "html": "<p>A developer seeking approval for a shopping center circulates a flyer stating: &quot;In a recent survey, 80% of residents support the new center.&quot; The fine print explains that the survey was conducted by the developer&#x27;s own marketing firm, questioned 60 shoppers <em>inside the town&#x27;s existing mall</em> on a Saturday, and asked: &quot;Do you support bringing more shopping choices and jobs to our town?&quot; (a) Identify at least three distinct problems with this survey as evidence about all town residents. (b) State what conclusion, if any, the survey actually supports.</p>",
  "evidence": "At least three named flaws drawn from the sampling location, the sample's coverage of the population, the sponsor's interest, and the leading wording, plus a narrowed conclusion limited to the people actually surveyed",
  "reveals": "Whether the student reads a headline statistic critically — checking who was asked, who asked, and how the question was phrased before accepting the claim."
 },
 {
  "id": "S9-60",
  "set": 9,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population proportion with a simulation-based margin of error",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population proportion with a simulation-based margin of error — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>A town wants to estimate the proportion of its households that compost kitchen waste. A random sample of 300 households finds that 96 of them compost. To gauge accuracy, the town simulates 200 random samples of size 300 from a model population; the simulated sample proportions have a standard deviation of 0.027. (a) Find the sample proportion. (b) Using a margin of error of about two simulation standard deviations, give an interval of plausible values for the true proportion of households that compost. (c) A council member claims that at least one-third of households compost. Is that claim supported by the interval? Explain.</p>",
  "evidence": "A sample proportion, a margin of error of roughly two standard deviations, a correctly built interval, and a claim judgment based on whether one-third lies inside the interval",
  "reveals": "Whether the student can build a proportion estimate with an honest margin of error and resist a claim that the interval does not fully support."
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
 },
 {
  "id": "S10-21",
  "set": 10,
  "n": 21,
  "strand": "Number & Algebra",
  "topic": "Adding, subtracting, and multiplying complex numbers",
  "standards": [
   "NC.M3.N-CN.3"
  ],
  "standardsDetail": "Adding, subtracting, and multiplying complex numbers — NC.M3.N-CN.3 (add, subtract, and multiply complex numbers)",
  "html": "<p>At an outdoor concert, an audio engineer models two speaker signal components as complex numbers, $A = 4 + 3i$ and $B = 2 - 5i$, where the real part is the in-phase component and the imaginary part is the out-of-phase component. (a) Find the combined signal $A + B$ when both speakers play together. (b) Find $A - B$, which the engineer uses to isolate the difference between the two channels. (c) The mixer multiplies the two components; find $AB$. Write each result in $a + bi$ form.</p>",
  "evidence": "Three computations in $a + bi$ form: componentwise addition, componentwise subtraction with the sign distributed, and a product expanded using $i^2 = -1$ with like terms combined",
  "reveals": "Whether the student treats $i$ as an algebraic quantity with $i^2 = -1$, keeping real and imaginary parts organized through all three basic operations."
 },
 {
  "id": "S10-22",
  "set": 10,
  "n": 22,
  "strand": "Number & Algebra",
  "topic": "Extending polynomial identities to complex numbers",
  "standards": [
   "NC.M3.N-CN.8"
  ],
  "standardsDetail": "Extending polynomial identities to complex numbers — NC.M3.N-CN.8 (use complex numbers in polynomial identities and equations; factor a sum of squares)",
  "html": "<p>Two equations from a laser-show calibration, $x^2 + 49 = 0$ and $9x^2 + 25 = 0$, have no real solutions. (a) Factor $x^2 + 49$ as a product of two linear factors involving $i$, and state the solutions of the first equation. (b) Do the same for $9x^2 + 25$. (c) Verify one of your factorizations by multiplying the factors back together.</p>",
  "evidence": "A difference-of-squares style factorization with $i$ in each factor for both expressions, the conjugate-pair solutions read from the factors, and a multiplication check that recovers the original sum of squares",
  "reveals": "Whether the student sees a sum of squares as factorable once $i$ is allowed — rewriting $a^2 + b^2$ as $(a + bi)(a - bi)$ rather than declaring it prime."
 },
 {
  "id": "S10-23",
  "set": 10,
  "n": 23,
  "strand": "Number & Algebra",
  "topic": "Rewriting rational expressions",
  "standards": [
   "NC.M3.A-APR.6"
  ],
  "standardsDetail": "Rewriting rational expressions — NC.M3.A-APR.6 (rewrite simple rational expressions in different forms using inspection, long division, or technology)",
  "html": "<p>A rectangular mural at a community festival has area, in square feet, modeled by $A(x) = x^3 - 2x^2 + 9x - 18$, and its width is $(x - 2)$ feet. (a) Rewrite the quotient $\\dfrac{A(x)}{x - 2}$ as a polynomial in $x$ — this gives the mural&#x27;s length in feet. (b) Find the width, length, and area of the mural when $x = 5$.</p>",
  "evidence": "A polynomial division (long or synthetic) carried out completely, the quotient identified as the length, and all three quantities evaluated and checked against each other at $x = 5$",
  "reveals": "Whether the student can use polynomial division to turn an area model into a missing dimension, and verify the result numerically."
 },
 {
  "id": "S10-24",
  "set": 10,
  "n": 24,
  "strand": "Number & Algebra",
  "topic": "Interpreting parts of an expression in context",
  "standards": [
   "NC.M3.A-SSE.1"
  ],
  "standardsDetail": "Interpreting parts of an expression in context — NC.M3.A-SSE.1 (interpret parts of an expression, such as terms, factors, and coefficients, in terms of the context)",
  "html": "<p>A school dunk-tank fundraiser&#x27;s daily profit, in dollars, is modeled by $P(x) = -3x^2 + 90x - 200$, where $x$ is the price charged per throw, in dollars. (a) Interpret the meaning of the constant term $-200$ in context. (b) Interpret the term $90x$: what does the coefficient 90 represent about the fundraiser? (c) Explain what the $-3x^2$ term captures about how profit behaves as the price grows, and why a purely linear model would miss it. (d) Find the profit if the price is $\\$5$ per throw.</p>",
  "evidence": "A contextual reading of each of the three terms (fixed cost, per-price revenue effect, diminishing effect of higher prices), plus a correct evaluation of the expression at the given price with units",
  "reveals": "Whether the student reads an algebraic expression as a story about money — fixed costs, rates, and diminishing returns — instead of as disconnected symbols."
 },
 {
  "id": "S10-25",
  "set": 10,
  "n": 25,
  "strand": "Number & Algebra",
  "topic": "Remainder and Factor Theorems",
  "standards": [
   "NC.M3.A-APR.2"
  ],
  "standardsDetail": "Remainder and Factor Theorems — NC.M3.A-APR.2 (know and apply the Remainder Theorem; use the Factor Theorem to test factors)",
  "html": "<p>A bake sale&#x27;s profit, in dollars, from selling $x$ dozen cookies is modeled by $P(x) = 2x^3 - 3x^2 - 8x + 12$. (a) Use the Remainder Theorem to find $P(4)$ without substituting into the full polynomial the long way — show a synthetic division. (b) Interpret $P(4)$ in context. (c) Determine whether $x - 2$ is a factor of $P(x)$, using the Factor Theorem, and justify your answer.</p>",
  "evidence": "A synthetic division with the correct coefficients and remainder, the remainder identified as the function value and interpreted as a profit, and a factor decision justified by evaluating the polynomial at the candidate root",
  "reveals": "Whether the student connects division remainders, function values, and factors as three views of the same fact."
 },
 {
  "id": "S10-26",
  "set": 10,
  "n": 26,
  "strand": "Number & Algebra",
  "topic": "Zeros, multiplicity, and end behavior of polynomials",
  "standards": [
   "NC.M3.A-APR.3"
  ],
  "standardsDetail": "Zeros, multiplicity, and end behavior of polynomials — NC.M3.A-APR.3 (identify zeros of polynomials from factorization; use zeros and end behavior to sketch graphs)",
  "html": "<p>During a town festival, the deviation between actual hourly attendance and the predicted average, in hundreds of people, is modeled for the hours after the gates open by $f(x) = (x + 3)(x - 1)(x - 2)$, where $x$ is hours after opening. (a) Find all zeros of $f$ and the multiplicity of each. (b) Describe the end behavior of the graph. (c) Sketch the graph, showing intercepts and the general shape. (d) Which zeros are meaningful in context, and what do they say about attendance? Also state one reason the end behavior makes the model unrealistic for large $x$.</p>",
  "evidence": "The zeros read from the factored form with multiplicities, end behavior from the degree and leading coefficient, a sketch consistent with both, and a contextual filtering of the zeros plus a model-limitation comment",
  "reveals": "Whether the student can move from a factored polynomial to a graph's skeleton — and then judge which features of that graph the real situation actually allows."
 },
 {
  "id": "S10-27",
  "set": 10,
  "n": 27,
  "strand": "Number & Algebra",
  "topic": "Dividing rational expressions",
  "standards": [
   "NC.M3.A-APR.7"
  ],
  "standardsDetail": "Dividing rational expressions — NC.M3.A-APR.7 (add, subtract, multiply, and divide rational expressions)",
  "html": "<p>A juice stand&#x27;s recipe-scaling calculation produces the expression $\\dfrac{6x}{x^2 - 1} \\div \\dfrac{3x^2}{x + 1}$, where $x$ is a positive batch-size factor. (a) Rewrite the division as multiplication by a reciprocal and factor all polynomials. (b) Simplify to lowest terms. (c) State all excluded values of $x$ and explain where each one comes from.</p>",
  "evidence": "A reciprocal rewrite, complete factoring of the difference of squares, cancellation of common factors only, a simplified single fraction, and excluded values traced to both original denominators and the divisor",
  "reveals": "Whether the student handles rational division as structured factoring and cancellation while tracking the domain restrictions the original expression carries."
 },
 {
  "id": "S10-28",
  "set": 10,
  "n": 28,
  "strand": "Number & Algebra",
  "topic": "Solving radical equations",
  "standards": [
   "NC.M3.A-REI.2"
  ],
  "standardsDetail": "Solving radical equations — NC.M3.A-REI.2 (solve rational and radical equations in one variable, including equations with extraneous solutions)",
  "html": "<p>A stage crew rigs a celebration banner so that a diagonal cable&#x27;s length, $\\sqrt{2x + 6}$ feet, must equal a horizontal offset of $x - 1$ feet, where $x$ is a rigging measurement in feet. (a) Solve the equation $\\sqrt{2x + 6} = x - 1$. (b) Check each candidate solution in the original equation and identify any extraneous solution. (c) State the rigging measurement the crew should use and the cable length it gives.</p>",
  "evidence": "Isolation and squaring of the radical, a quadratic solved by factoring, both candidates checked in the unsquared equation, the extraneous candidate rejected with a reason, and the accepted measurement with its cable length and units",
  "reveals": "Whether the student understands that squaring can manufacture solutions, and verifies candidates instead of reporting the quadratic's roots as the final answer."
 },
 {
  "id": "S10-29",
  "set": 10,
  "n": 29,
  "strand": "Number & Algebra",
  "topic": "Systems solved graphically; meaning of intersection points",
  "standards": [
   "NC.M3.A-REI.11"
  ],
  "standardsDetail": "Systems solved graphically; meaning of intersection points — NC.M3.A-REI.11 (explain why the $x$-coordinates of the points where the graphs of $y = f(x)$ and $y = g(x)$ intersect are the solutions of $f(x) = g(x)$)",
  "html": "<p>At a plaza celebration, a decorative fountain&#x27;s water arc is modeled by $y = -x^2 + 6x$, where $x$ is the horizontal distance in feet from the nozzle and $y$ is the height of the water in feet. A banner hangs at a constant height of 8 feet across the plaza. (a) Graph the water arc and the line $y = 8$ on the same axes. (b) Find the points where the water arc reaches the banner&#x27;s height. (c) Explain why the $x$-coordinates of the intersection points are the solutions of $-x^2 + 6x = 8$, and state what those $x$-values mean for the fountain display.</p>",
  "evidence": "A parabola and horizontal line graphed together, both intersection points found (graphically or by solving the equation), an explanation tying intersections to the equation $f(x) = g(x)$, and a contextual statement of the two distances",
  "reveals": "Whether the student understands an intersection of a curve and a line as the set of inputs where two height models agree — not just as a picture."
 },
 {
  "id": "S10-30",
  "set": 10,
  "n": 30,
  "strand": "Number & Algebra",
  "topic": "Rearranging formulas",
  "standards": [
   "NC.M3.A-CED.4"
  ],
  "standardsDetail": "Rearranging formulas — NC.M3.A-CED.4 (rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations)",
  "html": "<p>For a harvest festival, a cylindrical grain silo is painted as a mural. Its total surface area is given by $S = 2\\pi r^2 + 2\\pi r h$, where $r$ is the radius and $h$ is the height, both in feet. (a) Rearrange the formula to solve for $h$. (b) The silo&#x27;s radius is 3 feet and its total surface area is $84\\pi$ square feet. Use your rearranged formula to find its height.</p>",
  "evidence": "A correctly isolated $h$ with the area of the two circular ends subtracted before dividing by the remaining coefficient, followed by a substitution that produces the height in feet",
  "reveals": "Whether the student can solve a formula for one variable when that variable appears inside a sum of terms — undoing operations in the right order before using numbers."
 },
 {
  "id": "S10-31",
  "set": 10,
  "n": 31,
  "strand": "Functions",
  "topic": "Evaluating functions and solving function equations",
  "standards": [
   "NC.M3.F-IF.2"
  ],
  "standardsDetail": "Evaluating functions and solving function equations — NC.M3.F-IF.2 (use function notation, evaluate functions, and interpret statements that use function notation in terms of context)",
  "html": "<p>Attendance at a park concert, in tens of people, is modeled by $A(t) = -2t^2 + 40t + 10$, where $t$ is the number of hours after the gates open. (a) Find $A(3)$ and interpret it in context. (b) Solve $A(t) = 130$ and interpret both solutions, including whether each makes sense for the concert. (c) Explain in one sentence what $A(0)$ represents.</p>",
  "evidence": "A substitution with the result interpreted in people, a quadratic equation solved and both roots interpreted against the concert's timeframe, and the initial value read as attendance at opening",
  "reveals": "Whether the student moves fluently in both directions with function notation — input to output and output back to input — while keeping the concert context attached."
 },
 {
  "id": "S10-32",
  "set": 10,
  "n": 32,
  "strand": "Functions",
  "topic": "Key features of functions in context",
  "standards": [
   "NC.M3.F-IF.4"
  ],
  "standardsDetail": "Key features of functions in context — NC.M3.F-IF.4 (interpret key features of graphs — intercepts, intervals of increase/decrease, maxima — in context; calculate and interpret average rate of change)",
  "html": "<p>A hot-air balloon giving rides at a fall festival follows this flight: it leaves the ground, rises steadily to 300 feet over the first 15 minutes, cruises level at 300 feet for the next 10 minutes, then descends steadily, landing 45 minutes after launch. Let $h(t)$ be the height in feet $t$ minutes after launch. (a) State the $t$- and $h$-intercepts of the graph and what each means. (b) On what intervals is the function increasing, constant, and decreasing? (c) What is the maximum value of the function, and over what interval is it attained? (d) Describe the average rate of change of height during the descent.</p>",
  "evidence": "Both intercepts with meanings, the three interval types matched to flight phases, the maximum value with its plateau interval, and a signed average rate of change for the descent computed from the endpoints",
  "reveals": "Whether the student reads a graph as a flight story — takeoff, cruising, landing — with each formal feature tied to a physical phase."
 },
 {
  "id": "S10-33",
  "set": 10,
  "n": 33,
  "strand": "Functions",
  "topic": "Domain and range related to context",
  "standards": [
   "NC.M3.F-IF.5"
  ],
  "standardsDetail": "Domain and range related to context — NC.M3.F-IF.5 (relate the domain of a function to its graph and to the quantitative relationship it describes)",
  "html": "<p>For a summer kickoff party, a community pool is filled by a pump that adds water at a constant rate. The volume of water in the pool, in gallons, $t$ hours after the pump starts is $W(t) = 150t + 200$. The pool&#x27;s capacity is 5,000 gallons. (a) Explain what the 200 and the 150 each represent. (b) Find how long the pump must run to fill the pool completely. (c) State an appropriate domain and range for $W$ in this situation, and explain why values outside the domain do not make sense even though the formula would produce them.</p>",
  "evidence": "The initial volume and fill rate identified from the equation, a solution of the capacity equation, and domain/range intervals justified by the pump starting and the pool reaching capacity",
  "reveals": "Whether the student treats domain as a fact about the situation — a pump that starts and a pool that fills — rather than as \"all real numbers\" by default."
 },
 {
  "id": "S10-34",
  "set": 10,
  "n": 34,
  "strand": "Functions",
  "topic": "Graphing polynomial functions",
  "standards": [
   "NC.M3.F-IF.7c"
  ],
  "standardsDetail": "Graphing polynomial functions — NC.M3.F-IF.7c (graph polynomial functions, identifying zeros when factorable and showing end behavior)",
  "html": "<p>A winter festival&#x27;s temperature deviation from the daily average, in degrees Fahrenheit, is modeled by $f(x) = (x - 1)(x - 4)(x + 2)$, where $x$ is the number of days since the festival opened. (a) Find the zeros of $f$ and the $y$-intercept. (b) Describe the end behavior. (c) Sketch the graph of $f$, labeling the intercepts. (d) Interpret the zeros in context.</p>",
  "evidence": "Zeros read from the factored form, the $y$-intercept from evaluating at zero, end behavior from the leading term, a sketch consistent with all of these, and the zeros read as days when temperature equaled the average",
  "reveals": "Whether the student assembles the standard landmarks of a cubic — roots, intercept, end behavior — into one coherent graph and reads it back into the situation."
 },
 {
  "id": "S10-35",
  "set": 10,
  "n": 35,
  "strand": "Functions",
  "topic": "Graphing exponential functions",
  "standards": [
   "NC.M3.F-IF.7e"
  ],
  "standardsDetail": "Graphing exponential functions — NC.M3.F-IF.7e (graph exponential and logarithmic functions, showing intercepts and end behavior)",
  "html": "<p>Hot cider served at an autumn festival cools according to $T(t) = 70 + 110(0.85)^t$, where $T$ is the temperature in degrees Fahrenheit $t$ minutes after pouring. (a) Find the initial temperature and interpret it. (b) State the horizontal asymptote of the graph and explain what it represents physically. (c) Find the temperature after 10 minutes, to the nearest tenth. (d) State the domain and range appropriate to the model and sketch the graph&#x27;s shape.</p>",
  "evidence": "The initial value from $T(0)$, the asymptote identified as room temperature, a decay evaluation with units, and domain/range consistent with a cooling drink, with a decreasing graph approaching the asymptote",
  "reveals": "Whether the student reads an exponential decay model as a cooling story — starting temperature, room-temperature floor, and values in between."
 },
 {
  "id": "S10-36",
  "set": 10,
  "n": 36,
  "strand": "Functions",
  "topic": "Comparing functions in different representations",
  "standards": [
   "NC.M3.F-IF.9"
  ],
  "standardsDetail": "Comparing functions in different representations — NC.M3.F-IF.9 (compare properties of two functions each represented in a different way)",
  "html": "<p>Two face-painting booths at a school fair track their costs for serving $x$ customers. Booth A&#x27;s cost is given by the equation $C_A(x) = 5x + 60$ dollars. Booth B&#x27;s costs are shown in the table.</p>\n<table>\n<tr><th>$x$ (customers)</th><th>0</th><th>10</th><th>20</th><th>30</th></tr>\n<tr><td>$C_B(x)$ (dollars)</td><td>50</td><td>130</td><td>210</td><td>290</td></tr>\n</table>\n<p>(a) Find Booth B&#x27;s initial cost and its cost per customer from the table. (b) Compare the two booths&#x27; initial costs and per-customer costs. (c) Determine for what numbers of customers Booth A is cheaper, showing your reasoning.</p>",
  "evidence": "A rate and initial value extracted from the table, a side-by-side comparison of both properties for the two booths, and a break-even solution used to state which booth wins on each side of it",
  "reveals": "Whether the student can pull the same two features — starting value and rate — out of an equation and a table and use them to make a genuine comparison."
 },
 {
  "id": "S10-37",
  "set": 10,
  "n": 37,
  "strand": "Functions",
  "topic": "Building functions from patterns; arithmetic sequences",
  "standards": [
   "NC.M3.F-BF.1a"
  ],
  "standardsDetail": "Building functions from patterns; arithmetic sequences — NC.M3.F-BF.1a (write a function that describes a relationship between two quantities; write arithmetic sequences recursively and explicitly)",
  "html": "<p>For an amphitheater concert series, the first row of a seating section has 14 seats, and each row after the first has 4 more seats than the row before it. Let $a_n$ be the number of seats in row $n$. (a) Write a recursive formula for $a_n$. (b) Write an explicit formula for $a_n$. (c) How many seats are in row 18? (d) Explain in one sentence why this sequence is a function of the row number.</p>",
  "evidence": "A recursive rule with the first term stated, an explicit rule built from the first term and common difference, an evaluation at the requested row, and a uniqueness statement linking rows to seat counts",
  "reveals": "Whether the student can describe the same growing pattern two ways — step-by-step and directly — and use the direct form efficiently."
 },
 {
  "id": "S10-38",
  "set": 10,
  "n": 38,
  "strand": "Functions",
  "topic": "Combining standard function types",
  "standards": [
   "NC.M3.F-BF.1b"
  ],
  "standardsDetail": "Combining standard function types — NC.M3.F-BF.1b (combine standard function types using arithmetic operations to model a situation)",
  "html": "<p>A neighborhood block party&#x27;s costs depend on how many hours $h$ the party runs. The entertainment cost is $E(h) = 250 + 45h$ dollars, and the food-and-staffing cost is $F(h) = 180 + 65h$ dollars. (a) Build the combined cost function $T(h) = E(h) + F(h)$ and simplify it. (b) Find the total cost of a 5-hour party. (c) Interpret the constant term and the coefficient of $h$ in your combined function.</p>",
  "evidence": "A sum function with like terms combined, an evaluation at the given duration with units, and both parameters of the combined model interpreted as fixed and hourly costs",
  "reveals": "Whether the student sees function addition as combining two real cost streams into one budget model whose parameters still mean something."
 },
 {
  "id": "S10-39",
  "set": 10,
  "n": 39,
  "strand": "Functions",
  "topic": "Finding an inverse function",
  "standards": [
   "NC.M3.F-BF.4a"
  ],
  "standardsDetail": "Finding an inverse function — NC.M3.F-BF.4a (find inverse functions; solve an equation of the form $f(x) = c$ for a linear function)",
  "html": "<p>A community celebration sells tickets through a box office that charges a $\\$5$ processing fee per order. The total cost of an order of $n$ tickets is $C(n) = 12n + 5$ dollars. (a) Find a formula for the inverse function $C^{-1}$. (b) Use the inverse to find how many tickets are in an order that cost $\\$245$. (c) Explain what the inverse function takes as input and gives as output, in words.</p>",
  "evidence": "An inverse derived by swapping the variables and solving, an evaluation of the inverse at the given cost yielding a whole number of tickets, and a verbal statement of the input/output swap",
  "reveals": "Whether the student can build an inverse to answer the reverse question — from total paid back to tickets bought — and say what the inverse actually does."
 },
 {
  "id": "S10-40",
  "set": 10,
  "n": 40,
  "strand": "Functions",
  "topic": "Verifying inverses by composition",
  "standards": [
   "NC.M3.F-BF.4b"
  ],
  "standardsDetail": "Verifying inverses by composition — NC.M3.F-BF.4b (verify by composition that one function is the inverse of another)",
  "html": "<p>A photo booth at a graduation party charges a $\\$4$ sitting fee plus $\\$2$ per print, so the cost of $x$ prints is $f(x) = 2x + 4$ dollars. A student claims the inverse function is $g(x) = \\dfrac{x - 4}{2}$. (a) Compute $f(g(x))$ and simplify. (b) Compute $g(f(x))$ and simplify. (c) State whether the claim is correct and what your two computations prove.</p>",
  "evidence": "Both compositions carried out with the inner function substituted and simplified to $x$, and a conclusion that ties the two identity results to the definition of inverse functions",
  "reveals": "Whether the student treats \"inverse\" as a claim that must be verified in both directions, not a formula to take on faith."
 },
 {
  "id": "S10-41",
  "set": 10,
  "n": 41,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Radian measure and arc length",
  "standards": [
   "NC.M3.F-TF.1"
  ],
  "standardsDetail": "Radian measure and arc length — NC.M3.F-TF.1 (understand radian measure of an angle as the length of the arc on the unit circle; convert between radians and degrees)",
  "html": "<p>A spinning prize wheel at a carnival has a radius of 2 feet. A ribbon tied to a point on the rim starts at the top, and the wheel rotates through an angle of $\\frac{5\\pi}{6}$ radians. (a) Convert $\\frac{5\\pi}{6}$ radians to degrees. (b) Find the distance along the rim that the ribbon travels during this rotation. (c) Explain in one sentence why radian measure makes the arc-length computation a single multiplication.</p>",
  "evidence": "A degree conversion using the $\\pi = 180^\\circ$ relationship, an arc length from $s = r\\theta$ with the angle in radians, and an explanation connecting radians to the arc-length definition",
  "reveals": "Whether the student understands radians as arc length per unit radius — the reason $s = r\\theta$ works — rather than as a conversion chore."
 },
 {
  "id": "S10-42",
  "set": 10,
  "n": 42,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Trigonometric functions on the unit circle",
  "standards": [
   "NC.M3.F-TF.2"
  ],
  "standardsDetail": "Trigonometric functions on the unit circle — NC.M3.F-TF.2 (explain how the unit circle enables extending trigonometric functions to all real numbers; find values using reference angles and quadrants)",
  "html": "<p>A rotating searchlight at a night festival sweeps a beam whose direction makes an angle of $\\theta = \\frac{5\\pi}{4}$ with the positive horizontal axis. A point where the beam crosses a unit-circle reference ring has coordinates $(\\cos\\theta, \\sin\\theta)$. (a) Find the exact values of $\\sin\\frac{5\\pi}{4}$ and $\\cos\\frac{5\\pi}{4}$. (b) State the coordinates of the point and the quadrant in which it lies, explaining how the signs follow from the quadrant. (c) The light keeps rotating; explain why the coordinates at $\\theta = \\frac{5\\pi}{4} + 2\\pi$ are the same.</p>",
  "evidence": "Exact sine and cosine values from the reference angle $\\frac{\\pi}{4}$, the point's coordinates with signs justified by the quadrant, and a periodicity explanation based on full rotations",
  "reveals": "Whether the student uses the unit circle as the definition of sine and cosine for any angle — signs from position, values from the reference angle, repetition from rotation."
 },
 {
  "id": "S10-43",
  "set": 10,
  "n": 43,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Modeling periodic phenomena with trigonometric functions",
  "standards": [
   "NC.M3.F-TF.5"
  ],
  "standardsDetail": "Modeling periodic phenomena with trigonometric functions — NC.M3.F-TF.5 (choose trigonometric functions to model periodic phenomena; interpret amplitude, period, and midline)",
  "html": "<p>At a harbor regatta, the water depth at a dock varies sinusoidally over each 12-hour tidal cycle. The depth reaches a maximum of 14 feet and a minimum of 6 feet. At $t = 0$ hours the depth is at its maximum. (a) Determine the midline, amplitude, and period of the depth function $D(t)$. (b) Write a cosine model for $D(t)$. (c) Find the depth at $t = 3$ hours. (d) At what time in the first cycle is the depth first at its minimum?</p>",
  "evidence": "Midline and amplitude computed from the maximum and minimum, the period stated from the cycle length, a cosine model starting at its maximum, and two evaluations tied to positions in the cycle",
  "reveals": "Whether the student can construct a sinusoid from physical extremes — building the model, not just reading one that is handed to them."
 },
 {
  "id": "S10-44",
  "set": 10,
  "n": 44,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about triangles",
  "standards": [
   "NC.M3.G-CO.10"
  ],
  "standardsDetail": "Proving theorems about triangles — NC.M3.G-CO.10 (prove theorems about triangles, including the exterior angle theorem)",
  "html": "<p>Triangular pennants strung across a festival street are checked against a design rule based on this claim: the measure of an exterior angle of a triangle equals the sum of the measures of the two non-adjacent (remote) interior angles. Prove the claim: in $\\triangle ABC$, the side $BC$ is extended past $C$ to a point $D$, forming the exterior angle $\\angle ACD$. Prove that $m\\angle ACD = m\\angle A + m\\angle B$.</p>",
  "evidence": "A structured proof (two-column or paragraph) that uses the triangle angle-sum theorem on $\\angle A + \\angle B + \\angle ACB$ and the linear-pair relationship between $\\angle ACB$ and $\\angle ACD$, then equates the two expressions for $180^\\circ$",
  "reveals": "Whether the student can build a proof by writing the same quantity ($180^\\circ$) two different ways and letting algebra finish the argument."
 },
 {
  "id": "S10-45",
  "set": 10,
  "n": 45,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Proving theorems about parallelograms",
  "standards": [
   "NC.M3.G-CO.11"
  ],
  "standardsDetail": "Proving theorems about parallelograms — NC.M3.G-CO.11 (prove theorems about parallelograms, including that the diagonals of a parallelogram bisect each other)",
  "html": "<p>A parallelogram-shaped kite frame is checked for quality by measuring from the crossing point of its diagonals. Prove the fact the check relies on: in parallelogram $ABCD$, the diagonals $AC$ and $BD$ intersect at point $E$. Prove that $E$ is the midpoint of both diagonals, that is, $AE \\cong CE$ and $BE \\cong DE$.</p>",
  "evidence": "A structured proof establishing a pair of congruent triangles (using alternate interior angles from the parallel sides and a pair of opposite sides known to be congruent) and concluding with CPCTC that the diagonal segments match in pairs",
  "reveals": "Whether the student can turn a parallelogram's parallel structure into congruent triangles and then into a measurement guarantee a builder can use."
 },
 {
  "id": "S10-46",
  "set": 10,
  "n": 46,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed angles and angles in a semicircle",
  "standards": [
   "NC.M3.G-C.2"
  ],
  "standardsDetail": "Inscribed angles and angles in a semicircle — NC.M3.G-C.2 (identify and describe relationships among inscribed angles, radii, and chords, including that an angle inscribed in a semicircle is a right angle)",
  "html": "<p>A circular fountain has a straight walkway built along a diameter $AB$ of the circle. A point $C$ on the circle is connected to $A$ and $B$ by two straight hedge rows, forming $\\triangle ABC$ inscribed in the circle. The measure of arc $AC$ is $70^\\circ$. (a) Find $m\\angle ACB$ and name the theorem that gives it. (b) Find $m\\angle ABC$. (c) Find $m\\angle BAC$ in two ways: using the triangle angle sum, and using an intercepted arc.</p>",
  "evidence": "A right angle at $C$ justified by the semicircle theorem, an inscribed angle computed as half its intercepted arc, and the third angle found by both the angle-sum route and the intercepted-arc route with matching results",
  "reveals": "Whether the student coordinates several circle theorems at once — semicircle, inscribed angle, and arcs — and cross-checks one result with another."
 },
 {
  "id": "S10-47",
  "set": 10,
  "n": 47,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Inscribed and circumscribed circles of a triangle",
  "standards": [
   "NC.M3.G-C.3"
  ],
  "standardsDetail": "Inscribed and circumscribed circles of a triangle — NC.M3.G-C.3 (construct and describe the inscribed and circumscribed circles of a triangle; identify circumcenter and incenter and their properties)",
  "html": "<p>A triangular plaza for a food-truck festival has corners at $P(0, 0)$, $Q(8, 0)$, and $R(0, 6)$ on a coordinate grid where units are feet. (a) A decorative light post must be placed at a point equidistant from all three corners of the plaza. Find its coordinates and its distance from each corner, and name the point you found. (b) A circular medallion is to be inscribed in the triangular plaza, tangent to all three sides. Find the radius of the largest such circle and the coordinates of its center, and name that center. (c) Explain in one sentence how the two centers differ in what they are equidistant from.</p>",
  "evidence": "The circumcenter located (for this right triangle, at the midpoint of the hypotenuse) with the common distance to the vertices, the incenter located using its equal distance from the sides with the inradius computed, and a vertices-versus-sides contrast in the explanation",
  "reveals": "Whether the student distinguishes the two classic triangle centers by their defining equidistance — from vertices for one, from sides for the other — and can locate both in a concrete layout."
 },
 {
  "id": "S10-48",
  "set": 10,
  "n": 48,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Arc length and proportionality to radius",
  "standards": [
   "NC.M3.G-C.5"
  ],
  "standardsDetail": "Arc length and proportionality to radius — NC.M3.G-C.5 (derive, using similarity, the fact that the length of the arc intercepted by an angle is proportional to the radius; use $s = r\\theta$)",
  "html": "<p>A curved ribbon banner follows an arc of a circle at a festival entrance. The banner&#x27;s arc length is $9\\pi$ feet and its central angle is $\\frac{3\\pi}{4}$ radians. (a) Find the radius of the circle the banner follows. (b) A matching smaller banner follows an arc with the same central angle on a circle of radius 4 feet. Find its arc length. (c) State the ratio of the two arc lengths and the ratio of the two radii, and explain what this illustrates about arc length and radius.</p>",
  "evidence": "The radius recovered from $s = r\\theta$, the smaller arc length from the same formula, and the two ratios shown equal with a statement that arc length scales in direct proportion to radius for a fixed angle",
  "reveals": "Whether the student uses the arc-length relationship in both directions and recognizes it as a proportionality that comes from the similarity of circles."
 },
 {
  "id": "S10-49",
  "set": 10,
  "n": 49,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Equation of a circle",
  "standards": [
   "NC.M3.G-GPE.1"
  ],
  "standardsDetail": "Equation of a circle — NC.M3.G-GPE.1 (derive and use the equation of a circle; complete the square to find the center and radius)",
  "html": "<p>On a coordinate map of a fairground (units in feet), the boundary of a circular plaza is modeled by the equation $x^2 + y^2 - 6x + 4y - 12 = 0$. (a) Rewrite the equation in standard form by completing the square, and state the plaza&#x27;s center and radius. (b) A food truck is parked at the point $(7, 1)$. Determine whether the truck is inside the plaza, on its boundary, or outside it, showing your reasoning. (c) Interpret the radius in context.</p>",
  "evidence": "Both squared variables completed with the constant adjusted, center and radius read from standard form, a distance computation from the center to the truck compared with the radius, and a placement conclusion",
  "reveals": "Whether the student can convert a general-form circle equation into geometric information and use distance to make a location decision."
 },
 {
  "id": "S10-50",
  "set": 10,
  "n": 50,
  "strand": "Trigonometry, Proof & Circles",
  "topic": "Deriving the equation of a parabola",
  "standards": [
   "NC.M3.G-GPE.2"
  ],
  "standardsDetail": "Deriving the equation of a parabola — NC.M3.G-GPE.2 (derive the equation of a parabola given a focus and directrix)",
  "html": "<p>A parabolic reflector for a solar-oven demonstration at a green-energy festival has its focus at $(3, 0)$ and its directrix along the line $x = -3$ (units in feet, vertex at the origin, axis horizontal). (a) Derive the equation of the parabola by setting the distance from a general point $(x, y)$ on the reflector to the focus equal to its distance to the directrix, and simplifying. (b) The reflector&#x27;s rim passes through the vertical line $x = 3$. Find the two rim points on that line and the reflector&#x27;s width there.</p>",
  "evidence": "A distance-equality equation for a horizontal parabola, squaring and simplification to a $y^2 = (\\text{constant})x$ form, and rim points found by substitution with the width computed as a distance",
  "reveals": "Whether the student can carry out the focus–directrix derivation in a new orientation, letting the definition — not a memorized template — produce the equation."
 },
 {
  "id": "S10-51",
  "set": 10,
  "n": 51,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a cone",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a cone — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A snow-cone stand at a summer festival serves shaved ice in a conical cup with a radius of 2 inches and a height of 5 inches, filled level with the rim. (a) Find the exact volume of one serving in terms of $\\pi$, and its approximation to the nearest tenth of a cubic inch. (b) The stand&#x27;s ice supply is measured in gallons, and 1 gallon $= 231$ cubic inches. How many full servings can the stand make from 1 gallon of ice? Justify the rounding.</p>",
  "evidence": "The cone volume formula applied with the correct radius and height, exact and approximate volumes, a division by the serving volume, and the count rounded down with a reason tied to full servings",
  "reveals": "Whether the student applies the cone formula accurately and handles a \"how many full ones\" decision the way the situation demands."
 },
 {
  "id": "S10-52",
  "set": 10,
  "n": 52,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Volume of a pyramid",
  "standards": [
   "NC.M3.G-GMD.3"
  ],
  "standardsDetail": "Volume of a pyramid — NC.M3.G-GMD.3 (use volume formulas for cylinders, pyramids, cones, and spheres to solve problems)",
  "html": "<p>A pyramid-shaped candle sold at a holiday market has a square base with edge length 6 inches and a height of 9 inches. (a) Find the volume of wax in the candle. (b) The candle maker melts one candle down and pours the wax into a cube-shaped mold. Find the edge length of the cube that the wax would exactly fill, to the nearest hundredth of an inch.</p>",
  "evidence": "The pyramid volume computed from the base area and height with the $\\frac{1}{3}$ factor, and a cube edge found by taking the cube root of the same volume, with units throughout",
  "reveals": "Whether the student conserves volume across a change of shape — computing it for a pyramid and then re-expressing it as a cube."
 },
 {
  "id": "S10-53",
  "set": 10,
  "n": 53,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Cross sections and solids of rotation",
  "standards": [
   "NC.M3.G-GMD.4"
  ],
  "standardsDetail": "Cross sections and solids of rotation — NC.M3.G-GMD.4 (identify the shapes of two-dimensional cross sections of three-dimensional objects and identify three-dimensional objects generated by rotations of two-dimensional objects)",
  "html": "<p>A round cheese wheel is served at a harvest celebration, and a conical party hat sits on the table beside it. (a) The cheese wheel is a cylinder. Describe the two-dimensional shape of the cross section made by a slice parallel to its circular faces, and by a slice that passes through its central axis perpendicular to the faces. (b) A right triangle is rotated about one of its legs. Name the solid generated, and identify which parts of the triangle become the solid&#x27;s height and radius. (c) A rectangle is rotated about one of its sides. Name the solid generated.</p>",
  "evidence": "Two cross-section shapes correctly named for the cylinder cuts, the rotated triangle identified as a cone with the legs' roles assigned, and the rotated rectangle identified as a cylinder",
  "reveals": "Whether the student can move between 2D and 3D in both directions — slicing solids into shapes and spinning shapes into solids."
 },
 {
  "id": "S10-54",
  "set": 10,
  "n": 54,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Modeling objects with geometric shapes",
  "standards": [
   "NC.M3.G-MG.1"
  ],
  "standardsDetail": "Modeling objects with geometric shapes — NC.M3.G-MG.1 (use geometric shapes and their measures to describe and model objects)",
  "html": "<p>For a fall festival bonfire, each log is cut to a length of 6 feet and is approximately cylindrical with a radius of 0.4 feet. (a) Model one log with a geometric solid and find its volume, in exact form and to the nearest hundredth of a cubic foot. (b) State one assumption your model makes about a real log, and whether the true volume is likely larger or smaller than your result.</p>",
  "evidence": "A cylinder chosen as the model with the volume formula applied, exact and approximate results with units, and a stated modeling assumption (such as uniform radius or ignoring bark and taper) with a direction for the error",
  "reveals": "Whether the student can choose a solid to stand in for a real object, compute with it, and critique the fit between model and reality."
 },
 {
  "id": "S10-55",
  "set": 10,
  "n": 55,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Density based on area",
  "standards": [
   "NC.M3.G-MG.2"
  ],
  "standardsDetail": "Density based on area — NC.M3.G-MG.2 (apply concepts of density based on area and volume in modeling situations)",
  "html": "<p>Organizers of a riverside festival expect 12,000 attendees spread over festival grounds of 3 acres. (1 acre $= 43{,}560$ square feet.) A safety guideline recommends at least 5 square feet of open ground per attendee. (a) Find the total area of the grounds in square feet. (b) Find the number of square feet available per attendee, to the nearest tenth. (c) Decide whether the expected crowd satisfies the guideline, and find the maximum number of attendees the grounds could hold under the guideline.</p>",
  "evidence": "An acre-to-square-feet conversion, a per-attendee area computed by division, a comparison against the guideline, and a capacity found from the same density relationship",
  "reveals": "Whether the student uses density as a two-way tool — checking a given crowd and solving for a safe capacity."
 },
 {
  "id": "S10-56",
  "set": 10,
  "n": 56,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Design problems solved with geometric methods",
  "standards": [
   "NC.M3.G-MG.3"
  ],
  "standardsDetail": "Design problems solved with geometric methods — NC.M3.G-MG.3 (apply geometric methods to solve design problems)",
  "html": "<p>A party committee is designing a cylindrical canister to hold exactly 1,000 cm³ of confetti. (a) If the canister&#x27;s radius is 5 cm, find the height it must have, to the nearest hundredth of a centimeter. (b) The canister must fit on a shelf with 12 cm of clearance. Does the design in part (a) fit? If not, find the radius the canister needs if its height is exactly 12 cm, to the nearest hundredth of a centimeter. (c) State the final dimensions you recommend.</p>",
  "evidence": "The cylinder volume formula solved for height, a comparison with the clearance constraint, the formula solved again for radius at the limiting height, and a final dimension recommendation that satisfies both the volume and the shelf",
  "reveals": "Whether the student can treat a volume formula as a design tool — solving for whichever dimension the constraints leave free."
 },
 {
  "id": "S10-57",
  "set": 10,
  "n": 57,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Statistical inference from a random sample",
  "standards": [
   "NC.M3.S-IC.1"
  ],
  "standardsDetail": "Statistical inference from a random sample — NC.M3.S-IC.1 (understand statistics as a process for making inferences about population parameters based on a random sample; decide if a specified model is consistent with results)",
  "html": "<p>Organizers of a 5,000-person music festival want to estimate the average satisfaction rating of all attendees. They randomly select 60 attendees and survey them; the sample&#x27;s mean rating is 4.2 on a 5-point scale. (a) Identify the population, the sample, the parameter, and the statistic in this study. (b) Explain why the random selection matters for using the sample&#x27;s mean to estimate the festival-wide mean. (c) A volunteer instead surveys 60 of her friends at the festival and also gets a mean of 4.2. Explain why her result does not support the same conclusion about all attendees.</p>",
  "evidence": "The four inference vocabulary pieces correctly assigned to the scenario, a representativeness argument for random selection, and a bias explanation for the convenience sample despite its identical number",
  "reveals": "Whether the student understands that a statistic earns its meaning from how the sample was chosen — not from the number it happens to produce."
 },
 {
  "id": "S10-58",
  "set": 10,
  "n": 58,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Purposes of surveys, experiments, and observational studies; randomization",
  "standards": [
   "NC.M3.S-IC.3"
  ],
  "standardsDetail": "Purposes of surveys, experiments, and observational studies; randomization — NC.M3.S-IC.3 (recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each)",
  "html": "<p>A town is planning next year&#x27;s festival and considers three studies. Study A: surveyors interview a random sample of 400 residents about whether they enjoyed this year&#x27;s fireworks. Study B: researchers compare traffic congestion at two intersections, one where a new traffic plan was used and one where it was not, without assigning which intersection got the plan. Study C: organizers randomly assign 20 festival booths to use a new layout and 20 similar booths to keep the old layout, then compare visitor counts. (a) Classify each study as a survey, an observational study, or an experiment, with a one-line justification. (b) Explain the purpose of the random selection in Study A. (c) Explain the purpose of the random assignment in Study C, and what it allows the organizers to conclude that Study B does not.</p>",
  "evidence": "Three correct classifications tied to whether treatments were imposed and how subjects were chosen, random selection explained as the basis for generalizing to residents, and random assignment explained as the basis for a causal conclusion, contrasted with Study B",
  "reveals": "Whether the student can tell study designs apart by their mechanics and match each kind of randomization to the kind of conclusion it licenses."
 },
 {
  "id": "S10-59",
  "set": 10,
  "n": 59,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Estimating a population mean; margin of error through simulation",
  "standards": [
   "NC.M3.S-IC.4"
  ],
  "standardsDetail": "Estimating a population mean; margin of error through simulation — NC.M3.S-IC.4 (use data from a sample survey to estimate a population mean or proportion; develop a margin of error through the use of simulation models for random sampling)",
  "html": "<p>Festival organizers want to estimate the mean amount of money spent by a typical attendee. They survey a random sample of 50 attendees and find a sample mean spending of $\\$38.40$. To build a margin of error, they run a simulation: 1,000 simulated random samples of size 50 (using the sample results as the assumed population) produce sample means with a standard deviation of $\\$2.10$. (a) Use the simulation to develop a margin of error for the estimate. (b) Give an interval of plausible values for the true mean spending of all attendees. (c) Interpret the interval in context. (d) If the organizers surveyed 200 attendees instead and the sample mean stayed the same, would the margin of error grow, shrink, or stay about the same? Explain.</p>",
  "evidence": "A margin of error of about two simulation standard deviations, the interval built around the sample mean, a contextual interpretation of the plausible range, and a prediction that a larger sample shrinks the margin of error because sample means vary less",
  "reveals": "Whether the student can turn simulation output about a mean into an honest estimate with uncertainty — and knows what controls the size of that uncertainty."
 },
 {
  "id": "S10-60",
  "set": 10,
  "n": 60,
  "strand": "Geometry Modeling & Statistics",
  "topic": "Comparing treatments in a randomized experiment using simulation",
  "standards": [
   "NC.M3.S-IC.5"
  ],
  "standardsDetail": "Comparing treatments in a randomized experiment using simulation — NC.M3.S-IC.5 (use data from a randomized experiment to compare two treatments; use simulations to decide if differences between parameters are significant)",
  "html": "<p>Organizers of a craft fair test two booth layouts to see which produces more sales. They randomly assign 100 arriving visitors to be directed to one of two halls: 50 visitors to Hall A (new layout) and 50 to Hall B (old layout). In Hall A, 31 of 50 visitors make a purchase (62%); in Hall B, 25 of 50 make a purchase (50%). The organizers then run a simulation: assuming the layout makes no difference, they randomly reassign the 100 purchase outcomes to two groups of 50 a total of 500 times. In 96 of the 500 simulations, the difference in purchase rates (A minus B) is at least as large as the observed difference. (a) Compute the observed difference in purchase rates. (b) What proportion of the simulations produced a difference at least as large as the observed one? (c) Using a 5% significance threshold, decide whether the experiment gives convincing evidence that the new layout increases purchases, and explain what the simulation proportion means.</p>",
  "evidence": "The observed difference of the two purchase rates, the simulation proportion computed from the count given, a comparison against the 5% threshold leading to a \"not convincing\" conclusion, and an interpretation of the proportion as how often random assignment alone would produce such a gap",
  "reveals": "Whether the student can withhold a causal celebration when chance is a plausible explanation — applying the significance idea symmetrically, not only when the result is dramatic."
 }
];
