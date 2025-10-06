# `loadbalancerFrontendRule` Submodule <a name="`loadbalancerFrontendRule` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontendRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontendRule <a name="LoadbalancerFrontendRule" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule upcloud_loadbalancer_frontend_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRule(scope: Construct, id: string, config: LoadbalancerFrontendRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig">LoadbalancerFrontendRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig">LoadbalancerFrontendRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putMatchers">putMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetMatchers">resetMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetMatchingCondition">resetMatchingCondition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putActions"></a>

```typescript
public putActions(value: IResolvable | LoadbalancerFrontendRuleActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]

---

##### `putMatchers` <a name="putMatchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putMatchers"></a>

```typescript
public putMatchers(value: IResolvable | LoadbalancerFrontendRuleMatchers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.putMatchers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetMatchers` <a name="resetMatchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetMatchers"></a>

```typescript
public resetMatchers(): void
```

##### `resetMatchingCondition` <a name="resetMatchingCondition" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.resetMatchingCondition"></a>

```typescript
public resetMatchingCondition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerFrontendRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadbalancerFrontendRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerFrontendRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerFrontendRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerFrontendRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList">LoadbalancerFrontendRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchers">matchers</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList">LoadbalancerFrontendRuleMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontendInput">frontendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchersInput">matchersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchingConditionInput">matchingConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontend">frontend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchingCondition">matchingCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actions"></a>

```typescript
public readonly actions: LoadbalancerFrontendRuleActionsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList">LoadbalancerFrontendRuleActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchers`<sup>Required</sup> <a name="matchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchers"></a>

```typescript
public readonly matchers: LoadbalancerFrontendRuleMatchersList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList">LoadbalancerFrontendRuleMatchersList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | LoadbalancerFrontendRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]

---

##### `frontendInput`<sup>Optional</sup> <a name="frontendInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontendInput"></a>

```typescript
public readonly frontendInput: string;
```

- *Type:* string

---

##### `matchersInput`<sup>Optional</sup> <a name="matchersInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchersInput"></a>

```typescript
public readonly matchersInput: IResolvable | LoadbalancerFrontendRuleMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]

---

##### `matchingConditionInput`<sup>Optional</sup> <a name="matchingConditionInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchingConditionInput"></a>

```typescript
public readonly matchingConditionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `frontend`<sup>Required</sup> <a name="frontend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.frontend"></a>

```typescript
public readonly frontend: string;
```

- *Type:* string

---

##### `matchingCondition`<sup>Required</sup> <a name="matchingCondition" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.matchingCondition"></a>

```typescript
public readonly matchingCondition: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendRuleActions <a name="LoadbalancerFrontendRuleActions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActions: loadbalancerFrontendRule.LoadbalancerFrontendRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpRedirect">httpRedirect</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]</code> | http_redirect block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpReturn">httpReturn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]</code> | http_return block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setForwardedHeaders">setForwardedHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]</code> | set_forwarded_headers block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setRequestHeader">setRequestHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]</code> | set_request_header block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setResponseHeader">setResponseHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]</code> | set_response_header block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.tcpReject">tcpReject</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]</code> | tcp_reject block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.useBackend">useBackend</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]</code> | use_backend block. |

---

##### `httpRedirect`<sup>Optional</sup> <a name="httpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpRedirect"></a>

```typescript
public readonly httpRedirect: IResolvable | LoadbalancerFrontendRuleActionsHttpRedirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]

http_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#http_redirect LoadbalancerFrontendRule#http_redirect}

---

##### `httpReturn`<sup>Optional</sup> <a name="httpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.httpReturn"></a>

```typescript
public readonly httpReturn: IResolvable | LoadbalancerFrontendRuleActionsHttpReturn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]

http_return block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#http_return LoadbalancerFrontendRule#http_return}

---

##### `setForwardedHeaders`<sup>Optional</sup> <a name="setForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setForwardedHeaders"></a>

```typescript
public readonly setForwardedHeaders: IResolvable | LoadbalancerFrontendRuleActionsSetForwardedHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]

set_forwarded_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#set_forwarded_headers LoadbalancerFrontendRule#set_forwarded_headers}

---

##### `setRequestHeader`<sup>Optional</sup> <a name="setRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setRequestHeader"></a>

```typescript
public readonly setRequestHeader: IResolvable | LoadbalancerFrontendRuleActionsSetRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]

set_request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#set_request_header LoadbalancerFrontendRule#set_request_header}

---

##### `setResponseHeader`<sup>Optional</sup> <a name="setResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.setResponseHeader"></a>

```typescript
public readonly setResponseHeader: IResolvable | LoadbalancerFrontendRuleActionsSetResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]

set_response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#set_response_header LoadbalancerFrontendRule#set_response_header}

---

##### `tcpReject`<sup>Optional</sup> <a name="tcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.tcpReject"></a>

```typescript
public readonly tcpReject: IResolvable | LoadbalancerFrontendRuleActionsTcpReject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]

tcp_reject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#tcp_reject LoadbalancerFrontendRule#tcp_reject}

---

##### `useBackend`<sup>Optional</sup> <a name="useBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions.property.useBackend"></a>

