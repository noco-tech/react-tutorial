const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go',
];

export const List = () => {
    
        return (
            <div>
    
                <h4></h4>
                
                {
                    LANGUAGES.map((lang, index) => {
                      return <div key={index}>{lang}</div> 
                    })
                }
            </div>
          
        )
    
}