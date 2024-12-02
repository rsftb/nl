
export function fFactoryToggleSection(eBoxVocab, ePhrase) {

    function f(elem) {
        eBoxVocab.classList.toggle('hidden');
        ePhrase.classList.toggle('hidden');
    }

    f.eBoxVocab = eBoxVocab;
    f.ePhrase = ePhrase;

    return f;
}
