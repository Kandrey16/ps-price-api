interface PsStoreElement extends HTMLElement {
  innerText: string;
}

interface PsStoreMetaElement extends HTMLMetaElement {
  content: string;
}
export function extractPsStoreGame() {
  try {
    const getList = (qa: string) => {
      const el = document.querySelector(`[data-qa*="${qa}"]`) as PsStoreElement;
      return el ? el.textContent.split(',').map((v) => v.trim()) : [];
    };

    const conceptId = (window as any).__NEXT_DATA__?.props?.pageProps?.data
      ?.conceptId;
    console.log('concept: ', conceptId);

    return {
      conceptId,
      hasPsPlus: !!document.querySelector('.psw-c-t-ps-plus'),
      subtitles: getList('gameInfo#releaseInformation#subtitles-value'),
      voices: getList('gameInfo#releaseInformation#voice-value'),
      originalImage:
        (
          document.querySelector(
            'meta[property="og:image"]',
          ) as PsStoreMetaElement
        )?.content || null,
    };
  } catch (error) {
    console.log(error);
  }
}
