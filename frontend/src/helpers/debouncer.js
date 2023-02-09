export function debouncedecorator(f, tempo) {
    let _timeoutCode = null
    function decorada() {
        if(_timeoutCode) {
            clearTimeout(_timeoutCode)
        }
        const _arguments = arguments
        _timeoutCode = setTimeout(() => {
            f.apply(this, _arguments)
            _timeoutCode = null
        }, tempo)
    }
    return decorada
}