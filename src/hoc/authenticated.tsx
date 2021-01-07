// import {Component, ComponentType} from "react";
// import {IAppState} from "app-store";
// import {connect} from "react-redux";
// import {Subtract} from "app-tools";
//
// export interface IAuthenticatedProps {
//   isAuthenticated: boolean;
// }
//
// export interface IAuthenticatedState {
//   isAuthenticated: boolean;
// }
//
// export const authenticated = <P extends IAuthenticatedProps>(WrappedComponent: ComponentType<any>) => {
//   class Authenticated extends Component<Subtract<P, IAuthenticatedProps>, IAuthenticatedState> {
//     public state = {
//       isAuthenticated: false
//     };
//
//     public render() {
//       return (
//           <WrappedComponent isAuthenticated={this.state.isAuthenticated} {...this.props} />
//       );
//     }
//   }
//
//   function mapStateToProps(state: IAppState) {
//     return {
//       isAuthenticated: true
//     }
//   }
//   return connect<IAuthenticatedProps, {}, {}>(mapStateToProps)(Authenticated as any) as any; // TODO fix types!!!!
// };
export {};