```typescript
public readonly useBackend: IResolvable | LoadbalancerFrontendRuleActionsUseBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]

use_backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#use_backend LoadbalancerFrontendRule#use_backend}

---

### LoadbalancerFrontendRuleActionsHttpRedirect <a name="LoadbalancerFrontendRuleActionsHttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsHttpRedirect: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.location">location</a></code> | <code>string</code> | Target location. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.scheme">scheme</a></code> | <code>string</code> | Target scheme. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.status">status</a></code> | <code>number</code> | HTTP status code. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Target location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#location LoadbalancerFrontendRule#location}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Target scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#scheme LoadbalancerFrontendRule#scheme}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

HTTP status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#status LoadbalancerFrontendRule#status}

---

### LoadbalancerFrontendRuleActionsHttpReturn <a name="LoadbalancerFrontendRuleActionsHttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsHttpReturn: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.contentType">contentType</a></code> | <code>string</code> | Content type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.payload">payload</a></code> | <code>string</code> | The payload. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.status">status</a></code> | <code>number</code> | HTTP status code. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Content type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#content_type LoadbalancerFrontendRule#content_type}

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

The payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#payload LoadbalancerFrontendRule#payload}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

HTTP status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#status LoadbalancerFrontendRule#status}

---

### LoadbalancerFrontendRuleActionsSetForwardedHeaders <a name="LoadbalancerFrontendRuleActionsSetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsSetForwardedHeaders: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}.

---

### LoadbalancerFrontendRuleActionsSetRequestHeader <a name="LoadbalancerFrontendRuleActionsSetRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsSetRequestHeader: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader.property.header">header</a></code> | <code>string</code> | Header name. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader.property.value">value</a></code> | <code>string</code> | Header value. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleActionsSetResponseHeader <a name="LoadbalancerFrontendRuleActionsSetResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsSetResponseHeader: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader.property.header">header</a></code> | <code>string</code> | Header name. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader.property.value">value</a></code> | <code>string</code> | Header value. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleActionsTcpReject <a name="LoadbalancerFrontendRuleActionsTcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsTcpReject: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the rule is active. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#active LoadbalancerFrontendRule#active}

---

### LoadbalancerFrontendRuleActionsUseBackend <a name="LoadbalancerFrontendRuleActionsUseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleActionsUseBackend: loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend.property.backendName">backendName</a></code> | <code>string</code> | The name of the backend where traffic will be routed. |

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend.property.backendName"></a>

```typescript
public readonly backendName: string;
```

- *Type:* string

The name of the backend where traffic will be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}

---

### LoadbalancerFrontendRuleConfig <a name="LoadbalancerFrontendRuleConfig" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleConfig: loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.frontend">frontend</a></code> | <code>string</code> | ID of the load balancer frontend to which the frontend rule is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the frontend rule. Must be unique within the frontend. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.priority">priority</a></code> | <code>number</code> | Rule with the higher priority goes first. Rules with the same priority processed in alphabetical order. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.matchers">matchers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]</code> | matchers block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.matchingCondition">matchingCondition</a></code> | <code>string</code> | Defines boolean operator used to combine multiple matchers. Defaults to `and`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frontend`<sup>Required</sup> <a name="frontend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.frontend"></a>

```typescript
public readonly frontend: string;
```

- *Type:* string

ID of the load balancer frontend to which the frontend rule is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#frontend LoadbalancerFrontendRule#frontend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the frontend rule. Must be unique within the frontend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Rule with the higher priority goes first. Rules with the same priority processed in alphabetical order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#priority LoadbalancerFrontendRule#priority}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | LoadbalancerFrontendRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#actions LoadbalancerFrontendRule#actions}

---

##### `matchers`<sup>Optional</sup> <a name="matchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.matchers"></a>

```typescript
public readonly matchers: IResolvable | LoadbalancerFrontendRuleMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]

matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#matchers LoadbalancerFrontendRule#matchers}

---

##### `matchingCondition`<sup>Optional</sup> <a name="matchingCondition" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleConfig.property.matchingCondition"></a>

```typescript
public readonly matchingCondition: string;
```

- *Type:* string

Defines boolean operator used to combine multiple matchers. Defaults to `and`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#matching_condition LoadbalancerFrontendRule#matching_condition}

---

### LoadbalancerFrontendRuleMatchers <a name="LoadbalancerFrontendRuleMatchers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchers: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySize">bodySize</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]</code> | body_size block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySizeRange">bodySizeRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]</code> | body_size_range block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.cookie">cookie</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]</code> | cookie block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.host">host</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]</code> | host block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpMethod">httpMethod</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]</code> | http_method block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpStatus">httpStatus</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]</code> | http_status block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpStatusRange">httpStatusRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]</code> | http_status_range block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.numMembersUp">numMembersUp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]</code> | num_members_up block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.path">path</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]</code> | path block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.requestHeader">requestHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.responseHeader">responseHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]</code> | response_header block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcIp">srcIp</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]</code> | src_ip block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPort">srcPort</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]</code> | src_port block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPortRange">srcPortRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]</code> | src_port_range block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.url">url</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]</code> | url block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlParam">urlParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]</code> | url_param block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlQuery">urlQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]</code> | url_query block. |

---

##### `bodySize`<sup>Optional</sup> <a name="bodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySize"></a>

```typescript
public readonly bodySize: IResolvable | LoadbalancerFrontendRuleMatchersBodySize[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]

body_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#body_size LoadbalancerFrontendRule#body_size}

---

##### `bodySizeRange`<sup>Optional</sup> <a name="bodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.bodySizeRange"></a>

```typescript
public readonly bodySizeRange: IResolvable | LoadbalancerFrontendRuleMatchersBodySizeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]

body_size_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#body_size_range LoadbalancerFrontendRule#body_size_range}

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.cookie"></a>

```typescript
public readonly cookie: IResolvable | LoadbalancerFrontendRuleMatchersCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]

cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#cookie LoadbalancerFrontendRule#cookie}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.header"></a>

```typescript
public readonly header: IResolvable | LoadbalancerFrontendRuleMatchersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#header LoadbalancerFrontendRule#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.host"></a>

```typescript
public readonly host: IResolvable | LoadbalancerFrontendRuleMatchersHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#host LoadbalancerFrontendRule#host}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpMethod"></a>

```typescript
public readonly httpMethod: IResolvable | LoadbalancerFrontendRuleMatchersHttpMethod[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]

http_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#http_method LoadbalancerFrontendRule#http_method}

---

##### `httpStatus`<sup>Optional</sup> <a name="httpStatus" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpStatus"></a>

```typescript
public readonly httpStatus: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]

http_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#http_status LoadbalancerFrontendRule#http_status}

---

##### `httpStatusRange`<sup>Optional</sup> <a name="httpStatusRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.httpStatusRange"></a>

```typescript
public readonly httpStatusRange: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatusRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]

http_status_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#http_status_range LoadbalancerFrontendRule#http_status_range}

---

##### `numMembersUp`<sup>Optional</sup> <a name="numMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.numMembersUp"></a>

```typescript
public readonly numMembersUp: IResolvable | LoadbalancerFrontendRuleMatchersNumMembersUp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]

num_members_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#num_members_up LoadbalancerFrontendRule#num_members_up}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.path"></a>

```typescript
public readonly path: IResolvable | LoadbalancerFrontendRuleMatchersPath[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#path LoadbalancerFrontendRule#path}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | LoadbalancerFrontendRuleMatchersRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#request_header LoadbalancerFrontendRule#request_header}

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.responseHeader"></a>

```typescript
public readonly responseHeader: IResolvable | LoadbalancerFrontendRuleMatchersResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#response_header LoadbalancerFrontendRule#response_header}

---

##### `srcIp`<sup>Optional</sup> <a name="srcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcIp"></a>

```typescript
public readonly srcIp: IResolvable | LoadbalancerFrontendRuleMatchersSrcIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]

src_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#src_ip LoadbalancerFrontendRule#src_ip}

---

##### `srcPort`<sup>Optional</sup> <a name="srcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPort"></a>

```typescript
public readonly srcPort: IResolvable | LoadbalancerFrontendRuleMatchersSrcPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]

src_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#src_port LoadbalancerFrontendRule#src_port}

---

