import  memo  from "react"

export const Copyright = memo(function({
    name,
    years,
    nameOnclick,
}) {
    return (
        <div>
            (c) {years.join(', ')} by
            <> </>
            <span onClick={nameOnclick}>
                {name}
            </span>
        </div>
    )
})