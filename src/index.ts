/**
 * Opticule Design System — master barrel export.
 *
 * Import anything from "@opticule/ds" (or the local package root).
 */

// ---------------------------------------------------------------------------
// Tokens & Theming
// ---------------------------------------------------------------------------

export {
  ThemeProvider,
  useTheme,
  themeInitScript,
} from "./tokens/ThemeProvider";
export type { Theme, ThemeContextValue } from "./tokens/ThemeProvider";

export * from "./tokens/index";

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

export * from "./hooks/index";

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

export { cn, compoundName, generateId, omit, pick, typedEntries, mergeEventHandlers } from "./lib/utils";

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

export {
  VisuallyHidden,
  Portal,
  Box,
  Text,
  Heading,
  Icon,
} from "./components/primitives/index";
export type {
  TextProps,
  TextSize,
  TextWeight,
  TextColor,
  HeadingProps,
  HeadingLevel,
  IconProps,
  IconSize,
} from "./components/primitives/index";

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

export {
  Stack,
  HStack,
  VStack,
  Container,
  Grid,
  SimpleGrid,
  Divider,
  Spacer,
  Center,
  AspectRatio,
} from "./components/layout/index";
export type {
  StackProps,
  ContainerProps,
  GridProps,
  SimpleGridProps,
  DividerProps,
} from "./components/layout/index";

// ---------------------------------------------------------------------------
// Inputs
// ---------------------------------------------------------------------------

export {
  Button,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  TextButton,
  GradientButton,
  ButtonGroup,
  IconButton,
  Input,
  TextArea,
  Select,
  Checkbox,
  Switch,
  Badge,
  RadioGroup,
  RadioGroupItem,
  Slider,
  NumberInput,
  PasswordInput,
  Search,
  Tag,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  FileUpload,
  CopyButton,
  MultiSelect,
  Combobox,
} from "./components/inputs/index";
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonGroupProps,
  ButtonGroupOrientation,
  IconButtonProps,
  IconButtonSize,
  InputProps,
  InputSize,
  InputStatus,
  TextAreaProps,
  TextAreaStatus,
  SelectProps,
  SelectOption,
  SelectGroup,
  SelectSize,
  CheckboxProps,
  SwitchProps,
  BadgeProps,
  BadgeVariant,
  BadgeSize,
  RadioGroupProps,
  RadioGroupItemProps,
  RadioGroupSize,
  SliderProps,
  SliderSize,
  NumberInputProps,
  NumberInputSize,
  PasswordInputProps,
  PasswordInputSize,
  PasswordInputStatus,
  SearchProps,
  SearchSize,
  TagProps,
  TagVariant,
  TagColor,
  TagSize,
  ToggleProps,
  ToggleGroupProps,
  ToggleGroupItemProps,
  ToggleVariant,
  ToggleSize,
  FileUploadProps,
  FileWithError,
  CopyButtonProps,
  CopyButtonVariant,
  CopyButtonSize,
  MultiSelectProps,
  MultiSelectOption,
  ComboboxProps,
  ComboboxOption,
} from "./components/inputs/index";

// ---------------------------------------------------------------------------
// Data Display
// ---------------------------------------------------------------------------

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardBadge,
  Avatar,
  AvatarGroup,
  Skeleton,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Stat,
} from "./components/data-display/index";
export type {
  CardProps,
  CardVariant,
  CardPadding,
  AvatarProps,
  AvatarGroupProps,
  AvatarSize,
  AvatarStatus,
  SkeletonProps,
  SkeletonVariant,
  TableRowProps,
  TableHeadProps,
  SortDirection,
  AccordionTriggerProps,
  StatProps,
} from "./components/data-display/index";

// ---------------------------------------------------------------------------
// Feedback
// ---------------------------------------------------------------------------

export {
  Alert,
  AlertTitle,
  AlertDescription,
  Spinner,
  ProgressBar,
  Toaster,
  toast,
  useToast,
  InlineLoading,
} from "./components/feedback/index";
export type {
  AlertProps,
  AlertVariant,
  SpinnerProps,
  ProgressBarProps,
  ToasterProps,
  InlineLoadingProps,
  InlineLoadingStatus,
} from "./components/feedback/index";

// ---------------------------------------------------------------------------
// Overlay
// ---------------------------------------------------------------------------

export {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerFooter,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  CommandPalette,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteSeparator,
} from "./components/overlay/index";
export type {
  ModalProps,
  ModalSize,
  DrawerProps,
  DrawerPlacement,
  DrawerSize,
  TooltipProps,
  TooltipSide,
  TooltipAlign,
  PopoverContentProps,
  ContextMenuItemProps,
  ContextMenuLabelProps,
  CommandPaletteProps,
  CommandPaletteGroupProps,
  CommandPaletteItemProps,
} from "./components/overlay/index";

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Stepper,
  SegmentedControl,
  Link,
} from "./components/navigation/index";
export type {
  TabsVariant,
  TabsListProps,
  TabsTriggerProps,
  PaginationLinkProps,
  DropdownMenuItemProps,
  StepperProps,
  StepItem,
  StepperOrientation,
  SegmentedControlProps,
  SegmentedOption,
  SegmentedSize,
  LinkProps,
  LinkVariant,
} from "./components/navigation/index";

// ---------------------------------------------------------------------------
// Forms
// ---------------------------------------------------------------------------

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormSection,
  Fieldset,
  Legend,
  useFormField,
} from "./components/forms/index";
export type { FormSectionProps } from "./components/forms/index";

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export { Paragraph, Blockquote, Code, CodeBlock, Kbd, Highlight } from "./components/typography/index";
export type { ParagraphProps } from "./components/typography/Paragraph";
export type { BlockquoteProps } from "./components/typography/Blockquote";
export type { CodeBlockProps } from "./components/typography/Code";
export type { HighlightProps, HighlightColor } from "./components/typography/Highlight";

// ---------------------------------------------------------------------------
// Media
// ---------------------------------------------------------------------------

export { Image } from "./components/media/index";
export type { ImageProps, ImageFit, ImageRounded } from "./components/media/index";

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

export {
  ScrollArea,
  ScrollAreaScrollbar,
  ErrorBoundary,
  ClientOnly,
  ConditionalWrap,
} from "./components/utilities/index";
export type {
  ScrollAreaProps,
  ScrollAreaOrientation,
  ErrorBoundaryProps,
  ClientOnlyProps,
  ConditionalWrapProps,
} from "./components/utilities/index";