##### `srcPortRange`<sup>Optional</sup> <a name="srcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.srcPortRange"></a>

```typescript
public readonly srcPortRange: IResolvable | LoadbalancerFrontendRuleMatchersSrcPortRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]

src_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#src_port_range LoadbalancerFrontendRule#src_port_range}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.url"></a>

```typescript
public readonly url: IResolvable | LoadbalancerFrontendRuleMatchersUrl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]

url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#url LoadbalancerFrontendRule#url}

---

##### `urlParam`<sup>Optional</sup> <a name="urlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlParam"></a>

```typescript
public readonly urlParam: IResolvable | LoadbalancerFrontendRuleMatchersUrlParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]

url_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#url_param LoadbalancerFrontendRule#url_param}

---

##### `urlQuery`<sup>Optional</sup> <a name="urlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers.property.urlQuery"></a>

```typescript
public readonly urlQuery: IResolvable | LoadbalancerFrontendRuleMatchersUrlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]

url_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#url_query LoadbalancerFrontendRule#url_query}

---

### LoadbalancerFrontendRuleMatchersBodySize <a name="LoadbalancerFrontendRuleMatchersBodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersBodySize: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.method">method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.value">value</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersBodySizeRange <a name="LoadbalancerFrontendRuleMatchersBodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersBodySizeRange: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeStart">rangeStart</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersCookie <a name="LoadbalancerFrontendRuleMatchersCookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersCookie: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.name">name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersHeader <a name="LoadbalancerFrontendRuleMatchersHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersHeader: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.name">name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersHost <a name="LoadbalancerFrontendRuleMatchersHost" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersHost: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.value">value</a></code> | <code>string</code> | String value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersHttpMethod <a name="LoadbalancerFrontendRuleMatchersHttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersHttpMethod: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.value">value</a></code> | <code>string</code> | String value (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersHttpStatus <a name="LoadbalancerFrontendRuleMatchersHttpStatus" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersHttpStatus: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.property.method">method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.property.value">value</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersHttpStatusRange <a name="LoadbalancerFrontendRuleMatchersHttpStatusRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersHttpStatusRange: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.property.rangeStart">rangeStart</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersNumMembersUp <a name="LoadbalancerFrontendRuleMatchersNumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersNumMembersUp: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.backendName">backendName</a></code> | <code>string</code> | The name of the `backend`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.method">method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.value">value</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.backendName"></a>

```typescript
public readonly backendName: string;
```

- *Type:* string

The name of the `backend`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#backend_name LoadbalancerFrontendRule#backend_name}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersPath <a name="LoadbalancerFrontendRuleMatchersPath" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersPath: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersRequestHeader <a name="LoadbalancerFrontendRuleMatchersRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersRequestHeader: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.name">name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersResponseHeader <a name="LoadbalancerFrontendRuleMatchersResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersResponseHeader: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.name">name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersSrcIp <a name="LoadbalancerFrontendRuleMatchersSrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersSrcIp: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.value">value</a></code> | <code>string</code> | IP address. CIDR masks are supported, e.g. `192.168.0.0/24`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

IP address. CIDR masks are supported, e.g. `192.168.0.0/24`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersSrcPort <a name="LoadbalancerFrontendRuleMatchersSrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersSrcPort: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.method">method</a></code> | <code>string</code> | Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.value">value</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`equal`, `greater`, `greater_or_equal`, `less`, `less_or_equal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersSrcPortRange <a name="LoadbalancerFrontendRuleMatchersSrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersSrcPortRange: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeStart">rangeStart</a></code> | <code>number</code> | Integer value. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#range_end LoadbalancerFrontendRule#range_end}

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number

Integer value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#range_start LoadbalancerFrontendRule#range_start}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

### LoadbalancerFrontendRuleMatchersUrl <a name="LoadbalancerFrontendRuleMatchersUrl" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersUrl: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersUrlParam <a name="LoadbalancerFrontendRuleMatchersUrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersUrlParam: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.name">name</a></code> | <code>string</code> | Name of the argument. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#name LoadbalancerFrontendRule#name}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

### LoadbalancerFrontendRuleMatchersUrlQuery <a name="LoadbalancerFrontendRuleMatchersUrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

const loadbalancerFrontendRuleMatchersUrlQuery: loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.method">method</a></code> | <code>string</code> | Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`). |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if case should be ignored. Defaults to `false`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if the condition should be inverted. Works similarly to logical NOT operator. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.value">value</a></code> | <code>string</code> | String value. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Match method (`exact`, `substring`, `regexp`, `starts`, `ends`, `domain`, `ip`, `exists`).

Matcher with `exists` and `ip` methods must be used without `value` and `ignore_case` fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#method LoadbalancerFrontendRule#method}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if case should be ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#ignore_case LoadbalancerFrontendRule#ignore_case}

---

##### `inverse`<sup>Optional</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if the condition should be inverted. Works similarly to logical NOT operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#inverse LoadbalancerFrontendRule#inverse}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/resources/loadbalancer_frontend_rule#value LoadbalancerFrontendRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendRuleActionsHttpRedirectList <a name="LoadbalancerFrontendRuleActionsHttpRedirectList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsHttpRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsHttpRedirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]

---


### LoadbalancerFrontendRuleActionsHttpRedirectOutputReference <a name="LoadbalancerFrontendRuleActionsHttpRedirectOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.statusInput">statusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsHttpRedirect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>

---


### LoadbalancerFrontendRuleActionsHttpReturnList <a name="LoadbalancerFrontendRuleActionsHttpReturnList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsHttpReturnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsHttpReturn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]

---


### LoadbalancerFrontendRuleActionsHttpReturnOutputReference <a name="LoadbalancerFrontendRuleActionsHttpReturnOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.statusInput">statusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: number;
```

- *Type:* number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsHttpReturn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>

---


### LoadbalancerFrontendRuleActionsList <a name="LoadbalancerFrontendRuleActionsList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>[]

---


### LoadbalancerFrontendRuleActionsOutputReference <a name="LoadbalancerFrontendRuleActionsOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpRedirect">putHttpRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpReturn">putHttpReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetForwardedHeaders">putSetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetRequestHeader">putSetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetResponseHeader">putSetResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putTcpReject">putTcpReject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putUseBackend">putUseBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpRedirect">resetHttpRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpReturn">resetHttpReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetForwardedHeaders">resetSetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetRequestHeader">resetSetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetResponseHeader">resetSetResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetTcpReject">resetTcpReject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetUseBackend">resetUseBackend</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpRedirect` <a name="putHttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpRedirect"></a>

