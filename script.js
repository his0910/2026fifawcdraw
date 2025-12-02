const teams = [
    "캐나다", "멕시코", "미국", "스페인", "아르헨티나", "프랑스", "잉글랜드", "브라질", "포르투갈", "네덜란드", "벨기에", "독일", 
    "크로아티아", "모로코", "콜롬비아", "우루과이", "스위스", "일본", "세네갈", "이란", "대한민국", "에콰도르", "오스트리아", "호주",
    "노르웨이", "파나마", "이집트", "알제리", "스코틀랜드", "파라과이", "튀니지", "코트디부아르", "우즈베키스탄", "카타르", "사우디아라비아", "남아공",
    "요르단", "카보베르데", "가나", "퀴라소", "아이티", "뉴질랜드", "UEFA Path A", "UEFA Path B", "UEFA Path C", "UEFA Path D", "FIFA PO 1", "FIFA PO 2"
];

function drawGroups() {
    let shuffled = [...teams].sort(() => Math.random() - 0.5);
    let html = "";

    for (let i = 0; i < 4; i++) {
        html += `<h3>Group ${String.fromCharCode(65+i)}</h3><ul>`;
        for (let j = 0; j < 4; j++) {
            html += `<li>${shuffled[i*4 + j]}</li>`;
        }
        html += "</ul>";
    }

    document.getElementById("result").innerHTML = html;
    <script src="script.js?v=2"></script>
}
