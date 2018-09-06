import React,{Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TableFooter from '@material-ui/core/TableFooter'
import CustomTableCell from '../../components/CustomTableCell'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/AddCircleOutline'
import CreditCard from '@material-ui/icons/CreditCard'

const style={
    buttonWrapper:{
        display:'flex',
        flexDirection:'horizon',
        justifyContent:'center'
    },
    button:{
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
    }
}
class OptionInfo extends Component{


    render(){
        let {option,classes}=this.props;
        let temp=option.amplitude;
        return(
            <div>
                <Paper className={classes.buttonWrapper}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        <AddIcon/>
                        收藏
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        <CreditCard/>
                        购买
                    </Button>
                </Paper>
                <Table>
                    <TableHead>
                        <CustomTableCell colSpan={4}>{option.optionAbbr}</CustomTableCell>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <CustomTableCell>买量</CustomTableCell>
                            <CustomTableCell>{option.bidVolume}</CustomTableCell>
                            <CustomTableCell>买价</CustomTableCell>
                            <CustomTableCell>{option.bidPrice}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>卖量</CustomTableCell>
                            <CustomTableCell>{option.sellVolume}</CustomTableCell>
                            <CustomTableCell>卖家</CustomTableCell>
                            <CustomTableCell>{option.sellPrice}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>最新价</CustomTableCell>
                            <CustomTableCell>{option.latestPrice}</CustomTableCell>
                            <CustomTableCell>持仓量</CustomTableCell>
                            <CustomTableCell>{option.position}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>涨跌幅</CustomTableCell>
                            <CustomTableCell>{option.quoteChange===undefined?'':option.quoteChange.toFixed(4)}</CustomTableCell>
                            <CustomTableCell>振幅</CustomTableCell>
                            <CustomTableCell>{option.remindedBusinessDays===undefined?'':option.remindedBusinessDays.toFixed(4)}</CustomTableCell>
                        </TableRow>
                        <TableRow>
                            <CustomTableCell>剩余交易日</CustomTableCell>
                            <CustomTableCell>{option.remindedBusinessDays}</CustomTableCell>
                            <CustomTableCell>行权价</CustomTableCell>
                            <CustomTableCell>{option.execPrice}</CustomTableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default withStyles(style)(OptionInfo)