```typescript
public putHttpRedirect(value: IResolvable | LoadbalancerFrontendRuleActionsHttpRedirect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpRedirect.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]

---

##### `putHttpReturn` <a name="putHttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpReturn"></a>

```typescript
public putHttpReturn(value: IResolvable | LoadbalancerFrontendRuleActionsHttpReturn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putHttpReturn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]

---

##### `putSetForwardedHeaders` <a name="putSetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetForwardedHeaders"></a>

```typescript
public putSetForwardedHeaders(value: IResolvable | LoadbalancerFrontendRuleActionsSetForwardedHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetForwardedHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]

---

##### `putSetRequestHeader` <a name="putSetRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetRequestHeader"></a>

```typescript
public putSetRequestHeader(value: IResolvable | LoadbalancerFrontendRuleActionsSetRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetRequestHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]

---

##### `putSetResponseHeader` <a name="putSetResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetResponseHeader"></a>

```typescript
public putSetResponseHeader(value: IResolvable | LoadbalancerFrontendRuleActionsSetResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putSetResponseHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]

---

##### `putTcpReject` <a name="putTcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putTcpReject"></a>

```typescript
public putTcpReject(value: IResolvable | LoadbalancerFrontendRuleActionsTcpReject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putTcpReject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]

---

##### `putUseBackend` <a name="putUseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putUseBackend"></a>

```typescript
public putUseBackend(value: IResolvable | LoadbalancerFrontendRuleActionsUseBackend[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.putUseBackend.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]

---

##### `resetHttpRedirect` <a name="resetHttpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpRedirect"></a>

```typescript
public resetHttpRedirect(): void
```

##### `resetHttpReturn` <a name="resetHttpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetHttpReturn"></a>

```typescript
public resetHttpReturn(): void
```

##### `resetSetForwardedHeaders` <a name="resetSetForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetForwardedHeaders"></a>

```typescript
public resetSetForwardedHeaders(): void
```

##### `resetSetRequestHeader` <a name="resetSetRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetRequestHeader"></a>

```typescript
public resetSetRequestHeader(): void
```

##### `resetSetResponseHeader` <a name="resetSetResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetSetResponseHeader"></a>

```typescript
public resetSetResponseHeader(): void
```

##### `resetTcpReject` <a name="resetTcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetTcpReject"></a>

```typescript
public resetTcpReject(): void
```

##### `resetUseBackend` <a name="resetUseBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.resetUseBackend"></a>

```typescript
public resetUseBackend(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirect">httpRedirect</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList">LoadbalancerFrontendRuleActionsHttpRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturn">httpReturn</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList">LoadbalancerFrontendRuleActionsHttpReturnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeaders">setForwardedHeaders</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList">LoadbalancerFrontendRuleActionsSetForwardedHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setRequestHeader">setRequestHeader</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList">LoadbalancerFrontendRuleActionsSetRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setResponseHeader">setResponseHeader</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList">LoadbalancerFrontendRuleActionsSetResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpReject">tcpReject</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList">LoadbalancerFrontendRuleActionsTcpRejectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackend">useBackend</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList">LoadbalancerFrontendRuleActionsUseBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirectInput">httpRedirectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturnInput">httpReturnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeadersInput">setForwardedHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setRequestHeaderInput">setRequestHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setResponseHeaderInput">setResponseHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpRejectInput">tcpRejectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackendInput">useBackendInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpRedirect`<sup>Required</sup> <a name="httpRedirect" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirect"></a>

```typescript
public readonly httpRedirect: LoadbalancerFrontendRuleActionsHttpRedirectList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirectList">LoadbalancerFrontendRuleActionsHttpRedirectList</a>

---

##### `httpReturn`<sup>Required</sup> <a name="httpReturn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturn"></a>

```typescript
public readonly httpReturn: LoadbalancerFrontendRuleActionsHttpReturnList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturnList">LoadbalancerFrontendRuleActionsHttpReturnList</a>

---

##### `setForwardedHeaders`<sup>Required</sup> <a name="setForwardedHeaders" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeaders"></a>

```typescript
public readonly setForwardedHeaders: LoadbalancerFrontendRuleActionsSetForwardedHeadersList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList">LoadbalancerFrontendRuleActionsSetForwardedHeadersList</a>

---

##### `setRequestHeader`<sup>Required</sup> <a name="setRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setRequestHeader"></a>

```typescript
public readonly setRequestHeader: LoadbalancerFrontendRuleActionsSetRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList">LoadbalancerFrontendRuleActionsSetRequestHeaderList</a>

---

##### `setResponseHeader`<sup>Required</sup> <a name="setResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setResponseHeader"></a>

```typescript
public readonly setResponseHeader: LoadbalancerFrontendRuleActionsSetResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList">LoadbalancerFrontendRuleActionsSetResponseHeaderList</a>

---

##### `tcpReject`<sup>Required</sup> <a name="tcpReject" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpReject"></a>

```typescript
public readonly tcpReject: LoadbalancerFrontendRuleActionsTcpRejectList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList">LoadbalancerFrontendRuleActionsTcpRejectList</a>

---

##### `useBackend`<sup>Required</sup> <a name="useBackend" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackend"></a>

```typescript
public readonly useBackend: LoadbalancerFrontendRuleActionsUseBackendList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList">LoadbalancerFrontendRuleActionsUseBackendList</a>

---

##### `httpRedirectInput`<sup>Optional</sup> <a name="httpRedirectInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpRedirectInput"></a>

```typescript
public readonly httpRedirectInput: IResolvable | LoadbalancerFrontendRuleActionsHttpRedirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpRedirect">LoadbalancerFrontendRuleActionsHttpRedirect</a>[]

---

##### `httpReturnInput`<sup>Optional</sup> <a name="httpReturnInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.httpReturnInput"></a>

```typescript
public readonly httpReturnInput: IResolvable | LoadbalancerFrontendRuleActionsHttpReturn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsHttpReturn">LoadbalancerFrontendRuleActionsHttpReturn</a>[]

---

##### `setForwardedHeadersInput`<sup>Optional</sup> <a name="setForwardedHeadersInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setForwardedHeadersInput"></a>

```typescript
public readonly setForwardedHeadersInput: IResolvable | LoadbalancerFrontendRuleActionsSetForwardedHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]

---

##### `setRequestHeaderInput`<sup>Optional</sup> <a name="setRequestHeaderInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setRequestHeaderInput"></a>

```typescript
public readonly setRequestHeaderInput: IResolvable | LoadbalancerFrontendRuleActionsSetRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]

---

##### `setResponseHeaderInput`<sup>Optional</sup> <a name="setResponseHeaderInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.setResponseHeaderInput"></a>

```typescript
public readonly setResponseHeaderInput: IResolvable | LoadbalancerFrontendRuleActionsSetResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]

