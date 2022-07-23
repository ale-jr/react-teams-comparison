import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faComment, faHeart, faChartLine, faTrophy, faCommentDots, faPeopleGroup, faSitemap, faThumbsUp, faCompass, faFaceSmile, faHeartCirclePlus, faSeedling, faFlag } from '@fortawesome/free-solid-svg-icons'
import { Sort } from 'interfaces/sort'
import { HorizontalCell, VerticalCell, Row } from './style'
import IconButton from 'components/atoms/IconButton'


interface ComparisonTableHeaderProps {
    sort?: Sort
    onSelectSort: (sort: Sort) => void
}


const ComparisonTableHeader: React.FC<ComparisonTableHeaderProps> = ({ sort, onSelectSort }) => {


    const handleSortClick = () => {
        const invertedSorting: Sort = sort === "ascending" ? "descending" : "ascending"
        onSelectSort(invertedSorting)
    }

    return <Row>
        <HorizontalCell>
            Teams
            {sort && <IconButton className="sort-indicator" color='primary' icon={sort === "ascending" ? faCaretUp : faCaretDown} onClick={handleSortClick} aria-label={`Sorting by ${sort} teams, invert sorting order`} />}
        </HorizontalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faComment} /> <span className="cell-label">Participation (%)</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faHeart} /> <span className="cell-label">eNPS</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faChartLine} /> <span className="cell-label">Overall Engagement</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faTrophy} /> <span className="cell-label">Recognition</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faCommentDots} /> <span className="cell-label">Feedback</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faPeopleGroup} /> <span className="cell-label">Relationship with peers</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faSitemap} /> <span className="cell-label">Relationship with manager</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faThumbsUp} /> <span className="cell-label">Satisfaction</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faCompass} /> <span className="cell-label">Alignment</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faFaceSmile} /> <span className="cell-label">Happiness</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faHeartCirclePlus} /> <span className="cell-label">Wellness</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faSeedling} /> <span className="cell-label">Personal growth</span></span>
        </VerticalCell>
        <VerticalCell>
            <span className="cell-content"><FontAwesomeIcon className="cell-icon" icon={faFlag} /> <span className="cell-label">Ambassadorship</span></span>
        </VerticalCell>
    </Row>
}

export default ComparisonTableHeader