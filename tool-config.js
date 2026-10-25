export const tool = {
  "id": "E007",
  "title": "층류 원관 압력강하 계산기",
  "inputs_text": "점성계수 μ [Pa·s], 관 길이 L [m], 내경 D [m], 체적유량 Q [m³/s]",
  "formula": "Δp = 128 μ L Q / (π D⁴)",
  "output_text": "마찰 압력강하 Δp [Pa]",
  "assumptions": "μ,L,D>0, Q≥0. 원형 직관·완전발달·정상·비압축·뉴턴유체·층류에 한정한다. 입구·밸브·굴곡 손실은 제외하고 적용조건 확인 체크를 요구한다.",
  "purpose": "포아죄유 압력강하 / 미세유로·층류 실험",
  "sources": [
    {
      "label": "OpenStax · Viscosity and Turbulence",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/14-7-viscosity-and-turbulence"
    }
  ],
  "slug": "eng-laminar-pipe-drop",
  "category": "유체",
  "result_label": "관 마찰 압력강하 Δp",
  "result_dimension": "pressure",
  "fields": [
    {
      "key": "mu",
      "label": "점성계수 μ",
      "dimension": "viscosity",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "mPas",
      "display_value": "1"
    },
    {
      "key": "l",
      "label": "관 길이 L",
      "dimension": "length",
      "example": 10,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "10"
    },
    {
      "key": "d",
      "label": "관 내경 D",
      "dimension": "length",
      "example": 0.02,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "20"
    },
    {
      "key": "q",
      "label": "체적유량 Q",
      "dimension": "flow",
      "example": 1e-05,
      "constraint": "nonnegative",
      "display_unit": "m3s",
      "display_value": "1e-05"
    }
  ],
  "site": "https://nanalab.kr/eng-laminar-pipe-drop/",
  "repository": "https://github.com/NaNaCompany/eng-laminar-pipe-drop",
  "condition": "완전발달·정상·비압축·뉴턴유체의 원형 직관 층류 조건을 확인했습니다.",
  "output_unit": "Pa"
};