---

##### `tcpRejectInput`<sup>Optional</sup> <a name="tcpRejectInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.tcpRejectInput"></a>

```typescript
public readonly tcpRejectInput: IResolvable | LoadbalancerFrontendRuleActionsTcpReject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]

---

##### `useBackendInput`<sup>Optional</sup> <a name="useBackendInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.useBackendInput"></a>

```typescript
public readonly useBackendInput: IResolvable | LoadbalancerFrontendRuleActionsUseBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActions">LoadbalancerFrontendRuleActions</a>

---


### LoadbalancerFrontendRuleActionsSetForwardedHeadersList <a name="LoadbalancerFrontendRuleActionsSetForwardedHeadersList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsSetForwardedHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>[]

---


### LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference <a name="LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resetActive">resetActive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActive` <a name="resetActive" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.resetActive"></a>

```typescript
public resetActive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsSetForwardedHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetForwardedHeaders">LoadbalancerFrontendRuleActionsSetForwardedHeaders</a>

---


### LoadbalancerFrontendRuleActionsSetRequestHeaderList <a name="LoadbalancerFrontendRuleActionsSetRequestHeaderList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsSetRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>[]

---


### LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference <a name="LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsSetRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetRequestHeader">LoadbalancerFrontendRuleActionsSetRequestHeader</a>

---


### LoadbalancerFrontendRuleActionsSetResponseHeaderList <a name="LoadbalancerFrontendRuleActionsSetResponseHeaderList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsSetResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>[]

---


### LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference <a name="LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsSetResponseHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsSetResponseHeader">LoadbalancerFrontendRuleActionsSetResponseHeader</a>

---


### LoadbalancerFrontendRuleActionsTcpRejectList <a name="LoadbalancerFrontendRuleActionsTcpRejectList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsTcpRejectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsTcpReject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>[]

---


### LoadbalancerFrontendRuleActionsTcpRejectOutputReference <a name="LoadbalancerFrontendRuleActionsTcpRejectOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resetActive">resetActive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActive` <a name="resetActive" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.resetActive"></a>

```typescript
public resetActive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpRejectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsTcpReject;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsTcpReject">LoadbalancerFrontendRuleActionsTcpReject</a>

---


### LoadbalancerFrontendRuleActionsUseBackendList <a name="LoadbalancerFrontendRuleActionsUseBackendList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleActionsUseBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsUseBackend[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>[]

---


### LoadbalancerFrontendRuleActionsUseBackendOutputReference <a name="LoadbalancerFrontendRuleActionsUseBackendOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendNameInput">backendNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendName">backendName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendNameInput`<sup>Optional</sup> <a name="backendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendNameInput"></a>

```typescript
public readonly backendNameInput: string;
```

- *Type:* string

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.backendName"></a>

```typescript
public readonly backendName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleActionsUseBackend;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleActionsUseBackend">LoadbalancerFrontendRuleActionsUseBackend</a>

---


### LoadbalancerFrontendRuleMatchersBodySizeList <a name="LoadbalancerFrontendRuleMatchersBodySizeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersBodySizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersBodySize[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]

---


### LoadbalancerFrontendRuleMatchersBodySizeOutputReference <a name="LoadbalancerFrontendRuleMatchersBodySizeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersBodySize;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>

---


### LoadbalancerFrontendRuleMatchersBodySizeRangeList <a name="LoadbalancerFrontendRuleMatchersBodySizeRangeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersBodySizeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]

---


### LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference <a name="LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEndInput">rangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStartInput">rangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStart">rangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeEndInput`<sup>Optional</sup> <a name="rangeEndInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEndInput"></a>

```typescript
public readonly rangeEndInput: number;
```

- *Type:* number

---

##### `rangeStartInput`<sup>Optional</sup> <a name="rangeStartInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStartInput"></a>

```typescript
public readonly rangeStartInput: number;
```

- *Type:* number

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersBodySizeRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>

---


### LoadbalancerFrontendRuleMatchersCookieList <a name="LoadbalancerFrontendRuleMatchersCookieList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]

---


### LoadbalancerFrontendRuleMatchersCookieOutputReference <a name="LoadbalancerFrontendRuleMatchersCookieOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersCookie;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>

---


### LoadbalancerFrontendRuleMatchersHeaderList <a name="LoadbalancerFrontendRuleMatchersHeaderList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]

---


### LoadbalancerFrontendRuleMatchersHeaderOutputReference <a name="LoadbalancerFrontendRuleMatchersHeaderOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>

---


### LoadbalancerFrontendRuleMatchersHostList <a name="LoadbalancerFrontendRuleMatchersHostList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]

---


### LoadbalancerFrontendRuleMatchersHostOutputReference <a name="LoadbalancerFrontendRuleMatchersHostOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>

---


### LoadbalancerFrontendRuleMatchersHttpMethodList <a name="LoadbalancerFrontendRuleMatchersHttpMethodList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersHttpMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHttpMethod[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]

---


### LoadbalancerFrontendRuleMatchersHttpMethodOutputReference <a name="LoadbalancerFrontendRuleMatchersHttpMethodOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHttpMethod;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>

---


### LoadbalancerFrontendRuleMatchersHttpStatusList <a name="LoadbalancerFrontendRuleMatchersHttpStatusList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersHttpStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]

---


### LoadbalancerFrontendRuleMatchersHttpStatusOutputReference <a name="LoadbalancerFrontendRuleMatchersHttpStatusOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatus;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>

---


### LoadbalancerFrontendRuleMatchersHttpStatusRangeList <a name="LoadbalancerFrontendRuleMatchersHttpStatusRangeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatusRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]

---


### LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference <a name="LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeEndInput">rangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeStartInput">rangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeStart">rangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeEndInput`<sup>Optional</sup> <a name="rangeEndInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeEndInput"></a>

```typescript
public readonly rangeEndInput: number;
```

- *Type:* number

---

##### `rangeStartInput`<sup>Optional</sup> <a name="rangeStartInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeStartInput"></a>

```typescript
public readonly rangeStartInput: number;
```

- *Type:* number

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatusRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>

---


### LoadbalancerFrontendRuleMatchersList <a name="LoadbalancerFrontendRuleMatchersList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>[]

---


### LoadbalancerFrontendRuleMatchersNumMembersUpList <a name="LoadbalancerFrontendRuleMatchersNumMembersUpList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersNumMembersUp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]

---


### LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference <a name="LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendNameInput">backendNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendName">backendName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendNameInput`<sup>Optional</sup> <a name="backendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendNameInput"></a>

