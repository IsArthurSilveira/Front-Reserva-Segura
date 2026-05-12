import svgPaths from "./svg-x9pjlieizj";

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.982px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9822 23.9822">
        <g id="Icon">
          <path d={svgPaths.p1f3f0f00} id="Vector" stroke="var(--stroke-0, #1E1E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
          <path d="M18.9859 11.9911H4.99629" id="Vector_2" stroke="var(--stroke-0, #1E1E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99852" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f4f4f4] relative rounded-[42042000px] shrink-0 size-[41.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.006px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[26.978px] relative shrink-0 w-[79.895px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#1e1e2d] text-[18px] whitespace-nowrap">Detalhes</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.988px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g id="Icon">
          <path d={svgPaths.p4f2d540} id="Vector" stroke="var(--stroke-0, #1E1E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d={svgPaths.p2a04b680} id="Vector_2" stroke="var(--stroke-0, #1E1E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d="M9.9942 12.4927V2.49855" id="Vector_3" stroke="var(--stroke-0, #1E1E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f4f4f4] relative rounded-[42042000px] shrink-0 size-[41.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11.002px] pr-[11.003px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[41.993px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[81.97px] items-start left-0 pt-[7.988px] px-[27.996px] top-0 w-[369.62px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[48.004px] relative shrink-0 w-[65.897px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-3.77px] whitespace-nowrap">✈️</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[36.003px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Viagem</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[-0.75px] whitespace-nowrap">Meta: R$ 5.000</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[56.99px] relative shrink-0 w-[101.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[11.981px] h-[56.99px] items-center left-[23.98px] top-[23.98px] w-[265.664px]" data-name="Container">
      <Text />
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.9)] top-[-0.75px] whitespace-nowrap">Progresso</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48.004px] relative shrink-0 w-[143.502px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[32px] text-white top-[-1.24px] whitespace-nowrap">R$ 3.200</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[30.971px] relative shrink-0 w-[38.841px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.51px] whitespace-nowrap">64%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[48.004px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Paragraph2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-white h-[9.984px] relative rounded-[42042000px] shrink-0 w-full" data-name="Container" />;
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[9.984px] relative rounded-[42042000px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[84.124px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[7.988px] h-[126.939px] items-start left-[23.98px] pt-[15.995px] px-[15.995px] rounded-[16px] top-[96.97px] w-[265.664px]" data-name="Container">
      <Paragraph1 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-[0.25px] whitespace-nowrap">Falta</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[23.982px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.49px] whitespace-nowrap">R$ 1.800</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[3.994px] h-[69.93px] items-start left-[23.98px] pt-[11.981px] px-[11.981px] rounded-[12px] top-[235.89px] w-[126.841px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[17.992px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-[0.25px] whitespace-nowrap">Rendimento</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[23.982px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.49px] whitespace-nowrap">R$ 285,50</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col gap-[3.994px] h-[69.93px] items-start left-[162.81px] pt-[11.981px] px-[11.981px] rounded-[12px] top-[235.89px] w-[126.841px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] h-[329.8px] relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(125.209deg, rgb(97, 140, 120) 28.559%, rgb(123, 241, 168) 106.42%)" }} data-name="Container">
      <Container4 />
      <Container6 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[329.8px] items-start left-0 px-[27.996px] top-[81.97px] w-[369.62px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[38.27px] size-[19.988px] top-[11.98px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g clipPath="url(#clip0_2_1356)" id="Icon">
          <path d="M6.6628 1.6657V4.9971" id="Vector" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d="M13.3256 1.6657V4.9971" id="Vector_2" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d={svgPaths.p1c8bed00} id="Vector_3" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d="M2.49855 8.3285H17.4898" id="Vector_4" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
        </g>
        <defs>
          <clipPath id="clip0_2_1356">
            <rect fill="white" height="19.9884" width="19.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[16.504px] left-[11.98px] top-[39.96px] w-[72.593px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[36.67px] not-italic text-[11px] text-[rgba(30,30,45,0.6)] text-center top-[0.25px] whitespace-nowrap">Início</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.499px] left-[11.98px] top-[60.45px] w-[72.593px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[36.35px] not-italic text-[#1e1e2d] text-[13px] text-center top-[0.25px] whitespace-nowrap">Jan/25</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[91.935px] left-0 rounded-[12px] top-0 w-[96.555px]" data-name="Container">
      <Icon2 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[38.27px] size-[19.988px] top-[11.98px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g clipPath="url(#clip0_2_1416)" id="Icon">
          <path d={svgPaths.p32c15800} id="Vector" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d={svgPaths.p2544d900} id="Vector_2" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d={svgPaths.p281c1e80} id="Vector_3" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
        </g>
        <defs>
          <clipPath id="clip0_2_1416">
            <rect fill="white" height="19.9884" width="19.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[16.504px] left-[11.98px] top-[39.96px] w-[72.593px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[36.6px] not-italic text-[11px] text-[rgba(30,30,45,0.6)] text-center top-[0.25px] whitespace-nowrap">Meta</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[19.499px] left-[11.98px] top-[60.45px] w-[72.593px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[36.48px] not-italic text-[#1e1e2d] text-[13px] text-center top-[0.25px] whitespace-nowrap">Ago/26</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[91.935px] left-[108.54px] rounded-[12px] top-0 w-[96.555px]" data-name="Container">
      <Icon3 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[38.27px] size-[19.988px] top-[11.98px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g clipPath="url(#clip0_2_1412)" id="Icon">
          <path d="M9.9942 1.6657V18.3227" id="Vector" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d={svgPaths.p6949dc0} id="Vector_2" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
        </g>
        <defs>
          <clipPath id="clip0_2_1412">
            <rect fill="white" height="19.9884" width="19.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[16.504px] left-[11.98px] top-[39.96px] w-[72.593px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[36.72px] not-italic text-[11px] text-[rgba(30,30,45,0.6)] text-center top-[0.25px] whitespace-nowrap">Mensal</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[19.499px] left-[11.98px] top-[60.45px] w-[72.593px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[36.45px] not-italic text-[#1e1e2d] text-[13px] text-center top-[0.25px] whitespace-nowrap">R$ 450</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[91.935px] left-[217.07px] rounded-[12px] top-0 w-[96.555px]" data-name="Container">
      <Icon4 />
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[91.935px] left-[28px] top-[435.75px] w-[313.629px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.988px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9884 19.9884">
        <g clipPath="url(#clip0_2_1405)" id="Icon">
          <path d={svgPaths.p26d24500} id="Vector" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
          <path d={svgPaths.p2533a400} id="Vector_2" stroke="var(--stroke-0, #618C78)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6657" />
        </g>
        <defs>
          <clipPath id="clip0_2_1405">
            <rect fill="white" height="19.9884" width="19.9884" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.982px] relative shrink-0 w-[193.62px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#1e1e2d] text-[16px] top-[1.25px] whitespace-nowrap">Análise de Crescimento</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[7.988px] h-[23.982px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Heading2 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20.987px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[21px] min-w-px not-italic relative text-[#1e1e2d] text-[14px]">Evolução Mensal</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.78%_1.77%_19.44%_23.05%]" data-name="Group">
      <div className="absolute inset-[-0.36%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211.993 140.995">
          <g id="Group">
            <path d="M3.70358e-06 140.495H211.993" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M3.70358e-06 105.496H211.993" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M3.70358e-06 70.4976H211.993" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d={svgPaths.pf803c80} id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[2.78%_1.77%_19.44%_23.05%]" data-name="Group">
      <div className="absolute inset-[0_-0.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.993 139.995">
          <g id="Group">
            <path d="M0.499983 1.4019e-07V139.995" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M53.4982 1.4019e-07V139.995" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M106.496 1.4019e-07V139.995" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M159.495 1.4019e-07V139.995" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M212.493 1.4019e-07V139.995" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2.78%_1.77%_19.44%_23.05%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[80.56%_73.23%_8.6%_19.33%]" data-name="Group">
      <div className="absolute inset-[80.56%_76.95%_16.11%_23.05%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_73.23%_8.6%_19.33%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Jan</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[80.56%_54.43%_8.6%_38.12%]" data-name="Group">
      <div className="absolute inset-[80.56%_58.16%_16.11%_41.84%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_54.43%_8.6%_38.12%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Fev</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[80.56%_35.46%_8.6%_56.74%]" data-name="Group">
      <div className="absolute inset-[80.56%_39.36%_16.11%_60.64%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_35.46%_8.6%_56.74%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Mar</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[80.56%_16.84%_8.6%_75.71%]" data-name="Group">
      <div className="absolute inset-[80.56%_20.57%_16.11%_79.43%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_16.84%_8.6%_75.71%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Abr</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[80.56%_-0.22%_8.6%_92.77%]" data-name="Group">
      <div className="absolute inset-[80.56%_1.77%_16.11%_98.23%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_-0.22%_8.6%_92.77%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Mai</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[80.56%_-0.22%_8.6%_19.33%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[80.56%_-0.22%_8.6%_19.33%]" data-name="Group">
      <div className="absolute inset-[80.56%_1.77%_19.44%_23.05%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211.993 0.999967">
            <path d="M0 0.499983H211.993" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[76.26%_76.95%_15.41%_17.38%]" data-name="Group">
      <div className="absolute inset-[80.56%_76.95%_19.44%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[76.26%_79.79%_15.41%_17.38%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[56.81%_76.95%_34.86%_12.06%]" data-name="Group">
      <div className="absolute inset-[61.11%_76.95%_38.89%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[56.81%_79.79%_34.86%_12.06%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">800</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[37.37%_76.95%_54.3%_9.93%]" data-name="Group">
      <div className="absolute inset-[41.67%_76.95%_58.33%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[37.37%_79.79%_54.3%_9.93%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">1600</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[17.92%_76.95%_73.74%_9.57%]" data-name="Group">
      <div className="absolute inset-[22.22%_76.95%_77.78%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.92%_79.79%_73.74%_9.57%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">2400</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[0.7%_76.95%_90.97%_9.57%]" data-name="Group">
      <div className="absolute inset-[2.78%_76.95%_97.22%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.7%_79.79%_90.97%_9.57%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">3200</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0.7%_76.95%_15.41%_9.57%]" data-name="Group">
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[0.7%_76.95%_15.41%_9.57%]" data-name="Group">
      <div className="absolute inset-[2.78%_76.95%_19.44%_23.05%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 139.995">
            <path d="M0.499983 0V139.995" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <Group11 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[0.56%_0.35%_28.16%_21.63%]" data-name="Group">
      <div className="absolute inset-[-1.17%_-0.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.993 131.308">
          <g id="Group">
            <path d={svgPaths.p1ecc6b80} id="Vector" stroke="var(--stroke-0, #618C78)" strokeWidth="2.9999" />
            <g id="Group_2">
              <path d={svgPaths.pf4f3a00} fill="var(--fill-0, #618C78)" id="Vector_2" stroke="var(--stroke-0, #618C78)" strokeWidth="2.9999" />
              <path d={svgPaths.p1bac7a00} fill="var(--fill-0, #618C78)" id="Vector_3" stroke="var(--stroke-0, #618C78)" strokeWidth="2.9999" />
              <path d={svgPaths.pc097180} fill="var(--fill-0, #618C78)" id="Vector_4" stroke="var(--stroke-0, #618C78)" strokeWidth="2.9999" />
              <path d={svgPaths.p190c1d80} fill="var(--fill-0, #618C78)" id="Vector_5" stroke="var(--stroke-0, #618C78)" strokeWidth="2.9999" />
              <path d={svgPaths.p31275680} fill="var(--fill-0, #618C78)" id="Vector_6" stroke="var(--stroke-0, #618C78)" strokeWidth="2.9999" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[179.994px] left-0 overflow-clip top-0 w-[281.992px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group10 />
      <Group17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[179.994px] relative shrink-0 w-full" data-name="Container">
      <Surface />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f4f4f4] h-[244.951px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.981px] items-start pt-[15.995px] px-[15.995px] relative size-full">
        <Paragraph14 />
        <Container19 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[20.987px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[21px] min-w-px not-italic relative text-[#1e1e2d] text-[14px]">Depósitos vs Rendimento</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[2.78%_1.77%_19.44%_23.05%]" data-name="Group">
      <div className="absolute inset-[-0.36%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211.993 140.995">
          <g id="Group">
            <path d="M3.70358e-06 140.495H211.993" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M3.70358e-06 105.496H211.993" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M3.70358e-06 70.4976H211.993" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M3.70358e-06 35.4988H211.993" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d={svgPaths.pf803c80} id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[2.78%_1.77%_19.44%_23.05%]" data-name="Group">
      <div className="absolute inset-[0_-0.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212.993 139.995">
          <g id="Group">
            <path d="M21.6993 1.4019e-07V139.995" id="Vector" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M64.0979 1.4019e-07V139.995" id="Vector_2" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M106.496 1.4019e-07V139.995" id="Vector_3" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M148.895 1.4019e-07V139.995" id="Vector_4" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M191.294 1.4019e-07V139.995" id="Vector_5" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M0.499983 1.4019e-07V139.995" id="Vector_6" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
            <path d="M212.493 1.4019e-07V139.995" id="Vector_7" stroke="var(--stroke-0, #E0E0E0)" strokeDasharray="3 3" strokeWidth="0.999967" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[2.78%_1.77%_19.44%_23.05%]" data-name="Group">
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[80.56%_65.71%_8.6%_26.84%]" data-name="Group">
      <div className="absolute inset-[80.56%_69.43%_16.11%_30.57%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_65.71%_8.6%_26.84%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Jan</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[80.56%_50.67%_8.6%_41.88%]" data-name="Group">
      <div className="absolute inset-[80.56%_54.4%_16.11%_45.6%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_50.67%_8.6%_41.88%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Fev</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[80.56%_35.46%_8.6%_56.74%]" data-name="Group">
      <div className="absolute inset-[80.56%_39.36%_16.11%_60.64%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_35.46%_8.6%_56.74%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Mar</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[80.56%_20.6%_8.6%_71.95%]" data-name="Group">
      <div className="absolute inset-[80.56%_24.33%_16.11%_75.67%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_20.6%_8.6%_71.95%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Abr</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[80.56%_5.57%_8.6%_86.99%]" data-name="Group">
      <div className="absolute inset-[80.56%_9.29%_16.11%_90.71%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 6">
            <path d="M0.499983 6V0" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[83.07%_5.57%_8.6%_86.99%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-center whitespace-nowrap">Mai</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[80.56%_5.57%_8.6%_26.84%]" data-name="Group">
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[80.56%_1.77%_8.6%_23.05%]" data-name="Group">
      <div className="absolute inset-[80.56%_1.77%_19.44%_23.05%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211.993 0.999967">
            <path d="M0 0.499983H211.993" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <Group22 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[76.26%_76.95%_15.41%_17.38%]" data-name="Group">
      <div className="absolute inset-[80.56%_76.95%_19.44%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[76.26%_79.79%_15.41%_17.38%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[56.81%_76.95%_34.86%_12.77%]" data-name="Group">
      <div className="absolute inset-[61.11%_76.95%_38.89%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[56.81%_79.79%_34.86%_12.77%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">150</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[37.37%_76.95%_54.3%_12.06%]" data-name="Group">
      <div className="absolute inset-[41.67%_76.95%_58.33%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[37.37%_79.79%_54.3%_12.06%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">300</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[17.92%_76.95%_73.74%_12.06%]" data-name="Group">
      <div className="absolute inset-[22.22%_76.95%_77.78%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.92%_79.79%_73.74%_12.06%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">450</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[0.7%_76.95%_90.97%_12.06%]" data-name="Group">
      <div className="absolute inset-[2.78%_76.95%_97.22%_20.92%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0.999967">
            <path d="M0 0.499983H6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.7%_79.79%_90.97%_12.06%] leading-[normal] not-italic text-[#99a1af] text-[12px] text-right whitespace-nowrap">600</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[0.7%_76.95%_15.41%_12.06%]" data-name="Group">
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[0.7%_76.95%_15.41%_12.06%]" data-name="Group">
      <div className="absolute inset-[2.78%_76.95%_19.44%_23.05%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.999967 139.995">
            <path d="M0.499983 0V139.995" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="0.999967" />
          </svg>
        </div>
      </div>
      <Group29 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[22.22%_70.48%_19.44%_24.55%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p1b33fdf0} fill="var(--fill-0, #618C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[22.22%_55.45%_19.44%_39.59%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p1b33fdf0} fill="var(--fill-0, #618C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[2.78%_40.41%_19.44%_54.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 139.995">
        <g id="Group">
          <path d={svgPaths.p3d004e00} fill="var(--fill-0, #618C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[22.22%_25.38%_19.44%_69.66%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p9847980} fill="var(--fill-0, #618C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[22.22%_10.34%_19.44%_84.69%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p3392000} fill="var(--fill-0, #618C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[2.78%_10.34%_19.44%_24.55%]" data-name="Group">
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[2.78%_10.34%_19.44%_24.55%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[2.78%_10.34%_19.44%_24.55%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[22.22%_70.48%_19.44%_24.55%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p1b33fdf0} fill="var(--fill-0, #7BF1A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[22.22%_55.45%_19.44%_39.59%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p1b33fdf0} fill="var(--fill-0, #7BF1A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[2.78%_40.41%_19.44%_54.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 139.995">
        <g id="Group">
          <path d={svgPaths.p3d004e00} fill="var(--fill-0, #7BF1A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[22.22%_25.38%_19.44%_69.66%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p9847980} fill="var(--fill-0, #7BF1A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[22.22%_10.34%_19.44%_84.69%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 104.996">
        <g id="Group">
          <path d={svgPaths.p3392000} fill="var(--fill-0, #7BF1A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[2.78%_10.34%_19.44%_24.55%]" data-name="Group">
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
      <Group50 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[2.78%_10.34%_19.44%_24.55%]" data-name="Group">
      <Group45 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[2.78%_10.34%_19.44%_24.55%]" data-name="Group">
      <Group44 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[179.994px] left-0 overflow-clip top-0 w-[281.992px]" data-name="Surface">
      <Group18 />
      <Group21 />
      <Group28 />
      <Group35 />
      <Group43 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[179.994px] relative shrink-0 w-full" data-name="Container">
      <Surface1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f4f4f4] h-[244.951px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11.981px] items-start pt-[15.995px] px-[15.995px] relative size-full">
        <Paragraph15 />
        <Container21 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.995px] h-[545.875px] items-start left-0 px-[27.996px] top-[551.67px] w-[369.62px]" data-name="Container">
      <Container17 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Button2() {
  return (
    <div className="drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] h-[55.972px] relative rounded-[16px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(97, 140, 120) 0%, rgb(99, 147, 123) 7.1429%, rgb(101, 154, 127) 14.286%, rgb(103, 161, 130) 21.429%, rgb(105, 168, 134) 28.571%, rgb(107, 175, 137) 35.714%, rgb(109, 182, 141) 42.857%, rgb(111, 189, 144) 50%, rgb(113, 197, 147) 57.143%, rgb(115, 204, 151) 64.286%, rgb(117, 211, 154) 71.429%, rgb(118, 219, 158) 78.571%, rgb(120, 226, 161) 85.714%, rgb(121, 233, 165) 92.857%, rgb(123, 241, 168) 100%)" }} data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-[157.31px] not-italic text-[16px] text-center text-white top-[17.25px] whitespace-nowrap">Adicionar Valor</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f4f4f4] h-[55.972px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-[156.33px] not-italic text-[#1e1e2d] text-[16px] text-center top-[17.25px] whitespace-nowrap">Sacar Parcialmente</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.981px] h-[123.924px] items-start left-0 px-[27.996px] top-[1121.53px] w-[369.62px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function BoxDetail() {
  return (
    <div className="bg-white relative size-full" data-name="BoxDetail">
      <Container />
      <Container2 />
      <Container12 />
      <Container16 />
      <Container22 />
    </div>
  );
}