```typescript
public readonly backendNameInput: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `backendName`<sup>Required</sup> <a name="backendName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.backendName"></a>

```typescript
public readonly backendName: string;
```

- *Type:* string

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersNumMembersUp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>

---


### LoadbalancerFrontendRuleMatchersOutputReference <a name="LoadbalancerFrontendRuleMatchersOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySize">putBodySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySizeRange">putBodySizeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putCookie">putCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpMethod">putHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpStatus">putHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpStatusRange">putHttpStatusRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putNumMembersUp">putNumMembersUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putPath">putPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putResponseHeader">putResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcIp">putSrcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPort">putSrcPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPortRange">putSrcPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrl">putUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlParam">putUrlParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlQuery">putUrlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySize">resetBodySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySizeRange">resetBodySizeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetCookie">resetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpStatus">resetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpStatusRange">resetHttpStatusRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetNumMembersUp">resetNumMembersUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcIp">resetSrcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPort">resetSrcPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPortRange">resetSrcPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlParam">resetUrlParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlQuery">resetUrlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBodySize` <a name="putBodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySize"></a>

```typescript
public putBodySize(value: IResolvable | LoadbalancerFrontendRuleMatchersBodySize[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySize.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]

---

##### `putBodySizeRange` <a name="putBodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySizeRange"></a>

```typescript
public putBodySizeRange(value: IResolvable | LoadbalancerFrontendRuleMatchersBodySizeRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putBodySizeRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]

---

##### `putCookie` <a name="putCookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putCookie"></a>

```typescript
public putCookie(value: IResolvable | LoadbalancerFrontendRuleMatchersCookie[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putCookie.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | LoadbalancerFrontendRuleMatchersHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]

---

##### `putHost` <a name="putHost" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHost"></a>

```typescript
public putHost(value: IResolvable | LoadbalancerFrontendRuleMatchersHost[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHost.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]

---

##### `putHttpMethod` <a name="putHttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpMethod"></a>

```typescript
public putHttpMethod(value: IResolvable | LoadbalancerFrontendRuleMatchersHttpMethod[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpMethod.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]

---

##### `putHttpStatus` <a name="putHttpStatus" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpStatus"></a>

```typescript
public putHttpStatus(value: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatus[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpStatus.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]

---

##### `putHttpStatusRange` <a name="putHttpStatusRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpStatusRange"></a>

```typescript
public putHttpStatusRange(value: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatusRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putHttpStatusRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]

---

##### `putNumMembersUp` <a name="putNumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putNumMembersUp"></a>

```typescript
public putNumMembersUp(value: IResolvable | LoadbalancerFrontendRuleMatchersNumMembersUp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putNumMembersUp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]

---

##### `putPath` <a name="putPath" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putPath"></a>

```typescript
public putPath(value: IResolvable | LoadbalancerFrontendRuleMatchersPath[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putPath.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | LoadbalancerFrontendRuleMatchersRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]

---

##### `putResponseHeader` <a name="putResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putResponseHeader"></a>

```typescript
public putResponseHeader(value: IResolvable | LoadbalancerFrontendRuleMatchersResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]

---

##### `putSrcIp` <a name="putSrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcIp"></a>

```typescript
public putSrcIp(value: IResolvable | LoadbalancerFrontendRuleMatchersSrcIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]

---

##### `putSrcPort` <a name="putSrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPort"></a>

```typescript
public putSrcPort(value: IResolvable | LoadbalancerFrontendRuleMatchersSrcPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]

---

##### `putSrcPortRange` <a name="putSrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPortRange"></a>

```typescript
public putSrcPortRange(value: IResolvable | LoadbalancerFrontendRuleMatchersSrcPortRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putSrcPortRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]

---

##### `putUrl` <a name="putUrl" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrl"></a>

```typescript
public putUrl(value: IResolvable | LoadbalancerFrontendRuleMatchersUrl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrl.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]

---

##### `putUrlParam` <a name="putUrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlParam"></a>

```typescript
public putUrlParam(value: IResolvable | LoadbalancerFrontendRuleMatchersUrlParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]

---

##### `putUrlQuery` <a name="putUrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlQuery"></a>

```typescript
public putUrlQuery(value: IResolvable | LoadbalancerFrontendRuleMatchersUrlQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.putUrlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]

---

##### `resetBodySize` <a name="resetBodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySize"></a>

```typescript
public resetBodySize(): void
```

##### `resetBodySizeRange` <a name="resetBodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetBodySizeRange"></a>

```typescript
public resetBodySizeRange(): void
```

##### `resetCookie` <a name="resetCookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetCookie"></a>

```typescript
public resetCookie(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetHttpStatus` <a name="resetHttpStatus" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpStatus"></a>

```typescript
public resetHttpStatus(): void
```

##### `resetHttpStatusRange` <a name="resetHttpStatusRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetHttpStatusRange"></a>

```typescript
public resetHttpStatusRange(): void
```

##### `resetNumMembersUp` <a name="resetNumMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetNumMembersUp"></a>

```typescript
public resetNumMembersUp(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetResponseHeader"></a>

```typescript
public resetResponseHeader(): void
```

##### `resetSrcIp` <a name="resetSrcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcIp"></a>

```typescript
public resetSrcIp(): void
```

##### `resetSrcPort` <a name="resetSrcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPort"></a>

```typescript
public resetSrcPort(): void
```

##### `resetSrcPortRange` <a name="resetSrcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetSrcPortRange"></a>

```typescript
public resetSrcPortRange(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlParam` <a name="resetUrlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlParam"></a>

```typescript
public resetUrlParam(): void
```

##### `resetUrlQuery` <a name="resetUrlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.resetUrlQuery"></a>

```typescript
public resetUrlQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySize">bodySize</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList">LoadbalancerFrontendRuleMatchersBodySizeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRange">bodySizeRange</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList">LoadbalancerFrontendRuleMatchersBodySizeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList">LoadbalancerFrontendRuleMatchersCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList">LoadbalancerFrontendRuleMatchersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList">LoadbalancerFrontendRuleMatchersHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethod">httpMethod</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList">LoadbalancerFrontendRuleMatchersHttpMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatus">httpStatus</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList">LoadbalancerFrontendRuleMatchersHttpStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatusRange">httpStatusRange</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList">LoadbalancerFrontendRuleMatchersHttpStatusRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUp">numMembersUp</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList">LoadbalancerFrontendRuleMatchersNumMembersUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList">LoadbalancerFrontendRuleMatchersPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList">LoadbalancerFrontendRuleMatchersRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.responseHeader">responseHeader</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList">LoadbalancerFrontendRuleMatchersResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIp">srcIp</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList">LoadbalancerFrontendRuleMatchersSrcIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPort">srcPort</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList">LoadbalancerFrontendRuleMatchersSrcPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRange">srcPortRange</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList">LoadbalancerFrontendRuleMatchersSrcPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.url">url</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList">LoadbalancerFrontendRuleMatchersUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParam">urlParam</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList">LoadbalancerFrontendRuleMatchersUrlParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQuery">urlQuery</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList">LoadbalancerFrontendRuleMatchersUrlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeInput">bodySizeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRangeInput">bodySizeRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookieInput">cookieInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.hostInput">hostInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatusInput">httpStatusInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatusRangeInput">httpStatusRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUpInput">numMembersUpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.pathInput">pathInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIpInput">srcIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortInput">srcPortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRangeInput">srcPortRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlInput">urlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParamInput">urlParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQueryInput">urlQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodySize`<sup>Required</sup> <a name="bodySize" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySize"></a>

```typescript
public readonly bodySize: LoadbalancerFrontendRuleMatchersBodySizeList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeList">LoadbalancerFrontendRuleMatchersBodySizeList</a>

---

##### `bodySizeRange`<sup>Required</sup> <a name="bodySizeRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRange"></a>

```typescript
public readonly bodySizeRange: LoadbalancerFrontendRuleMatchersBodySizeRangeList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRangeList">LoadbalancerFrontendRuleMatchersBodySizeRangeList</a>

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookie"></a>

```typescript
public readonly cookie: LoadbalancerFrontendRuleMatchersCookieList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookieList">LoadbalancerFrontendRuleMatchersCookieList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.header"></a>

```typescript
public readonly header: LoadbalancerFrontendRuleMatchersHeaderList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeaderList">LoadbalancerFrontendRuleMatchersHeaderList</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.host"></a>

```typescript
public readonly host: LoadbalancerFrontendRuleMatchersHostList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHostList">LoadbalancerFrontendRuleMatchersHostList</a>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: LoadbalancerFrontendRuleMatchersHttpMethodList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethodList">LoadbalancerFrontendRuleMatchersHttpMethodList</a>

---

##### `httpStatus`<sup>Required</sup> <a name="httpStatus" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatus"></a>

```typescript
public readonly httpStatus: LoadbalancerFrontendRuleMatchersHttpStatusList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusList">LoadbalancerFrontendRuleMatchersHttpStatusList</a>

---

##### `httpStatusRange`<sup>Required</sup> <a name="httpStatusRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatusRange"></a>

```typescript
public readonly httpStatusRange: LoadbalancerFrontendRuleMatchersHttpStatusRangeList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRangeList">LoadbalancerFrontendRuleMatchersHttpStatusRangeList</a>

---

##### `numMembersUp`<sup>Required</sup> <a name="numMembersUp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUp"></a>

```typescript
public readonly numMembersUp: LoadbalancerFrontendRuleMatchersNumMembersUpList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUpList">LoadbalancerFrontendRuleMatchersNumMembersUpList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.path"></a>

```typescript
public readonly path: LoadbalancerFrontendRuleMatchersPathList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList">LoadbalancerFrontendRuleMatchersPathList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: LoadbalancerFrontendRuleMatchersRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList">LoadbalancerFrontendRuleMatchersRequestHeaderList</a>

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: LoadbalancerFrontendRuleMatchersResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList">LoadbalancerFrontendRuleMatchersResponseHeaderList</a>

---

##### `srcIp`<sup>Required</sup> <a name="srcIp" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIp"></a>

```typescript
public readonly srcIp: LoadbalancerFrontendRuleMatchersSrcIpList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList">LoadbalancerFrontendRuleMatchersSrcIpList</a>

---

##### `srcPort`<sup>Required</sup> <a name="srcPort" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPort"></a>

```typescript
public readonly srcPort: LoadbalancerFrontendRuleMatchersSrcPortList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList">LoadbalancerFrontendRuleMatchersSrcPortList</a>

---

##### `srcPortRange`<sup>Required</sup> <a name="srcPortRange" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRange"></a>

```typescript
public readonly srcPortRange: LoadbalancerFrontendRuleMatchersSrcPortRangeList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList">LoadbalancerFrontendRuleMatchersSrcPortRangeList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.url"></a>

```typescript
public readonly url: LoadbalancerFrontendRuleMatchersUrlList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList">LoadbalancerFrontendRuleMatchersUrlList</a>

---

##### `urlParam`<sup>Required</sup> <a name="urlParam" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParam"></a>

```typescript
public readonly urlParam: LoadbalancerFrontendRuleMatchersUrlParamList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList">LoadbalancerFrontendRuleMatchersUrlParamList</a>

---

##### `urlQuery`<sup>Required</sup> <a name="urlQuery" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQuery"></a>

```typescript
public readonly urlQuery: LoadbalancerFrontendRuleMatchersUrlQueryList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList">LoadbalancerFrontendRuleMatchersUrlQueryList</a>

---

##### `bodySizeInput`<sup>Optional</sup> <a name="bodySizeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeInput"></a>

```typescript
public readonly bodySizeInput: IResolvable | LoadbalancerFrontendRuleMatchersBodySize[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySize">LoadbalancerFrontendRuleMatchersBodySize</a>[]

---

##### `bodySizeRangeInput`<sup>Optional</sup> <a name="bodySizeRangeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.bodySizeRangeInput"></a>

```typescript
public readonly bodySizeRangeInput: IResolvable | LoadbalancerFrontendRuleMatchersBodySizeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersBodySizeRange">LoadbalancerFrontendRuleMatchersBodySizeRange</a>[]

---

##### `cookieInput`<sup>Optional</sup> <a name="cookieInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.cookieInput"></a>

```typescript
public readonly cookieInput: IResolvable | LoadbalancerFrontendRuleMatchersCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersCookie">LoadbalancerFrontendRuleMatchersCookie</a>[]

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | LoadbalancerFrontendRuleMatchersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHeader">LoadbalancerFrontendRuleMatchersHeader</a>[]

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: IResolvable | LoadbalancerFrontendRuleMatchersHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHost">LoadbalancerFrontendRuleMatchersHost</a>[]

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: IResolvable | LoadbalancerFrontendRuleMatchersHttpMethod[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpMethod">LoadbalancerFrontendRuleMatchersHttpMethod</a>[]

---

##### `httpStatusInput`<sup>Optional</sup> <a name="httpStatusInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatusInput"></a>

```typescript
public readonly httpStatusInput: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatus[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatus">LoadbalancerFrontendRuleMatchersHttpStatus</a>[]

---

##### `httpStatusRangeInput`<sup>Optional</sup> <a name="httpStatusRangeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.httpStatusRangeInput"></a>

```typescript
public readonly httpStatusRangeInput: IResolvable | LoadbalancerFrontendRuleMatchersHttpStatusRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersHttpStatusRange">LoadbalancerFrontendRuleMatchersHttpStatusRange</a>[]

---

##### `numMembersUpInput`<sup>Optional</sup> <a name="numMembersUpInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.numMembersUpInput"></a>

```typescript
public readonly numMembersUpInput: IResolvable | LoadbalancerFrontendRuleMatchersNumMembersUp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersNumMembersUp">LoadbalancerFrontendRuleMatchersNumMembersUp</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: IResolvable | LoadbalancerFrontendRuleMatchersPath[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | LoadbalancerFrontendRuleMatchersRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.responseHeaderInput"></a>

```typescript
public readonly responseHeaderInput: IResolvable | LoadbalancerFrontendRuleMatchersResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]

---

##### `srcIpInput`<sup>Optional</sup> <a name="srcIpInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcIpInput"></a>

```typescript
public readonly srcIpInput: IResolvable | LoadbalancerFrontendRuleMatchersSrcIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]

---

##### `srcPortInput`<sup>Optional</sup> <a name="srcPortInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortInput"></a>

```typescript
public readonly srcPortInput: IResolvable | LoadbalancerFrontendRuleMatchersSrcPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]

---

##### `srcPortRangeInput`<sup>Optional</sup> <a name="srcPortRangeInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.srcPortRangeInput"></a>

```typescript
public readonly srcPortRangeInput: IResolvable | LoadbalancerFrontendRuleMatchersSrcPortRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: IResolvable | LoadbalancerFrontendRuleMatchersUrl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]

---

##### `urlParamInput`<sup>Optional</sup> <a name="urlParamInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlParamInput"></a>

```typescript
public readonly urlParamInput: IResolvable | LoadbalancerFrontendRuleMatchersUrlParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]

---

##### `urlQueryInput`<sup>Optional</sup> <a name="urlQueryInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.urlQueryInput"></a>

```typescript
public readonly urlQueryInput: IResolvable | LoadbalancerFrontendRuleMatchersUrlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchers">LoadbalancerFrontendRuleMatchers</a>

---


### LoadbalancerFrontendRuleMatchersPathList <a name="LoadbalancerFrontendRuleMatchersPathList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersPath[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>[]

---


### LoadbalancerFrontendRuleMatchersPathOutputReference <a name="LoadbalancerFrontendRuleMatchersPathOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersPath;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersPath">LoadbalancerFrontendRuleMatchersPath</a>

---


### LoadbalancerFrontendRuleMatchersRequestHeaderList <a name="LoadbalancerFrontendRuleMatchersRequestHeaderList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>[]

---


### LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference <a name="LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersRequestHeader">LoadbalancerFrontendRuleMatchersRequestHeader</a>

---


### LoadbalancerFrontendRuleMatchersResponseHeaderList <a name="LoadbalancerFrontendRuleMatchersResponseHeaderList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>[]

---


### LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference <a name="LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersResponseHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersResponseHeader">LoadbalancerFrontendRuleMatchersResponseHeader</a>

---


### LoadbalancerFrontendRuleMatchersSrcIpList <a name="LoadbalancerFrontendRuleMatchersSrcIpList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersSrcIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersSrcIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>[]

---


### LoadbalancerFrontendRuleMatchersSrcIpOutputReference <a name="LoadbalancerFrontendRuleMatchersSrcIpOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersSrcIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcIp">LoadbalancerFrontendRuleMatchersSrcIp</a>

---


### LoadbalancerFrontendRuleMatchersSrcPortList <a name="LoadbalancerFrontendRuleMatchersSrcPortList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersSrcPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersSrcPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>[]

---


### LoadbalancerFrontendRuleMatchersSrcPortOutputReference <a name="LoadbalancerFrontendRuleMatchersSrcPortOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersSrcPort;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPort">LoadbalancerFrontendRuleMatchersSrcPort</a>

---


### LoadbalancerFrontendRuleMatchersSrcPortRangeList <a name="LoadbalancerFrontendRuleMatchersSrcPortRangeList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersSrcPortRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>[]

---


### LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference <a name="LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resetInverse">resetInverse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEndInput">rangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStartInput">rangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStart">rangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeEndInput`<sup>Optional</sup> <a name="rangeEndInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEndInput"></a>

```typescript
public readonly rangeEndInput: number;
```

- *Type:* number

---

##### `rangeStartInput`<sup>Optional</sup> <a name="rangeStartInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStartInput"></a>

```typescript
public readonly rangeStartInput: number;
```

- *Type:* number

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rangeEnd`<sup>Required</sup> <a name="rangeEnd" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number

---

##### `rangeStart`<sup>Required</sup> <a name="rangeStart" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersSrcPortRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersSrcPortRange">LoadbalancerFrontendRuleMatchersSrcPortRange</a>

---


### LoadbalancerFrontendRuleMatchersUrlList <a name="LoadbalancerFrontendRuleMatchersUrlList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersUrl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>[]

---


### LoadbalancerFrontendRuleMatchersUrlOutputReference <a name="LoadbalancerFrontendRuleMatchersUrlOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersUrl;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrl">LoadbalancerFrontendRuleMatchersUrl</a>

---


### LoadbalancerFrontendRuleMatchersUrlParamList <a name="LoadbalancerFrontendRuleMatchersUrlParamList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersUrlParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersUrlParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>[]

---


### LoadbalancerFrontendRuleMatchersUrlParamOutputReference <a name="LoadbalancerFrontendRuleMatchersUrlParamOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersUrlParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlParam">LoadbalancerFrontendRuleMatchersUrlParam</a>

---


### LoadbalancerFrontendRuleMatchersUrlQueryList <a name="LoadbalancerFrontendRuleMatchersUrlQueryList" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.get"></a>

```typescript
public get(index: number): LoadbalancerFrontendRuleMatchersUrlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersUrlQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>[]

---


### LoadbalancerFrontendRuleMatchersUrlQueryOutputReference <a name="LoadbalancerFrontendRuleMatchersUrlQueryOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer"></a>

```typescript
import { loadbalancerFrontendRule } from '@cdktf/provider-upcloud'

new loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetInverse">resetInverse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetInverse` <a name="resetInverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetInverse"></a>

```typescript
public resetInverse(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverseInput">inverseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverse">inverse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverseInput`<sup>Optional</sup> <a name="inverseInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverseInput"></a>

```typescript
public readonly inverseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inverse`<sup>Required</sup> <a name="inverse" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.inverse"></a>

```typescript
public readonly inverse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadbalancerFrontendRuleMatchersUrlQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.loadbalancerFrontendRule.LoadbalancerFrontendRuleMatchersUrlQuery">LoadbalancerFrontendRuleMatchersUrlQuery</a>

---



